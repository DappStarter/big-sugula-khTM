require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender tragic filter rival ranch champion coral light army gather'; 
let testAccounts = [
"0x6dda46d9c34e0d1a6a16239638bf2801b3ee20d89d577e2b7d0f8953d6eeeacb",
"0x4f69c5f61a2398670da96a51d3d3ff14dde6bae174e291222ecbf9c2e8ba576a",
"0x24c52b19de0da67420ee52c748bd05ff4c61caf1a9fb5e1795c9238a6bb751d6",
"0x051b431e0d643da0b1fc40d32bbb97db24c042e04fa59a691cf40b2a3adf7a55",
"0x10915740cb70db8fb039b902e93eae5bad597ad1d63b09b5c400f9eb85042b3b",
"0x83b862dd93857351ebfaba5c579cdb570bfd685cf803f2855af8e2f6b1f53089",
"0xd31bd5cd18a26de927b87863f8612b754d5d986c192482670b23d31505a195ed",
"0xd59c1a96c4ee1776071fae9751a6052f05da232b2c023eb724de003b70bf5836",
"0x4b2a3cd0059b6b9878eb1fe7e2ddcdec444b14ab5a7f670095598b321fb9e44c",
"0xb6f108bb641c805c2e73630414b2019b57697e8fe2463d13241dc783d86881ee"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


