export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      const obj = {
        status: '👆🏽 Write a message in the text-field above.',
        address: addressArray[0],
      };

      return obj.address;
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log('Install metamask');
  }
};
