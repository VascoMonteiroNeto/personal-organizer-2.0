import { Card, CardHeader, IconButton, Typography, CardContent, CardActions, Collapse } from "@mui/material"
// import { ExpandMore } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import { useState } from 'react'
import { styled } from '@mui/system';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})
    (({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginRight: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

const taskColor = {
    Reminder: {
        backgroundColor: '#d65cad'
    },
    Todo:{
        backgroundColor: '#a6ff4d'
        },
    Urgent:{
        backgroundColor: '#ff4d4d'
    },
  }
  


const CardComponent = ({ cardNote }) => {

    const [expanded, setExpanded] = useState(false)

    const handleExpand = () => {
        if (expanded) {
            setExpanded(false)
        } else { setExpanded(true) }
    }

    return (
        <div>
            <Card sx={
                taskColor[cardNote.category]
                }>
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
                    <Typography variant="subtitle1">
                        {cardNote.category}
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
                        <Typography paragraph variant="h6" color='text.secondary'>Created {cardNote.timestp}</Typography>
                        <Typography variant="h6" paragraph color='text.secondary'>
                            {cardNote.detail}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
    )
}

export default CardComponent
