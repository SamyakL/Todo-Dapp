import {Web3} from "web3";
import ABI from "./ABI.json";
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const Wallet =({saveState}) =>{
    const navigateTo = useNavigate();
    const connectWallet = async ()=>{
        console.log("Function called ");
        try{
            if(window.ethereum){
                const web3 = new Web3(window.ethereum);
                const accounts = await window.ethereum.request({        //ye krne pe array milti hai ccounts ki
                    method:"eth_requestAccounts"
                })
                const contracAddress = "0x382903598433a0B35F511BeaBE3e5B46D6D13f96";
                const contract = new web3.eth.Contract(ABI, contracAddress);
                saveState({web3:web3, contract: contract, account:accounts[0]})      //uss array meka first element
                
                navigateTo('/view-All-Tasks')
            }   
            else{
                throw new Error;
            }
            
        }
        catch (error) {
            console.log(error);
        }
    }
    return <>
    <div className = "wallet_header">
        <span> WELCOME TO </span><p>TODO 3.0</p>
    </div>
    <div className="connect_wallet_section todo_btn">
    <p>Please Connect Your Metamask wallet to access the app</p>
    <button on onClick={connectWallet}>Connect Wallet</button>
    </div>
    </>
}
Wallet.PropTypes={
    saveState: PropTypes.func.isRequired
};
export default Wallet;