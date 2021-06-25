import React from 'react'

const Contact = () => {
    return (
        <div>
          <h1>Contact Us</h1>
      <form name="contact-v1" 
      method="POST"
    data-netlify="true">
        <input type="hidden" name="form-name" value="contact-v1" />
     <input type="text" placeholder="First Name" name="name" />
     <input type="email" placeholder="Email" name="email"/>
     <textarea placeholder="Any Comment" name="message"/>
     <button type="submit">Submit</button>
</form>  
        </div>
    )
}

export default Contact
