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
```
