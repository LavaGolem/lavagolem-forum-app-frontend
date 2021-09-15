import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import {Box, Grid} from "@material-ui/core";
import React from "react";

const ToggleContent = () => {
    const [alignment, setAlignment] = React.useState('left');
    const handleAlignment = (event, newAlignment) => {
        if (newAlignment === alignment) {
            return;
        }
        setAlignment(newAlignment);
    };
    return <Box paddingLeft={4} paddingRight={4} paddingTop={3}><ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        style={{backgroundColor: 'white', width: '100%', height: '30px'}}
    >
        <ToggleButton value="left" aria-label="left aligned" style={{width: '100%'}}>
            New
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered" style={{width: '100%'}}>
            Trending
        </ToggleButton>
    </ToggleButtonGroup> </Box>
}

export default ToggleContent