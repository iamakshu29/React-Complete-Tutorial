import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
      });
    
      const InputEvent = (event) => {
        const { name, value } = event.target;
    
        setData((preVal) => {
          return {
            ...preVal,
            [name]: value,
          };
        });
      };
    
      const formSubmit = (e) => {
        e.preventDefault();
        alert(
          `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I watn to say ${data.msg}`
        );
      };
    
    return (
        <React.Fragment>
            <form onSubmit={formSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" name="fullname" aria-describedby="emailHelp" onChange={InputEvent} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" name="phone" aria-describedby="emailHelp" onChange={InputEvent} />
                    <div id="emailHelp" class="form-text">We'll never share your phone number with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" onChange={InputEvent} />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" name="msg" style={{ height: "100px" }} onChange={InputEvent}></textarea>
                    <label for="floatingTextarea2">Comments</label>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
        </React.Fragment>
    )
}

export default Contact;