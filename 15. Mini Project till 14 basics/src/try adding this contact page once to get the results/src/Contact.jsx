import React, { useState } from 'react';

const Contact = () => {
    const details = { fname: "", number: "", mail: "" };

    const [inputValue, setInputValue] = useState(details);

    const [saveValue, setSaveValue] = useState([]);

    const inputElement = (event) => {
        const { name, value } = event.target;

        setInputValue({ ...inputValue, [name]: value });
    }

    const formSubmit = (event) => {
        event.preventDefault();

    }

    const addValues = () => {
        alert(`My name is ${inputValue.fname}  My number is ${inputValue.number} My email is ${inputValue.mail} are saved in database `);
        setSaveValue([...saveValue, inputValue]);
        setInputValue(details);
    }

    const delDetails = (id) => {
        setSaveValue(() => {
            return saveValue.filter((ele, index) => {
                return index !== id;
            })
        })
    }

    const allDel = () => {
        setSaveValue([]);
    }


    return (
        <React.Fragment>
            <form onSubmit={formSubmit}>
                <label>Enter Your name</label><br />
                <input type="text" placeholder='Enter your name' name='fname' value={inputValue.fname} onChange={inputElement} /><br /><br />

                <label>Enter Your phone</label><br />
                <input type="number" placeholder='Enter your phone no.' name='number' value={inputValue.number} onChange={inputElement} /><br /><br />

                <label>Enter Your email</label><br />
                <input type="email" placeholder='Enter your mail' name='mail' value={inputValue.mail} onChange={inputElement} /><br /><br />

                <button onClick={addValues}>Submit Form</button>
                <button onClick={allDel}>Clear All</button>
            </form>
            <ol>
                {saveValue.map((ele, index) => {
                    return (
                        <li key={index}> <button onClick={() => delDetails(index)}>Delete</button>
                            {ele.fname}
                            {ele.number}
                            {ele.mail}
                        </li>
                    )
                })}
            </ol>
        </React.Fragment>
    )
}

export default Contact;