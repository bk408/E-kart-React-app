import axios from "axios";
import { useSelector } from "react-redux";
import {url} from "../slices/api";


const PayButton = ({cartItems}) => {
    const handleCheckout = () => {
      axios.post(`${url}/stripe/create-checkout-session`, {
        
      })
    };


    return(
        <>
        <button onClick={() => handleCheckout()} >Check Out</button>
        </>
    );
};

export default PayButton ;