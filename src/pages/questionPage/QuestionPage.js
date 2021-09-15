import {Box, Typography} from "@material-ui/core";
import {useParams} from "react-router";
import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import {ThumbDown, ThumbUp} from "@material-ui/icons";

const QUESTION = {
    userName: 'Lava Golem',
    title: "This is question title",
    description: "This is extended question description. I can write lot of text here.",
    likes: 20.540,
    dislikes: 345,
    answers: [
        {
            text: "This is a good point. Happy to help in this project",
            userName: "Lava Golem"
        },
        {
            text: "This is a good point. Happy to help in this project",
            userName: "Lava Golem"
        },
        {
            text: "This is a good point. Happy to help in this project",
            userName: "Lava Golem"
        },
        {
            text: "This is a good point. Happy to help in this project",
            userName: "Lava Golem"
        },
    ]
}

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#e8e7e7',
        paddingLeft: theme.spacing(25),
        paddingRight: theme.spacing(25),
        height: '100%'
    },
}));

const QuestionPage = () => {
    let {id} = useParams();
    const classes = useStyles();

    return <Box className={classes.background} paddingTop={4}>
        <Box display="flex" flexDirection="column" padding={2} marginBottom={2}
             style={{backgroundColor: 'white', borderRadius: 15}}>
            <Box display="flex" flexDirection="row">
                <ListItemAvatar>
                    <Avatar alt={QUESTION.userName} src="/static/images/avatar/1.jpg"/>
                </ListItemAvatar>
                <ListItemText
                    primary={<><Typography variant="h5"
                                           style={{fontWeight: 600}}>{QUESTION.title}</Typography>
                        <Typography variant="body1">{QUESTION.description}</Typography></>}
                    secondary={
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                        >
                            {QUESTION.name}
                        </Typography>
                    }
                />
            </Box>
            <Box display="flex">
                <Box display="flex" marginRight={2} alignItems="center">
                    <ThumbUp color="disabled" style={{marginRight: 5}}/> {QUESTION.likes}
                </Box>
                <Box alignItems="center" display="flex">
                    <ThumbDown color="disabled" style={{marginRight: 5}}/> {QUESTION.dislikes}
                </Box>
            </Box>
        </Box>
        <Typography variant="h4" style={{fontWeight: 600}}>Answers</Typography>
        {QUESTION.answers.map(answer => {
            return <Box style={{backgroundColor: 'white', borderRadius: 15}} padding={2} marginBottom={2}>
                <Typography variant={"body1"}> {answer.text} </Typography>
            </Box>
        })}
    </Box>
}

export default QuestionPage