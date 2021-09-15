import Section from "../section/Section";
import {Box, Divider, Grid, Typography} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from '@material-ui/icons/Favorite';
import React from "react";

const LEADERS = [
    {
        id: 1,
        name: "Max Verstappen",
        likes: 150230,
        likesToday: 245,
    },
    {
        id: 2,
        name: "Lewis Hamilton",
        likes: 150230,
        likesToday: 245,
    },
    {
        id: 3,
        likes: 150230,
        name: "George Russel",
        likesToday: 245,
    },
    {
        id: "Esteban Occon",
        name: "Max Verstappen",
        likes: 150230,
        likesToday: 245,
    },
    {
        name: "Carlos Sainz",
        likes: 150230,
        likesToday: 245,
    },
]

const LeaderBoard = () => {
    return <Grid direction={"column"} container>
        <Grid item><Section>
            <Typography variant="h6" style={{fontWeight: 600}}>Leaderboard</Typography>
            <Divider/>
            <Box marginTop={2}>
                {LEADERS.map((leader, index) =>
                    <Box display="flex" marginTop={1} alignItems="center">
                        <Typography style={{marginRight: 10}} variant="caption">{index + 1}</Typography>
                        <Avatar alt={leader.name} src="/static/images/avatar/1.jpg" style={{marginRight: 10}}/>
                        <Box display="flex" flexDirection="column">
                            <Typography variant={"body1"} style={{fontWeight: 600}}> {leader.name}</Typography>
                            <Typography variant={"caption"} style={{color: 'gray'}}>
                                <Box display="flex">
                                    <FavoriteIcon style={{fontSize: 15}}/>{leader.likes}
                                </Box>
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Box>
        </Section>
        </Grid>
    </Grid>
}

export default LeaderBoard;