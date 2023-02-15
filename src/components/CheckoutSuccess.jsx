import { Link } from 'react-router-dom';


const CheckoutSuccess = () => {
    return(
        <div className="continue-shopping">
            <h2 className='d-flex justify-content-center'>Thank You!</h2>
            <br />
            <h4 className='d-flex justify-content-center'>Your order was completed successfully.</h4>
            <br />

                <Link  className='d-flex justify-content-center' to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
    );
}


export default CheckoutSuccess;