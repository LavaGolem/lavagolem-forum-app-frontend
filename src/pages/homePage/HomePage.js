import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect} from "react";
import {Box, Grid} from "@material-ui/core";
import Questions from "../../components/questions/Questions";
import LeaderBoard from "../../components/leaderboard/Leaderboard";
import ToggleContent from "../../components/toggleContent/ToggleContent";
import {useDispatch, useSelector} from "react-redux";
import {getQuestions, selectQuestions} from "../../state/questions/questionsSlice";

const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#e8e7e7',
        paddingLeft: theme.spacing(25),
        paddingRight: theme.spacing(25),
    },
}));

const HomePage = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuestions());
    }, []);

    const {questions} = useSelector(selectQuestions());
    return <>
        <Box className={classes.background}>
            <Grid container>
                <Grid item xs={8}>
                    <ToggleContent/>
                    <Questions questions={questions}/>
                </Grid>
                <Grid item xs={4}>
                    <LeaderBoard/>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default HomePage;