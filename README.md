# 💎 [ton-load](https://github.com/LowGas-Jun/ton-load) lib

## TON Payload constructor, basic actions
Simplest actions(transaction) builder for interact with TON smart-contracts, try and use in your project, you can interact with DEX, Memepad and TON basic actions

1. DEX (DeDust/Ston.fi)
    - SWAP assetes to another token.
    - Buy action TON to DUST.
    - Sell action DUST to TON.

2. Memepad (Blum/BigPump/TonFun/GasPump)
    - Trade memecoins.
    - Buy action TON to Jetton.
    - Sell action Jetton to TON.

3. Actions (JettonTransfer/Burn/NFT-Transfer)
    - Simple Jetton Transfer.
    - Jetton Burn operation.
    - Simple NFT Trasnsfer.

## Installation
```bash
npm install https://github.com/LowGas-Jun/ton-load.git
```

## Clone
```bash
git clone https://github.com/LowGas-Jun/ton-load.git
```

## Examples
```typescript
import { PayloadConstructor } from "ton-load";

console.log(PayloadConstructor.createJettonTransfer({
    amount: 10,
    to: 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ'
}))

//output: te6cckEBAQEAWgAAsA+KfqUAAAAAAAAAAFAlQL5ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYPQkGCcNRE

console.log(PayloadConstructor.createGasPumpSell({
    to: 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ',
    amount: 1000
}))

//output: te6cckEBAQEANQAAZllfB7wAAAAAAAAAAF6NSlEACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEC4kNY=
```

## Usage
```javascript
<script>
//TonFun buy action
import { useTonConnect } from '@/utils/ton-connect'
import { PayloadConstructor } from "ton-load";

const connect = useTonConnect()
const payload = PayloadConstructor.createTonFunBuy({
    to: connect.wallet?.account?.address, //Address of connected wallet
    amount: 0 //Slippage, default 0
})
const transaction = {
    validUntil: Math.floor(Date.now() / 1000) + 60,
    messages: [
        {
            address: jetton_master, //Jetton Master Address
            amount: String(5 * 10**9), //Amount of TON to buy
            payload: payload
        }
    ]
}

connect.sendTransaction(transaction)
</script>
```
