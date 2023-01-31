import React from 'react';

const tet =  {
  
  width: "50%",
  padding: "12px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
  marginTop: "6px",
  marginBottom: "16px",
  resize: "vertical",
}


const smt = {
  width: "50%",
  backgroundColor: "#2596be",
  color: "white",
  padding: "12px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
}

const cnt = {
  borderRadius: "5px",
  padding: "20px",
}


const Contact = () => {
  return (
    
    <div>
      <h2 className='text-center mt-4 mb-4'>Feel Free to Contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.485337462247!2d77.08690611492008!3d28.495042182472186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19386394df05%3A0x2f2805b9b4942a41!2sDLF%20CyberHub%20(Gurugram%2C%20Haryana)!5e0!3m2!1sen!2sin!4v1675079473134!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    
    <div className="container" style={cnt}>
            <form action="https://formspree.io/f/xpzeqloa" method="Post">
        <div className="row ">
          <div className="col-25">
          </div>
          <div className="row">
           <div className="col-25">
                <input type="text" style={tet}  placeholder="username" name='username'  required autoComplete='off' />
           </div>
           </div>
           <br/>
           <div className="row">
            <div className="col-25">
                <input type="email"  style={tet}  name="Email" placeholder='Email' required autoComplete='off' />
            </div>
           </div>
             <div className="row">
              <div className="col-25">
                <textarea name="Message" style={tet}   rows="8" required autoComplete='off' placeholder='Enter your message'></textarea>

              </div>
             </div>

           <div className="row ">
                <input type="submit" style={smt} value="Submit" />

                

           </div>
        </div>
            </form>
        
    </div>
       
    </div>
    
  
  )
}

export default Contact
