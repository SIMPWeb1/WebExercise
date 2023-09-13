

const walletID = document.getElementsByClassName("text-connect");

console.log(walletID);

function  connect () {
    if (typeof window.ethereum !== "undefined") {
        ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            const account = accounts[0];
            console.log(account);
            let address = account.slice(0,6)+"..."+account.slice(account.length-5,account.length-1)
            walletID[0].innerText = address;
          })
          .catch((error) => {
            console.log(error, error.code);
          });
      } else {
          window.open("https://metamask.io/download/", "_blank");
      }
}

function chart() {
  window.open("https://dexscreener.com/arbitrum/0xb339cc4ff6171279ad7fafc99d523d3ce9928e4d");
}

function buy() {
  window.open("https://app.uniswap.org/#/swap");
}

function copyAddress(){
  navigator.clipboard.writeText("0x27156018aE36E0f6e0C54F472c829a7D569634Fe")
}