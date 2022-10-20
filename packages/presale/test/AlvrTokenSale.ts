import { loadFixture, time } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { BigNumber, utils } from 'ethers';
import { ethers } from 'hardhat';

describe('Alvara Token contract', function () {
  const decimals = '000000000000000000';

  async function deployContractFixture() {
    const [master, treasury, alice, alice2, alice3, alice4] =
      await ethers.getSigners();

    const Alvara = await ethers.getContractFactory('Alvara');

    const alvara = await Alvara.deploy();

    const AlvrTokenSale = await ethers.getContractFactory('AlvrTokenSale');

    const alvrTokenSale = await AlvrTokenSale.deploy(
      alvara.address,
      treasury.address,
      master.address,
    );

    return {
      alvara,
      alvrTokenSale,
      master,
      treasury,
      alice,
      alice2,
      alice3,
      alice4,
    };
  }

  it('should initialize properly', async function () {
    const { alvara, alvrTokenSale, master, treasury } = await loadFixture(
      deployContractFixture,
    );

    expect(await alvrTokenSale.treasuryWallet()).to.be.eq(treasury.address);
    expect(await alvrTokenSale.alvara()).to.be.eq(alvara.address);
    expect(await alvrTokenSale.owner()).to.be.eq(master.address);
    expect(await alvrTokenSale.optionCnt()).to.be.eq(3);
    expect(await alvrTokenSale.txSigner()).to.be.eq(master.address);
    expect(await alvrTokenSale.claimable()).to.be.eq(false);
    expect(await alvrTokenSale.paused()).to.be.eq(false);
    expect(await alvrTokenSale.allowedPercentage()).to.be.eq(500);
  });

  it('should set treasury wallet', async function () {
    const { alvrTokenSale, alice, treasury } = await loadFixture(
      deployContractFixture,
    );

    expect(await alvrTokenSale.treasuryWallet()).to.be.eq(treasury.address);
    await expect(
      alvrTokenSale.connect(alice).setTreasuryWallet(alice.address),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setTreasuryWallet(alice.address);
    expect(await alvrTokenSale.treasuryWallet()).to.be.eq(alice.address);
  });

  it('should change tx signer', async function () {
    const { alvrTokenSale, alice } = await loadFixture(deployContractFixture);

    await expect(
      alvrTokenSale.connect(alice).setTxSigner(alice.address),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setTxSigner(alice.address);
    expect(await alvrTokenSale.txSigner()).to.be.eq(alice.address);
  });

  it('should pause', async function () {
    const { alvrTokenSale, alice } = await loadFixture(deployContractFixture);

    await expect(alvrTokenSale.connect(alice).pauseSale()).to.be.revertedWith(
      'Ownable: caller is not the owner',
    );
    await alvrTokenSale.pauseSale();
    expect(await alvrTokenSale.paused()).to.be.eq(true);
    await alvrTokenSale.unpauseSale();
    expect(await alvrTokenSale.paused()).to.be.eq(false);
  });

  it('should set claimable', async function () {
    const { alvrTokenSale, alice } = await loadFixture(deployContractFixture);

    await expect(
      alvrTokenSale.connect(alice).setClaimable(),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setClaimable();
    expect(await alvrTokenSale.claimable()).to.be.eq(true);
    await alvrTokenSale.setUnclaimable();
    expect(await alvrTokenSale.claimable()).to.be.eq(false);
  });

  it('should set schedule', async function () {
    const { alvrTokenSale, alice } = await loadFixture(deployContractFixture);

    await expect(
      alvrTokenSale.connect(alice).setSchedule(0, [0, 10000]),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setSchedule(0, [0, 10000]);
    expect(await alvrTokenSale.schedules(0, 0)).to.be.eq(0);
    expect(await alvrTokenSale.schedules(0, 1)).to.be.eq(10000);
    expect(await alvrTokenSale.schedules(0, 2)).to.be.eq(0);
  });

  it('should set allowed percentage', async function () {
    const { alvrTokenSale, alice } = await loadFixture(deployContractFixture);

    await expect(
      alvrTokenSale.connect(alice).setAllowedPercentage(700),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setAllowedPercentage(700);
    expect(await alvrTokenSale.allowedPercentage()).to.be.eq(700);
  });

  it('should set range', async function () {
    const { alvrTokenSale, alice } = await loadFixture(deployContractFixture);

    await expect(
      alvrTokenSale
        .connect(alice)
        .setOptionRange(0, '4500' + decimals, '150000' + decimals),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setOptionRange(
      0,
      '4500' + decimals,
      '150000' + decimals,
    );
    expect(await alvrTokenSale.minimumTokens(0)).to.be.eq('4500' + decimals);
    expect(await alvrTokenSale.maximumTokens(0)).to.be.eq('150000' + decimals);

    await expect(
      alvrTokenSale.connect(alice).setOptionMinAmount(0, '5000' + decimals),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setOptionMinAmount(0, '5000' + decimals);
    expect(await alvrTokenSale.minimumTokens(0)).to.be.eq('5000' + decimals);

    await expect(
      alvrTokenSale.connect(alice).setOptionMaxAmount(0, '100000' + decimals),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setOptionMaxAmount(0, '100000' + decimals);
    expect(await alvrTokenSale.maximumTokens(0)).to.be.eq('100000' + decimals);
  });

  it('should set tge', async function () {
    const { alvrTokenSale, alice } = await loadFixture(deployContractFixture);

    await expect(
      alvrTokenSale.connect(alice).setTge(1665671980245),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setTge(1665671980245);
    expect(await alvrTokenSale.tge()).to.be.eq(1665671980245);
  });

  it('should set alvara', async function () {
    const { alvrTokenSale, alice } = await loadFixture(deployContractFixture);

    await expect(
      alvrTokenSale.connect(alice).setAlvara(alice.address),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setAlvara(alice.address);
    expect(await alvrTokenSale.alvara()).to.be.eq(alice.address);
  });

  it('should set option count', async function () {
    const { alvrTokenSale, alice } = await loadFixture(deployContractFixture);

    await expect(
      alvrTokenSale.connect(alice).setOptionCnt(4),
    ).to.be.revertedWith('Ownable: caller is not the owner');
    await alvrTokenSale.setOptionCnt(4);
    expect(await alvrTokenSale.optionCnt()).to.be.eq(4);
  });

  it('should block/unblock users', async function () {
    const { alvrTokenSale, alice } = await loadFixture(deployContractFixture);

    await expect(
      alvrTokenSale.connect(alice).blockUsers([alice.address]),
    ).to.be.rejectedWith('Ownable: caller is not the owner');
    await alvrTokenSale.blockUsers([alice.address]);
    expect(await alvrTokenSale.isBlocked(alice.address)).to.be.eq(true);

    await expect(
      alvrTokenSale.connect(alice).unblockUsers([alice.address]),
    ).to.be.rejectedWith('Ownable: caller is not the owner');
    await alvrTokenSale.unblockUsers([alice.address]);
    expect(await alvrTokenSale.isBlocked(alice.address)).to.be.eq(false);
  });

  it('should claim tokens', async function () {
    const { alvara, alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );

    await alvara.transfer(alice.address, '10000000' + decimals);
    expect(await alvara.balanceOf(alice.address)).to.be.eq(
      '10000000' + decimals,
    );
    expect(await alvara.balanceOf(master.address)).to.be.eq('0');

    await alvara
      .connect(alice)
      .transfer(alvrTokenSale.address, '10000' + decimals);
    expect(await alvara.balanceOf(alvrTokenSale.address)).to.be.eq(
      '10000' + decimals,
    );
    await alvrTokenSale.claimAdmin(alvara.address);

    expect(await alvara.balanceOf(master.address)).to.be.eq('10000' + decimals);
    expect(await alvara.balanceOf(alice.address)).to.be.eq(
      '9990000' + decimals,
    );

    await alice.sendTransaction({
      to: alvrTokenSale.address,
      value: '1' + decimals,
    });
    const provider = ethers.provider;

    expect(await provider.getBalance(alvrTokenSale.address)).to.be.eq(
      '1' + decimals,
    );

    const _masterBalance = await provider.getBalance(master.address);
    await alvrTokenSale.claimAdmin(
      '0x0000000000000000000000000000000000000000',
    );
    expect(await provider.getBalance(alvrTokenSale.address)).to.be.eq('0');
    expect(_masterBalance).to.be.lt(await provider.getBalance(master.address));
  });

  it('addVest: should work with minimum tokens', async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );
    const nonce = await alvrTokenSale.nonce(alice.address);

    const amounts = ['1' + decimals, '2' + decimals, '10' + decimals];
    const tokens = ['4750' + decimals, '9500' + decimals, '95000' + decimals];
    const totalAmount = amounts.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      BigNumber.from(0),
    );
    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [alice.address, totalAmount, amounts, tokens, nonce],
    );
    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = utils.splitSignature(signature);

    await alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
      value: totalAmount,
    });

    expect(await alvrTokenSale.totalVests()).to.be.eq('13' + decimals);
    expect(await alvrTokenSale.totalTokens()).to.be.eq('109250' + decimals);
    expect(await alvrTokenSale.investorCnt()).to.be.eq(1);
    expect(await alvrTokenSale.vests(alice.address, 0)).to.be.eq(
      '1' + decimals,
    );
    expect(await alvrTokenSale.vests(alice.address, 1)).to.be.eq(
      '2' + decimals,
    );
    expect(await alvrTokenSale.vests(alice.address, 2)).to.be.eq(
      '10' + decimals,
    );
    expect(await alvrTokenSale.tokens(alice.address, 0)).to.be.eq(
      '4750' + decimals,
    );
    expect(await alvrTokenSale.tokens(alice.address, 1)).to.be.eq(
      '9500' + decimals,
    );
    expect(await alvrTokenSale.tokens(alice.address, 2)).to.be.eq(
      '95000' + decimals,
    );
  });

  it('addVest: should work with maximum tokens', async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );
    const nonce = await alvrTokenSale.nonce(alice.address);

    const amounts = ['1' + decimals, '2' + decimals, '10' + decimals];
    const tokens = [
      '105000' + decimals,
      '525000' + decimals,
      '1050000' + decimals,
    ];
    const totalAmount = amounts.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      BigNumber.from(0),
    );
    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [alice.address, totalAmount, amounts, tokens, nonce],
    );
    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = utils.splitSignature(signature);

    await alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
      value: totalAmount,
    });

    expect(await alvrTokenSale.totalVests()).to.be.eq('13' + decimals);
    expect(await alvrTokenSale.totalTokens()).to.be.eq('1680000' + decimals);
    expect(await alvrTokenSale.investorCnt()).to.be.eq(1);
    expect(await alvrTokenSale.vests(alice.address, 0)).to.be.eq(
      '1' + decimals,
    );
    expect(await alvrTokenSale.vests(alice.address, 1)).to.be.eq(
      '2' + decimals,
    );
    expect(await alvrTokenSale.vests(alice.address, 2)).to.be.eq(
      '10' + decimals,
    );
    expect(await alvrTokenSale.tokens(alice.address, 0)).to.be.eq(
      '105000' + decimals,
    );
    expect(await alvrTokenSale.tokens(alice.address, 1)).to.be.eq(
      '525000' + decimals,
    );
    expect(await alvrTokenSale.tokens(alice.address, 2)).to.be.eq(
      '1050000' + decimals,
    );
  });

  it('addVest: should block lower than minimum tokens', async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );
    const nonce = await alvrTokenSale.nonce(alice.address);

    const amounts = ['1' + decimals, '2' + decimals, '10' + decimals];
    const tokens = ['4749' + decimals, '9499' + decimals, '94999' + decimals];
    const totalAmount = amounts.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      BigNumber.from(0),
    );
    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [alice.address, totalAmount, amounts, tokens, nonce],
    );
    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = utils.splitSignature(signature);

    await expect(
      alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
        value: totalAmount,
      }),
    ).to.be.revertedWith('Vest more than minimum vest amount');
  });

  it('addVest: should block higher than maximum tokens 1', async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );
    const nonce = await alvrTokenSale.nonce(alice.address);

    const amounts = ['1' + decimals, '2' + decimals, '10' + decimals];
    const tokens = [
      '105001' + decimals,
      '525001' + decimals,
      '1050001' + decimals,
    ];
    const totalAmount = amounts.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      BigNumber.from(0),
    );
    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [alice.address, totalAmount, amounts, tokens, nonce],
    );
    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = utils.splitSignature(signature);

    await expect(
      alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
        value: totalAmount,
      }),
    ).to.be.revertedWith('Exceeds maximum vest amount');
  });

  it('addVest: should block higher than maximum tokens 2', async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );
    {
      const nonce = await alvrTokenSale.nonce(alice.address);

      const amounts = ['1' + decimals, '0', '0'];
      const tokens = ['100000' + decimals, '0', '0'];
      const totalAmount = amounts.reduce(
        (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
        BigNumber.from(0),
      );
      const message = utils.solidityKeccak256(
        ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
        [alice.address, totalAmount, amounts, tokens, nonce],
      );
      const signature = await master.signMessage(utils.arrayify(message));

      const { v, r, s } = utils.splitSignature(signature);

      await alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
        value: totalAmount,
      });
      expect(await alvrTokenSale.totalVests()).to.be.eq('1' + decimals);
      expect(await alvrTokenSale.totalTokens()).to.be.eq('100000' + decimals);
      expect(await alvrTokenSale.investorCnt()).to.be.eq(1);
      expect(await alvrTokenSale.vests(alice.address, 0)).to.be.eq(
        '1' + decimals,
      );
      expect(await alvrTokenSale.vests(alice.address, 1)).to.be.eq(0);
      expect(await alvrTokenSale.vests(alice.address, 2)).to.be.eq(0);
      expect(await alvrTokenSale.tokens(alice.address, 0)).to.be.eq(
        '100000' + decimals,
      );
      expect(await alvrTokenSale.tokens(alice.address, 1)).to.be.eq(0);
      expect(await alvrTokenSale.tokens(alice.address, 2)).to.be.eq(0);
    }

    {
      const nonce = await alvrTokenSale.nonce(alice.address);

      const amounts = ['1' + decimals, '0', '0'];
      const tokens = ['100000' + decimals, '0', '0'];
      const totalAmount = amounts.reduce(
        (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
        BigNumber.from(0),
      );
      const message = utils.solidityKeccak256(
        ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
        [alice.address, totalAmount, amounts, tokens, nonce],
      );
      const signature = await master.signMessage(utils.arrayify(message));

      const { v, r, s } = utils.splitSignature(signature);

      await expect(
        alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
          value: totalAmount,
        }),
      ).to.be.revertedWith('Exceeds maximum vest amount');
    }
  });

  it('addVest: should block blocked investor', async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );
    await alvrTokenSale.blockUsers([alice.address]);
    expect(await alvrTokenSale.isBlocked(alice.address)).to.be.eq(true);

    const nonce = await alvrTokenSale.nonce(alice.address);
    const amounts = ['1' + decimals, '0', '0'];
    const tokens = ['100000' + decimals, '0', '0'];
    const totalAmount = amounts.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      BigNumber.from(0),
    );
    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [alice.address, totalAmount, amounts, tokens, nonce],
    );
    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = utils.splitSignature(signature);

    await expect(
      alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
        value: totalAmount,
      }),
    ).to.be.revertedWith('Blocked investor');
  });

  it('addVest: should work for several investors', async function () {
    const { alvrTokenSale, alice, master, alice2 } = await loadFixture(
      deployContractFixture,
    );

    {
      const nonce = await alvrTokenSale.nonce(alice.address);
      const amounts = ['1' + decimals, '0', '0'];
      const tokens = ['100000' + decimals, '0', '0'];
      const totalAmount = amounts.reduce(
        (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
        BigNumber.from(0),
      );
      const message = utils.solidityKeccak256(
        ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
        [alice.address, totalAmount, amounts, tokens, nonce],
      );
      const signature = await master.signMessage(utils.arrayify(message));

      const { v, r, s } = utils.splitSignature(signature);

      await alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
        value: totalAmount,
      });
    }
    {
      const nonce = await alvrTokenSale.nonce(alice2.address);
      const amounts = ['1' + decimals, '2' + decimals, '10' + decimals];
      const tokens = [
        '100000' + decimals,
        '200000' + decimals,
        '1000000' + decimals,
      ];
      const totalAmount = amounts.reduce(
        (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
        BigNumber.from(0),
      );
      const message = utils.solidityKeccak256(
        ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
        [alice2.address, totalAmount, amounts, tokens, nonce],
      );
      const signature = await master.signMessage(utils.arrayify(message));

      const { v, r, s } = utils.splitSignature(signature);

      await alvrTokenSale.connect(alice2).addVest(amounts, tokens, v, r, s, {
        value: totalAmount,
      });
    }

    expect(await alvrTokenSale.totalVests()).to.be.eq('14' + decimals);
    expect(await alvrTokenSale.totalTokens()).to.be.eq('1400000' + decimals);
    expect(await alvrTokenSale.investorCnt()).to.be.eq(2);
    expect(await alvrTokenSale.vests(alice.address, 0)).to.be.eq(
      '1' + decimals,
    );
    expect(await alvrTokenSale.vests(alice.address, 1)).to.be.eq(0);
    expect(await alvrTokenSale.vests(alice.address, 2)).to.be.eq(0);
    expect(await alvrTokenSale.tokens(alice.address, 0)).to.be.eq(
      '100000' + decimals,
    );
    expect(await alvrTokenSale.tokens(alice.address, 1)).to.be.eq(0);
    expect(await alvrTokenSale.tokens(alice.address, 2)).to.be.eq(0);
    expect(await alvrTokenSale.vests(alice2.address, 0)).to.be.eq(
      '1' + decimals,
    );
    expect(await alvrTokenSale.vests(alice2.address, 1)).to.be.eq(
      '2' + decimals,
    );
    expect(await alvrTokenSale.vests(alice2.address, 2)).to.be.eq(
      '10' + decimals,
    );
    expect(await alvrTokenSale.tokens(alice2.address, 0)).to.be.eq(
      '100000' + decimals,
    );
    expect(await alvrTokenSale.tokens(alice2.address, 1)).to.be.eq(
      '200000' + decimals,
    );
    expect(await alvrTokenSale.tokens(alice2.address, 2)).to.be.eq(
      '1000000' + decimals,
    );
  });

  it('should revert addVest with modified amounts', async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );

    const nonce = await alvrTokenSale.nonce(alice.address);
    const amounts = ['1' + decimals, '0', '0'];
    const tokens = ['100000' + decimals, '0', '0'];
    const totalAmount = amounts.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      BigNumber.from(0),
    );
    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [alice.address, totalAmount, amounts, tokens, nonce],
    );
    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = utils.splitSignature(signature);

    amounts[0] = '2' + decimals;
    await expect(
      alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
        value: totalAmount,
      }),
    ).to.be.revertedWith('Invalid signature');

    amounts[0] = '1' + decimals;
    tokens[0] = '200000' + decimals;
    await expect(
      alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
        value: totalAmount,
      }),
    ).to.be.revertedWith('Invalid signature');
  });

  it('Should claim amounts', async function () {
    const { alvrTokenSale, alice, master } = await loadFixture(
      deployContractFixture,
    );

    const nonce = await alvrTokenSale.nonce(alice.address);
    const amounts = ['1' + decimals, '1', '0'];
    const tokens = ['100000' + decimals, '100000' + decimals, '0'];
    const totalAmount = amounts.reduce(
      (prev, amount) => BigNumber.from(prev).add(BigNumber.from(amount)),
      BigNumber.from(0),
    );
    const message = utils.solidityKeccak256(
      ['address', 'uint256', 'uint256[]', 'uint256[]', 'uint256'],
      [alice.address, totalAmount, amounts, tokens, nonce],
    );
    const signature = await master.signMessage(utils.arrayify(message));

    const { v, r, s } = utils.splitSignature(signature);

    await alvrTokenSale.connect(alice).addVest(amounts, tokens, v, r, s, {
      value: totalAmount,
    });

    await alvrTokenSale.setTge(await time.latest());
    expect(await alvrTokenSale.unclaimed(alice.address)).to.be.eq(
      '100000' + decimals,
    );

    await time.increase(2629743);
    expect(await alvrTokenSale.unclaimed(alice.address)).to.be.eq(
      '116660' + decimals,
    );
  });
});
