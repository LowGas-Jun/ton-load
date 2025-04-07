"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJettonTransfer = getJettonTransfer;
const core_1 = require("@ton/core");
function getJettonTransfer(options) {
    if (!options.to) {
        throw new Error('Invalid args');
    }
    const payload = (0, core_1.beginCell)()
        .storeUint(0xf8a7ea5, 32)
        .storeUint(0, 64)
        .storeCoins((0, core_1.toNano)(options.amount))
        .storeAddress(core_1.Address.parse(options.to))
        .storeAddress(core_1.Address.parse(options.to))
        .storeBit(0)
        .storeCoins((0, core_1.toNano)("0.0005"))
        .storeBit(1)
        .endCell();
    return payload.toBoc().toString("base64");
}
//# sourceMappingURL=getJettonTransfer.js.map