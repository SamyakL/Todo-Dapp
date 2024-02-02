const ABI = require("../ABI.json");
const web3 = new Web3("https://hidden-proportionate-snow.ethereum-sepolia.quiknode.pro/be758c09d5c6b241806e1e5c786d2659f523d16f/")      //to get this , went to quicknode dashboard after logging ing waha pe eth sepholia hai, usme http ourl providewr, lene ka!
const contracAddress = "0x382903598433a0B35F511BeaBE3e5B46D6D13f96";
const contract = new web3.eth.Contract(ABI, contracAddress);
const {Web3} = require("web3");

module.exports={contract}