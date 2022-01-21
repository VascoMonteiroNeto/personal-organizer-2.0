import Typography from '@mui/material/Typography'
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';
import { Button, Container, RadioGroup, Radio, TextField, FormControlLabel, FormLabel, FormControl } from '@mui/material';
import { Dialog, DialogActions, DialogTitle } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import { useState } from 'react';


const useStyles = makeStyles({
    btn: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #a33a7e 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    fields: {
        margin: 1,
        display: 'Block',
    },
    myForm: {
        display: 'Flex',
        flexDirection: 'Column',
        alignItems: 'center'
    },
});

const Notes = () => {

    const classes = useStyles();
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [category, setCategory] = useState('Reminder')
    const [open, setOpen] = useState(false)

    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)


    const handleClose = () =>{
        window.location.reload(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title === '') {
            setTitleError(true)
        }
        if (details === '') {
            setDetailsError(true)
        }

        if (title && details) {

            var timeStamp = new Date()

            var newNote = {
                timestp: timeStamp.toLocaleDateString() + '-' + timeStamp.toLocaleTimeString(),
                title: title,
                detail: details,
                category: category
            }

            fetch('http://localhost:8888/notes',
                {
                    method: 'POST',
                    body: JSON.stringify(newNote),
                    headers: { "Content-Type": "application/json" }
                })
                .then(res => {
                    if (res.ok) {
                        console.log('Sucesso')
                        setOpen(true);
                    }
                })
        }
    }

    return (
        <Container>
            <Typography
                variant="h6"
                component="h2"
                gutterBottom
            >
                New Note
            </Typography>

            <form className={classes.myForm} noValidate autoComplete='off' onSubmit={handleSubmit}>

                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    className={classes.fields}
                    label="Note Title"
                    variant="outlined"
                    fullWidth
                    required
                    margin='normal'
                    error={titleError}
                />
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    className={classes.fields}
                    label="Details"
                    variant="outlined"
                    fullWidth
                    required
                    margin='normal'
                    multiline
                    rows={4}
                    error={detailsError}
                />
                <FormControl margin='normal'>
                    <RadioGroup row value={category} onChange={(e) => setCategory(e.target.value)}>
                        <FormControlLabel labelPlacement="bottom" value="Reminder" control={<Radio />} label="Reminder" />
                        <FormControlLabel labelPlacement="bottom" value="Todo" control={<Radio color="success" />} label="To do" />
                        <FormControlLabel labelPlacement="bottom" value="Urgent" control={<Radio color="error" />} label="Urgent" />
                    </RadioGroup>
                </FormControl>
                <Button
                    className={classes.btn}
                    variant="contained"
                    type='submit'
                    color='primary'
                    endIcon={<DoubleArrowRoundedIcon />}
                >
                    Submit
                </Button>
            </form>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    Note successfully added!
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} variant="contained">Ok</Button>
                </DialogActions>
            </Dialog>
        </Container>
    )
}

export default Notes
