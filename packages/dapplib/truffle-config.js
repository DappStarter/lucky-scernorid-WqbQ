require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey prison suspect venture strong random noise evidence hunt nation flip gentle'; 
let testAccounts = [
"0x1178b3220678be5e4fd6dd087d5405beb8499568b1c20e13f18cb910ff49f105",
"0x8e9c929af8a81cdfa53470261a5cbe71852c03d31ca5461b42c20baba0025a4b",
"0x8b7d1abbaf01a3e78d9b1a9b2891343e14adb0a0dd503fc6dd48392c9eeacd67",
"0x6fedd7c866e9d2ad227d2d3ddafa3d8cc0a52bde46ae647e0dae536ad7de02a4",
"0xe8bd7b8b4fca5268b8e7902bd8546c19c409d3fe83005a86f381a48769703abd",
"0x9f9cf3318deedc0090b393ce9381e0d85a2660554b6ac2d5bef134d7eabd5bd0",
"0x35e03e82ed719835549581899f4c04045d477ce14b9bfa467ec9dcdeb7e0529e",
"0x0b2b034cf911e12ee3d399bf6797067bb0e55726817851c616451e938dfa2504",
"0x72b03b8d929b67befed5b1fa50fc31dd635e4420dfb0f1cfd40bad509ec02158",
"0xf20f7027f64ed27fbd6f6f56276acad28a582905eaf6623b43f50b954b1536a1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

