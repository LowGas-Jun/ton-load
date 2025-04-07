import { Address, Cell, beginCell, toNano } from '@ton/core';
import { IOptions } from '../client/payload.interface';

export function getJettonTransfer(options: IOptions): Cell | null {

    if(!options.to) {
        throw new Error('Invalid args');
    }

    const payload = beginCell()
        .storeUint(0xf8a7ea5, 32)
        .storeUint(0, 64)
        .storeCoins(toNano(options.amount))
        .storeAddress(Address.parse(options.to))
        .storeAddress(Address.parse(options.to))
        .storeBit(0)
        .storeCoins(toNano("0.0005"))
        .storeBit(1)
        .endCell();

    return payload.toBoc().toString("base64");
}