import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2 className='text-center mt-4 mb-4'>Feel Free to Contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.485337462247!2d77.08690611492008!3d28.495042182472186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19386394df05%3A0x2f2805b9b4942a41!2sDLF%20CyberHub%20(Gurugram%2C%20Haryana)!5e0!3m2!1sen!2sin!4v1675079473134!5m2!1sen!2sin" width="100%" height="400" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    
    <div className="container ">
        <div className="mb-3 ">
            <form action="https://formspree.io/f/xpzeqloa" method="Post">
                <input type="text" placeholder="username" name='username' className='form-control  w-50 p-2  ' required autoComplete='off' />
                <input type="email" className='form-control w-50 p-2' name="Email" placeholder='Email' required autoComplete='off' />
                <textarea name="Message" className='form-control w-50 p-2'  rows="8" required autoComplete='off' placeholder='Enter your message'></textarea>
                <input type="submit" value="Send" />
            </form>
        </div>
    </div>
       
    </div>

  
  )
}

export default Contact
