import { Card, CardHeader, IconButton, Typography, CardContent, CardActions, Collapse } from "@mui/material"
import {  ExpandMore } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react'
import { styled } from '@mui/material/styles';


const CardComponent = ({ cardNote }) => {

    const [expanded, setExpanded] = useState(false)

    const handleExpand = () => {
        if (expanded){
            setExpanded(false)
        } else {setExpanded(true)}
    }

    console.log(cardNote.title)
    return (
        <div>
            <Card>
                <CardHeader
                    action={
                        <IconButton>
                            <ClearIcon />
                        </IconButton>
                    }
                />
                <CardContent>
                    <Typography variant="h4">
                        {cardNote.title}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpand}
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Method:</Typography>
                        <Typography paragraph>
                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                            aside for 10 minutes.
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default CardComponent
