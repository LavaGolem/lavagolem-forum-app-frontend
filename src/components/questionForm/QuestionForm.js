import {Box, Button, TextField, Typography} from "@material-ui/core";
import React, {useState} from "react";
import {addQuestionAction} from "../../state/userData/userDataSlice";
import {useDispatch} from "react-redux";

const QuestionForm = ({addNewQuestion, userData}) => {
    const [questionTitle, setQuestionTitle] = useState('')
    const [questionDescription, setQuestionDescription] = useState('')
    const dispatch = useDispatch();

    const saveQuestion = () => {
        const question = {
            title: questionTitle,
            description: questionDescription,
        }
        dispatch(addQuestionAction(question));
        addNewQuestion();
        discardQuestion()
    }
    const discardQuestion = () => {
        setQuestionTitle('')
        setQuestionDescription('')
    }

    return <Box style={{backgroundColor: 'black'}} padding={2} borderRadius={15}>
        <Typography variant="h5" style={{color: 'white', fontWeight: 600, marginBottom: 10}}>
            Ask question
        </Typography>
        <TextField
            InputProps={{disableUnderline: true, style: {margin: 10}}}
            placeholder="Start typing question..."
            style={{backgroundColor: 'white', width: '100%', borderRadius: 15}}
            onChange={e => setQuestionTitle(e.target.value)}
            value={questionTitle}
        />
        {questionTitle !== '' && (
            <Box marginTop={2}>
                <TextField multiline
                           InputProps={{disableUnderline: true, style: {margin: 10, marginTop: 10}}}
                           rows={4}
                           placeholder="Write description"
                           value={questionDescription}
                           style={{backgroundColor: 'white', width: '100%', borderRadius: 15}}
                           onChange={e => setQuestionDescription(e.target.value)}
                />
                <Box display={'flex'} justifyContent={'flex-end'} marginTop={2}>
                    <Button variant="contained" color="primary" style={{marginRight: 10}} onClick={saveQuestion}>
                        Ask Question
                    </Button>
                    <Button variant="contained" onClick={discardQuestion}>Discard</Button>
                </Box>
            </Box>
        )}
    </Box>
}

export default QuestionForm