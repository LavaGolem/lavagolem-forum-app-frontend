import {Box, TextField, Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import React, {useEffect} from "react";
import * as R from 'ramda';
import FavoriteIcon from "@material-ui/icons/Favorite";
import Questions from "../../components/questions/Questions";
import QuestionForm from "../../components/questionForm/QuestionForm";
import {useDispatch, useSelector} from "react-redux";
import {getUserData, selectUserData} from "../../state/userData/userDataSlice";
import Loader from "../../components/loader/Loader";

const UserPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const user = window.localStorage.getItem('user');
        dispatch(getUserData());
    }, []);

    const {userData, userDataError} = useSelector(selectUserData());

    if (R.isEmpty(userData)) {
        return <Loader/>
    }

    const newQuestionAdded = () => {
        dispatch(getUserData());
    }

    return <Box back
                height={1000}
                width="100%"
                style={{
                    backgroundColor: '#77185e',
                    height: '100%',
                    backgroundRepeat: 'no-repeat',
                    background: '#eb01a5',
                    backgroundImage: 'linear-gradient(to bottom, rgba(245, 246, 252, -0.45), rgba(117, 19, 93, 20.73)), url("https://www.formula1.com/content/fom-website/en/teams/Alpine/_jcr_content/gallery/image2.img.1920.medium..png/1614712013743.png")',
                }}>
        <Box paddingRight={30} paddingLeft={30} paddingTop={10}>
            <Box display="flex" alignItems="center" marginBottom={15}>
                <Avatar alt={"Lava Golem"}
                        src="https://images.hdqwalls.com/wallpapers/the-cyberpunk-girl-cosplay-4k-9f.jpg"
                        style={{height: 200, width: 200, border: '5px solid white', marginRight: 20}}
                />
                <Box display="flex">
                    <Box display="flex" alignItems={"center"}>
                        <FavoriteIcon style={{fontSize: 50, color: 'white', marginRight: 5}}/>
                        <Typography style={{color: 'white'}} variant="h3">
                            {userData.likes}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems={"center"} marginLeft={5}>
                        <QuestionAnswerIcon style={{fontSize: 25, color: 'white', marginRight: 5}}/>
                        <Typography style={{color: 'white', fontSize: 22}}>
                            {userData.questions !== undefined ? userData.questions.length : 0}
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems={"center"} marginLeft={5}>
                        <ThumbDownIcon style={{fontSize: 25, color: 'white', marginRight: 5}}/>
                        <Typography style={{color: 'white', fontSize: 22}}>
                            {userData.dislikes}
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box padding={1} marginBottom={5}>
                <QuestionForm addNewQuestion={newQuestionAdded} userData={userData}/>
            </Box>
            <Typography style={{color: 'white', fontWeight: 600, paddingLeft: 16}} variant="h5">
                YOUR QUESTIONS
            </Typography>
            {userData.questions.length !== 0 && <Box>
                <Questions questions={userData.questions}/>
            </Box>}
        </Box>
        <Box paddingTop={30} paddingRight={30} paddingLeft={30}>
        </Box>
    </Box>
}
export default UserPage