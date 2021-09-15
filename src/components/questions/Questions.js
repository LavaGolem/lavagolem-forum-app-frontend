import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {Box, Grid, Link} from "@material-ui/core";
import Section from "../section/Section";
import {ThumbDown, ThumbUp} from "@material-ui/icons";
import Loader from "../loader/Loader";
import * as R from 'ramda';
import {useHistory} from "react-router";

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
    inline: {
        display: 'inline',
    },
}));

function Questions({questions}) {
    const classes = useStyles();
    const history = useHistory();

    if (R.isEmpty(questions)) {
        return <Loader/>
    }
    return (<List className={classes.root}>
            {questions.map(question => <Section key={question.id}>
                <ListItem alignItems="flex-start" style={{paddingTop: 0, cursor:'pointer'}}
                          onClick={() => history.push(`/question/${question.id}`)}>
                    <Box display="flex" flexDirection="column">
                        <Box display="flex" flexDirection="row">
                            <ListItemAvatar>
                                <Avatar alt={question.name} src="/static/images/avatar/1.jpg"/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography variant="h5"
                                                     style={{fontWeight: 600}}>{question.title}</Typography>}
                                secondary={
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {question.firstName} {question.lastName}
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
                </ListItem>
            </Section>)
            }
        </List>
    );
}

export default Questions;
