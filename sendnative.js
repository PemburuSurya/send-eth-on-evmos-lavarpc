require("dotenv").config();
const ethers = require('ethers');
(async () => {
	const node = 'https://evmos-testnet.lava.build/lava-referer-478d7a2b-a4bd-44cc-81d6-ead4c7d129e3/'    //your rpc
const provider = new ethers.providers.JsonRpcProvider(node);

const privatekey = '' // your private key
    const signer = new ethers.Wallet(privatekey, provider);

      const tx = await signer.sendTransaction({
        to: '', // receiver adress
        value: ethers.utils.parseUnits('0.00001', 'ether'),
      });
      console.log(tx);
})();
