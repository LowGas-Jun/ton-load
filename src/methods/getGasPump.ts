import { Address, Cell, beginCell, toNano } from '@ton/core';
import { IOptions } from '../client/payload.interface';

export function getGasPumpBuy(): Cell | null {

    const payload = beginCell()
        .storeUint(0x6cd3e4b0, 32)
        .storeBit(1)
        .storeBit(0)
        .endCell();

    return payload.toBoc().toString("base64");
}

export function getGasPumpSell(options: IOptions): Cell | null {

    if(!options.amount || !options.to) {
        throw new Error('Invalid args');
    }

    const payload = beginCell()
        .storeUint(0x595f07bc, 32)
        .storeUint(0, 64) 
        .storeCoins(toNano(options.amount))
        .storeAddress(Address.parse(options.to))
        .storeBit(0)
        .endCell();

    return payload.toBoc().toString("base64");
}