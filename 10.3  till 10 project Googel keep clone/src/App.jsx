import React, { useState } from 'react';
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Note';
import Footer from './Footer';

const App = () => {
    const [keepValue, setValue] = useState({
        title: " ",
        content: " "
    });

    const [showValue, setShowValue] = useState([]);

    const Prevent = (event) => {
        event.preventDefault();
    }

    const Value = (event) => {
        const { value, name } = event.target;

        setValue((prevValue) => {
            return ({
                ...prevValue,
                [name]: value
            });
        })

//* OR

        // setKeepValue({ ...keepValue, [name]: value });

    };

    const AddNote = () => {
        setShowValue((prevValue) => {
            return [...prevValue, keepValue]
        });

//* OR

        // setShowValue([...showValue, keepValue]);


        setValue({
            title: " ",
            content: " "
        });
    }

    const DeleteNote =  (id) => {
        setShowValue((prevValue) => {
            return prevValue.filter((currdata,index)=>{
                return index !== id;
            })
        });

//* OR
        
        // setShowValue(()=>{
        //     return showValue.filter((ele,index)=>{
        //         return id!==index;
        //     })
        // })

    };
    return (

        <>
            <Header />
            <CreateNote prevfunc={Prevent} addfunc={AddNote} inputfunc={Value} titleval={keepValue.title} contentval={keepValue.content} />
            {/* <Note /> */}
            {showValue.map((value, index) => {
                return (
                    <Note delFunc={DeleteNote} key={index} id={index} title={value.title} content={value.content} />
                )
            })}
            <Footer />
        </>
    )
};

export default App;
