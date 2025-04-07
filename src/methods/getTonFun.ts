import { Address, Cell, beginCell, toNano } from '@ton/core';
import { IOptions } from '../client/payload.interface';

export function getTonFunBuy(options: IOptions): Cell | null {

    if(!options.to) {
        throw new Error('Invalid args');
    }

    const payload = beginCell()
        .storeUint(0xaf750d34, 32)
        .storeUint(0, 64)
        .storeCoins(toNano(options.amount) ?? 0)
        .storeBit(0)
        .storeAddress(Address.parse(options.to))
        .endCell();

    return payload.toBoc().toString("base64");
}

export function getTonFunSell(options: IOptions): Cell {

    const payload = beginCell()
        .storeUint(0x742b36d8, 32)
        .storeUint(0, 64)
        .storeCoins(toNano(options.amount))
        .storeCoins(toNano('0'))
        .storeBit(0)
        .endCell();

    return payload.toBoc().toString("base64");
}