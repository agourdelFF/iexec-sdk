import Debug from 'debug';
import { ethersBnToBn } from '../utils/utils.js';
import { throwIfMissing } from '../utils/validator.js';
import { wrapCall } from '../utils/errorWrappers.js';

const debug = Debug('iexec:protocol:configuration');

export const getTimeoutRatio = async (contracts = throwIfMissing()) => {
  try {
    return ethersBnToBn(
      await wrapCall(contracts.getIExecContract().final_deadline_ratio()),
    );
  } catch (error) {
    debug('getTimeoutRatio()', error);
    throw error;
  }
};
