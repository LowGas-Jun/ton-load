import { Cell } from "@ton/ton";
import { IOptions } from "../client/payload.interface";
interface IConstructor {
    mod: boolean;
}
export declare class PayloadConstructor implements IConstructor {
    readonly mod: boolean;
    constructor(mod: boolean);
    /**
     * ```
     * //test
     * const payload = PayloadConstructor.createJettonTransfer({
     *      amount: 1,
     *      to: 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ'
     * });
     *
     * console.log(payload)
     * ```
     * Example: __config = *{amount: 0, to: UQA...JKZ}*__
     * @param {IConfig} Config - *amount of tokens to transfer & recipient address*
     * @returns {string} **JettonTransfer payload in base64**
     */
    static createJettonTransfer(options: IOptions): Cell | null;
    /**
     * ```
     * //test
     * const payload = PayloadConstructor.createTonFunBuy({
     *      to: 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ'
     *      amount: 0
     * });
     *
     * console.log(payload)
     * ```
     * Example: __config = {*to: UQA...JKZ, amount: 0}*__
     * @param {IConfig} Config - *recipient address & min receive tokens amount*
     * @returns {string} **TonFun(Buy) payload in base64**
     */
    static createTonFunBuy(options: IOptions): Cell | null;
    /**
     * ```
     * //test
     * const payload = PayloadConstructor.createTonFunSell({
     *      amount: 1
     * });
     *
     * console.log(payload)
     * ```
     * Example: __config = *{amount: 0}*__
     * @param {IConfig} Config - *amount of tokens to sell*
     * @returns {string} **TonFun(Sell) payload in base64**
     */
    static createTonFunSell(options: IOptions): Cell | null;
    /**
     * ```
     * //test
     * const payload = PayloadConstructor.createSwapDeDustBuy({
     *      to: 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ',
     *      amount: 1,
     *      pool: 'EQDcm06RlreuMurm-yik9WbL6kI617B77OrSRF_ZjoCYFuny'
     * });
     *
     * console.log(payload)
     * ```
     * Example: __config = *{address: UQA...JKZ, amount: 1, pool: EQD...JWC}*__
     * @param {IConfig} Config - *recipient address & buy TON amount & pool address*
     * @returns {string} **DeDustSwap(Buy) payload in base64**
     */
    static createSwapDeDustBuy(options: IOptions): Cell | null;
    /**
     * ```
     * //test
     * const payload = PayloadConstructor.createSwapDeDustSell({
     *      to: 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ',
     *      amount: 1,
     *      pool: 'EQDcm06RlreuMurm-yik9WbL6kI617B77OrSRF_ZjoCYFuny',
     *      router: 'EQAf4BMoiqPf0U2ADoNiEatTemiw3UXkt5H90aQpeSKC2l7f'
     * });
     *
     * console.log(payload)
     * ```
     * Example: __config = *{address: UQA...JKZ, amount: 1, pool: EQD...JWC, router: EQA...l7f}*__
     * @param {IConfig} Config - *recipient address & sell tokens amount & pool address & router address*
     * @returns {string} **DeDustSwap(Sell) payload in base64**
     */
    static createSwapDeDustSell(options: IOptions): Cell | null;
    /**
     * ```
     * //test
     * const payload = PayloadConstructor.createGasPumpBuy();
     *
     * console.log(payload)
     * ```
     * @returns {string} **GasPump(Buy) payload in base64**
     */
    static createGasPumpBuy(): Cell | null;
    /**
     * ```
     * //test
     * const payload = PayloadConstructor.createGasPumpBuy({
     *      to: 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ',
     *      amount: 1
     * });
     *
     * console.log(payload)
     * ```
     * Example: __config = *{address: UQA...JKZ, amount: 1}*__
     * @param {IConfig} Config - *amount of tokens to sell & recipient address*
     * @returns {string} **GasPump(Sell) payload in base64**
     */
    static createGasPumpSell(options: IOptions): Cell | null;
}
export {};
