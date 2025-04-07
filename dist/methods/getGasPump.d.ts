import { Cell } from '@ton/core';
import { IOptions } from '../client/payload.interface';
export declare function getGasPumpBuy(): Cell | null;
export declare function getGasPumpSell(options: IOptions): Cell | null;
