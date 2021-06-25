
import React from 'react'

function App() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form name="contact v1"
       method="post"
       data-netlify="true" 
       onSubmit="submit">
         <input type="hidden" name="form-name" value="contact v1"/>
         <div>
           <label>
             First Name:<br></br>
             <input type="text" name="first-name"/>
           </label>
         </div>
         <div>
           <label htmlFor="email">Email</label><br/>
           <input type="email" name="email"/>
         </div>
         <div>
           <label htmlFor="comment">Comment</label><br/>
           <textarea name="comment"></textarea>
         </div>
         <button type="submit">Submit</button>
       </form>
 
    </div>
  );
}

export default App;
