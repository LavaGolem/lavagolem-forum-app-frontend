import React from "react";
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    section: {
        margin: theme.spacing(2),
        borderRadius: 10,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2)
    },
}));

const Section = (props) => {
    const classes = useStyles();
    return <Box className={classes.section}>
        {props.children}
    </Box>
}

export default Section;