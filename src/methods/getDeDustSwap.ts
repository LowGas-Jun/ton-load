import { Address, Cell, beginCell, toNano } from '@ton/core';
import { IOptions } from '../client/payload.interface';

export function getDeDustBuy(options: IOptions): Cell | null {

    if(!options.to || !options.pool) {
        throw new Error('Invalid args');
    }

    const deadline: number = Math.floor(Date.now() / 1000) + (5 * 60);
    const swapParams = beginCell()
        .storeUint(deadline, 32)
        .storeAddress(Address.parse(options.to))
        .storeUint(0, 2)
        .storeBit(0)
        .storeBit(0)
        .endCell();
    
    const payload = beginCell()
        .storeUint(0xea06185d, 32)
        .storeUint(0, 64)
        .storeCoins(toNano(options.amount) - toNano(0.2))
        .storeAddress(Address.parse(options.pool))
        .storeUint(0, 1)
        .storeCoins(0)
        .storeBit(0)
        .storeRef(swapParams)
        .endCell();

    return payload.toBoc().toString("base64");
}

export function getDeDustSell(options: IOptions): Cell | null {

    if(!options.to || !options.pool || !options.router) {
        throw new Error('Invalid args');
    }

    const deadline: number = Math.floor(Date.now() / 1000) + (5 * 60);
    const swapParams = beginCell()
        .storeUint(deadline, 32)
        .storeAddress(Address.parse(options.to))
        .storeUint(0, 2)
        .storeBit(0)
        .storeBit(0)
        .endCell();
    
    const body = beginCell()
        .storeUint(0xe3a0d482, 32)
        .storeAddress(Address.parse(options.pool))
        .storeUint(0, 1)
        .storeCoins(0)
        .storeBit(0)
        .storeRef(swapParams)
        .endCell();
    
    const payload = beginCell()
        .storeUint(0x0f8a7ea5, 32)
        .storeUint(0, 64)
        .storeCoins(toNano(options.amount))
        .storeAddress(Address.parse(options.router))
        .storeAddress(Address.parse(options.to))
        .storeBit(0)
        .storeCoins(toNano(0.15))
        .storeBit(1)
        .storeRef(body)
        .endCell()


    return payload.toBoc().toString("base64");
}