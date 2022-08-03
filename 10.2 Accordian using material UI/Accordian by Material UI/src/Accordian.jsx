import React from 'react';
import SetData from './SetData';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordian = () => {
    return (
        <>
            <div>
                {SetData.map((value) => {
                    return (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography>{value.id + " " + value.ques}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {value.ans}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
        </>
    );
}


export default Accordian;

// just we insert the value using map in predefined functionality of Accordian
// no useState() hook is used to change or update values 