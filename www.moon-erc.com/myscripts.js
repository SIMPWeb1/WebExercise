

const walletID = document.getElementsByClassName("text-connect");

console.log(walletID);

function  connect () {
    if (typeof window.ethereum !== "undefined") {
        console.log("vao day");
        ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            const account = accounts[0];
            console.log(account);
            walletID[0].innerText = account;
          })
          .catch((error) => {
            console.log(error, error.code);
          });
      } else {
          window.open("https://metamask.io/download/", "_blank");
      }
}