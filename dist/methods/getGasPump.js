"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGasPumpBuy = getGasPumpBuy;
exports.getGasPumpSell = getGasPumpSell;
const core_1 = require("@ton/core");
function getGasPumpBuy() {
    const payload = (0, core_1.beginCell)()
        .storeUint(0x6cd3e4b0, 32)
        .storeBit(1)
        .storeBit(0)
        .endCell();
    return payload.toBoc().toString("base64");
}
function getGasPumpSell(options) {
    if (!options.amount || !options.to) {
        throw new Error('Invalid args');
    }
    const payload = (0, core_1.beginCell)()
        .storeUint(0x595f07bc, 32)
        .storeUint(0, 64)
        .storeCoins((0, core_1.toNano)(options.amount))
        .storeAddress(core_1.Address.parse(options.to))
        .storeBit(0)
        .endCell();
    return payload.toBoc().toString("base64");
}
//# sourceMappingURL=getGasPump.js.map