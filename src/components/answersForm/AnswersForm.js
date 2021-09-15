import {Box, Button, TextField, Typography} from "@material-ui/core";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addAnswerAction} from "../../state/answers/answersSlice";
import {getUserData, selectUserData} from "../../state/userData/userDataSlice";

const AnswersForm = ({addNewAnswer, questionId}) => {
    const [answerContent, setAnswerContent] = useState('')
    const dispatch = useDispatch();
    const {userData} = useSelector(selectUserData());

    useEffect(() => {
        dispatch(getUserData());
    }, []);

    const saveAnswer = () => {
        const answer = {
            content: answerContent,
            questionId: questionId,
            userId:userData.id

        }
        const successful = dispatch(addAnswerAction(answer));
        if(successful) {
            discardAnswer()
        }
    }
    const discardAnswer = () => {
        setAnswerContent('')
    }

    return <Box style={{backgroundColor: 'black'}} padding={2} borderRadius={15}>
        <Typography variant="h5" style={{color: 'white', fontWeight: 600, marginBottom: 10}}>
            Answer question
        </Typography>
        <TextField multiline
                   InputProps={{disableUnderline: true, style: {margin: 10, marginTop: 10}}}
                   rows={4}
                   placeholder="Write answer..."
                   value={answerContent}
                   style={{backgroundColor: 'white', width: '100%', borderRadius: 15}}
                   onChange={e => setAnswerContent(e.target.value)}        />
        <Box display={'flex'} justifyContent={'flex-end'} marginTop={2}>
            <Button variant="contained" color="primary" style={{marginRight: 10}} onClick={saveAnswer}>
                Answer Question
            </Button>
            <Button variant="contained" onClick={discardAnswer}>Discard</Button>
        </Box>

    </Box>
}

export default AnswersForm