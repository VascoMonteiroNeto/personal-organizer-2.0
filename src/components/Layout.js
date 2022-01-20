import { makeStyles } from '@material-ui/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';

const drawerWidth = 250

const menuItens = [
    {
        text: 'My notes',
        icon: <FormatListBulletedRoundedIcon/>,
        path: '/'
    },
    {
        text: 'Create',
        icon: <NoteAddRoundedIcon/>,
        path: '/create'
    }
]

const useStyles = makeStyles({
    page: {
        width: "100%",
        margin: '0px',
        paddingTop: "3vh",
    },
    myDrawer: {
        width: drawerWidth,
    },
    myDrawerPaper:{
        width: drawerWidth,
        paddingTop: "3vh",
    },
    root: {
        display: 'flex'
    }
})

const Layout = ({ children }) => {

    const classes = useStyles()

    return (
        <div className={classes.root}>

            <Drawer className={classes.myDrawer}
                variant='permanent'
                anchor='left'
                classes={{paper: classes.myDrawerPaper}}
            >
                <div>
                    <Typography variant='h5'>
                        Personal Organizer
                    </Typography>
                </div>

                
                <List>
                    {menuItens.map(item => (
                        <ListItem key={item.text}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>
                        </ListItem>
                    ))}
                </List>

            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout
