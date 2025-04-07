"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeDustBuy = getDeDustBuy;
exports.getDeDustSell = getDeDustSell;
const core_1 = require("@ton/core");
function getDeDustBuy(options) {
    if (!options.to || !options.pool) {
        throw new Error('Invalid args');
    }
    const deadline = Math.floor(Date.now() / 1000) + (5 * 60);
    const swapParams = (0, core_1.beginCell)()
        .storeUint(deadline, 32)
        .storeAddress(core_1.Address.parse(options.to))
        .storeUint(0, 2)
        .storeBit(0)
        .storeBit(0)
        .endCell();
    const payload = (0, core_1.beginCell)()
        .storeUint(0xea06185d, 32)
        .storeUint(0, 64)
        .storeCoins((0, core_1.toNano)(options.amount) - (0, core_1.toNano)(0.2))
        .storeAddress(core_1.Address.parse(options.pool))
        .storeUint(0, 1)
        .storeCoins(0)
        .storeBit(0)
        .storeRef(swapParams)
        .endCell();
    return payload.toBoc().toString("base64");
}
function getDeDustSell(options) {
    if (!options.to || !options.pool || !options.router) {
        throw new Error('Invalid args');
    }
    const deadline = Math.floor(Date.now() / 1000) + (5 * 60);
    const swapParams = (0, core_1.beginCell)()
        .storeUint(deadline, 32)
        .storeAddress(core_1.Address.parse(options.to))
        .storeUint(0, 2)
        .storeBit(0)
        .storeBit(0)
        .endCell();
    const body = (0, core_1.beginCell)()
        .storeUint(0xe3a0d482, 32)
        .storeAddress(core_1.Address.parse(options.pool))
        .storeUint(0, 1)
        .storeCoins(0)
        .storeBit(0)
        .storeRef(swapParams)
        .endCell();
    const payload = (0, core_1.beginCell)()
        .storeUint(0x0f8a7ea5, 32)
        .storeUint(0, 64)
        .storeCoins((0, core_1.toNano)(options.amount))
        .storeAddress(core_1.Address.parse(options.router))
        .storeAddress(core_1.Address.parse(options.to))
        .storeBit(0)
        .storeCoins((0, core_1.toNano)(0.15))
        .storeBit(1)
        .storeRef(body)
        .endCell();
    return payload.toBoc().toString("base64");
}
//# sourceMappingURL=getDeDustSwap.js.map