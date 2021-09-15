import {Box, Typography} from "@material-ui/core";
import {useLocation, useParams} from "react-router";
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect} from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {ThumbDown, ThumbUp} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {getAnswers, selectAnswers} from "../../state/answers/answersSlice";
import AnswersForm from "../../components/answersForm/AnswersForm";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#e8e7e7',
        paddingLeft: theme.spacing(25),
        paddingRight: theme.spacing(25),
        height: '100%'
    },
}));

const QuestionPage = () => {
    const {id} = useParams();
    const {state} = useLocation();
    const {question} = state;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnswers(id));
    }, []);

    const {answers} = useSelector(selectAnswers(id));

    const classes = useStyles();

    return <Box className={classes.background} paddingTop={4}>
        <Box display="flex" flexDirection="column" padding={2} marginBottom={2}
             style={{backgroundColor: 'white', borderRadius: 15}}>
            <Box display="flex" flexDirection="row">
                <ListItemAvatar>
                    <Avatar alt={`${question.firstName} ${question.lastName}`} src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    primary={<><Typography variant="h5"
                                           style={{fontWeight: 600}}>{question.title}</Typography>
                        <Typography variant="body1">{question.description}</Typography></>}
                    secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {question.name}
                        </Typography>
                    }
                />
            </Box>
            <Box display="flex">
                <Box display="flex" marginRight={2} alignItems="center">
                    <ThumbUp color="disabled" style={{marginRight: 5}}/> {question.likes}
                </Box>
                <Box alignItems="center" display="flex">
                    <ThumbDown color="disabled" style={{marginRight: 5}}/> {question.dislikes}
                </Box>
            </Box>
        </Box>
        <AnswersForm questionId={question.id} addNewAnswer={() => {
            dispatch(getAnswers(question.id))
        }}/>
        <Typography variant="h4" style={{fontWeight: 600}}>Answers</Typography>
        {answers && answers.map(answer => {
                return <Box style={{backgroundColor: 'white', borderRadius: 15}} padding={2} marginBottom={2}>
                    <Typography variant={"body1"}> {answer.content} </Typography>
                </Box>
        })}
    </Box>
}

export default QuestionPage