import { Bytes, SignatureLike } from '@ethersproject/bytes';
import { Wallet } from '@ethersproject/wallet';
import { utils } from 'ethers';

/**
 * Sign message with private key
 * @param message Messag to sign
 * @param privateKey Private Key
 * @returns signature
 */
export const signMessage = async (message: string, privateKey: string) => {
  const wallet = new Wallet(privateKey);
  const signature = await wallet.signMessage(message);
  return signature;
};

export const verifyMessage = (
  message: Bytes | string,
  signature: SignatureLike,
  publicKey: string,
) => {
  const signer = utils.verifyMessage(message, signature);
  return signer === publicKey;
};

export const splitSignature = (signature: string) => {
  const r = signature.slice(0, 66);
  const s = '0x' + signature.slice(66, 130);
  const v = parseInt(signature.slice(130, 132), 16);
  return { r, s, v };
};
