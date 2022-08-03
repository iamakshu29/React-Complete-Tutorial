import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {

    return (
        <form onSubmit={props.prevfunc}>
            <br></br>
            <input type='text' name="title" value={props.titleval} placeholder='Title' autoComplete='off' onChange={props.inputfunc} />
            <br></br>
            <input type='text' name="content" value={props.contentval} placeholder='Write a note..' onChange={props.inputfunc} />
            <Button color="secondary" onClick={props.addfunc}><AddIcon /></Button>
        </form>
    );
}

export default CreateNote;