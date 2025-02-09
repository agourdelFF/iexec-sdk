import Debug from 'debug';
import { ethersBnToBn } from '../utils/utils.js';
import { addressSchema, throwIfMissing } from '../utils/validator.js';
import { wrapCall } from '../utils/errorWrappers.js';

const debug = Debug('iexec:account:balance');

export const checkBalance = async (
  contracts = throwIfMissing(),
  address = throwIfMissing(),
) => {
  try {
    const vAddress = await addressSchema({
      ethProvider: contracts.provider,
    }).validate(address);
    const iexecContract = contracts.getIExecContract();
    const { stake, locked } = await wrapCall(
      iexecContract.viewAccount(vAddress),
    );
    return {
      stake: ethersBnToBn(stake),
      locked: ethersBnToBn(locked),
    };
  } catch (error) {
    debug('checkBalance()', error);
    throw error;
  }
};
