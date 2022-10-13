import { loadFixture, time } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { utils } from "ethers";
import { ethers } from "hardhat";

import { splitSignature } from "../utils/sign";

describe("Alvara Token contract", function () {
  async function deployContractFixture() {
    const [master, treasury, alice] = await ethers.getSigners();

    const Alvara = await ethers.getContractFactory("Alvara");

    const alvara = await Alvara.deploy();

    const AlvrTokenSale = await ethers.getContractFactory("AlvrTokenSale");

    const alvrTokenSale = await AlvrTokenSale.deploy(
      alvara.address,
      treasury.address,
      master.address
    );

    await alvrTokenSale.connect(master).setOptionRange(0, 50, 500);

    return { alvara, alvrTokenSale, master, treasury, alice };
  }

  it("Should addVest", async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture
    );
    const vestAmount = 500;

    const nonce = await alvrTokenSale.nonce(alice.address);

    const amounts = ["500", "0", "0"];

    const message = utils.solidityKeccak256(
      ["address", "uint256", "uint256[]", "uint256"],
      [alice.address, vestAmount, amounts, nonce]
    );

    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = splitSignature(signature);

    const _ = await alvrTokenSale
      .connect(alice)
      .addVest(amounts, amounts, v, r, s, {
        value: vestAmount,
      });
  });

  it("should revert addVest with invalid amounts", async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture
    );

    const vestAmount = 5000;

    const nonce = await alvrTokenSale.nonce(alice.address);

    const amounts = ["500", "0", "0"];

    const message = utils.solidityKeccak256(
      ["address", "uint256", "uint256[]", "uint256"],
      [alice.address, vestAmount, amounts, nonce]
    );

    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = splitSignature(signature);

    const result = alvrTokenSale
      .connect(alice)
      .addVest(amounts, amounts, v, r, s, {
        value: vestAmount,
      });

    await expect(result).to.be.revertedWith("Invalid Amounts");
  });

  it("should revert addVest with modified amounts", async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture
    );

    const vestAmount = 5000;

    const nonce = await alvrTokenSale.nonce(alice.address);

    const amounts = ["500", "0", "0"];

    const message = utils.solidityKeccak256(
      ["address", "uint256", "uint256[]", "uint256"],
      [alice.address, vestAmount, amounts, nonce]
    );

    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = splitSignature(signature);

    const modifiedAmounts = ["0", "200", "300"];

    const result = alvrTokenSale
      .connect(alice)
      .addVest(amounts, modifiedAmounts, v, r, s, {
        value: vestAmount,
      });

    await expect(result).to.be.revertedWith("Invalid signature");
  });

  it("Should claim amounts", async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture
    );
    const vestAmount = 500;

    const nonce = await alvrTokenSale.nonce(alice.address);

    const amounts = ["500", "0", "0"];

    const message = utils.solidityKeccak256(
      ["address", "uint256", "uint256[]", "uint256"],
      [alice.address, vestAmount, amounts, nonce]
    );

    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = splitSignature(signature);

    const _ = await alvrTokenSale
      .connect(alice)
      .addVest(amounts, amounts, v, r, s, {
        value: vestAmount,
      });

    await time.increaseTo(Date.now());
  });
});
