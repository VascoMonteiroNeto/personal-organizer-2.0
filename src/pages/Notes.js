import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material'
import CardComponent from '../components/CardComponent'


const Notes = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8888/notes')
            .then(res => {
                if (!res.ok) {
                    throw Error("Error! Not loading!")
                }
                return res.json()
            })
            .then(data => {
                setNotes(data)
            })
    }, [])

    return (
        <Container maxWidth="false">
            <Grid container spacing={3} >

                {
                    notes.map(note => (
                        <Grid alignItems="flex-start" item xs={12} md={6} lg={4} key={note.id}>
                            <CardComponent cardNote={note} />
                        </Grid>

                    ))
                }

            </Grid>
        </Container>
    )
}

export default Notes
