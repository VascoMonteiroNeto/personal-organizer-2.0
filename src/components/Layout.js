import { makeStyles } from '@material-ui/styles';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import { useNavigate, useLocation } from 'react-router-dom';


const drawerWidth = 250

const menuItens = [
    {
        text: 'My notes',
        icon: <FormatListBulletedRoundedIcon />,
        path: '/'
    },
    {
        text: 'Create',
        icon: <NoteAddRoundedIcon />,
        path: '/create'
    }
]

const useStyles = makeStyles({
    page: {
        width: "100%",
        margin: '0px',
        paddingTop: "3vh",
        paddingBottom: "3vh",
    },
    myDrawer: {
        width: drawerWidth,
    },
    myDrawerPaper: {
        width: drawerWidth,
        paddingTop: "3vh",
    },
    root: {
        display: 'flex'
    },
    title: {
        textAlign: 'center'
    }
})

const Layout = ({ children }) => {

    const classes = useStyles()
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className={classes.root}>

            <Drawer className={classes.myDrawer}
                variant='permanent'
                anchor='left'
                classes={{ paper: classes.myDrawerPaper }}
            >
                <div>
                    <Typography variant='h5' className={classes.title}>
                        Personal Organizer
                    </Typography>
                </div>


                <List>
                    {menuItens.map(item => (
                        <ListItem button
                            key={item.text}
                            onClick={() => navigate(item.path)}
                            selected={location.pathname === item.path}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}></ListItemText>
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
