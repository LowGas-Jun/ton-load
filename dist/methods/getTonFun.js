"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTonFunBuy = getTonFunBuy;
exports.getTonFunSell = getTonFunSell;
const core_1 = require("@ton/core");
function getTonFunBuy(options) {
    if (!options.to) {
        throw new Error('Invalid args');
    }
    const payload = (0, core_1.beginCell)()
        .storeUint(0xaf750d34, 32)
        .storeUint(0, 64)
        .storeCoins((0, core_1.toNano)(options.amount) ?? 0)
        .storeBit(0)
        .storeAddress(core_1.Address.parse(options.to))
        .endCell();
    return payload.toBoc().toString("base64");
}
function getTonFunSell(options) {
    const payload = (0, core_1.beginCell)()
        .storeUint(0x742b36d8, 32)
        .storeUint(0, 64)
        .storeCoins((0, core_1.toNano)(options.amount))
        .storeCoins((0, core_1.toNano)('0'))
        .storeBit(0)
        .endCell();
    return payload.toBoc().toString("base64");
}
//# sourceMappingURL=getTonFun.js.map