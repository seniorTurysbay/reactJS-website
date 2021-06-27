import React, {useState} from "react"
import Button from '@material-ui/core/Button';
import {AppBar, Container, IconButton, Toolbar, Typography, Box,
    Paper, Grid, Card, CardMedia, CardContent,
    CardActions, DialogTitle, DialogContent,
    DialogContentText, TextField, DialogActions, Dialog
} from "@material-ui/core";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FolderIcon from "@material-ui/icons/Folder";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MenuIcon from "@material-ui/icons/Menu"
import LayersIcon from "@material-ui/icons/Layers"
import {makeStyles} from "@material-ui/core/styles";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        background: "rgba(0,0,0,0.3)"
    },
    cardMedia:{
        paddingTop: "56.25%"
    },
    cardContent:{
        flexGrow:1
    },
    cardGrid:{
        marginTop:theme.spacing(4)
    },
}))

const cards = [1, 2, 3, 4, 5, 6, 8, 9, 10]

function App() {
    const classes = useStyles();
    const [value,setValue] = useState("recents");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const [open,setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }


    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Web dev</Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant={"outlined"} onClick={handleClickOpen}>Login</Button>
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>Log in to see videos</DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin={"dense"}
                                        id={"name"}
                                        label={"Email Adress"}
                                        type={"email"}
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin={"dense"}
                                        id={"pass"}
                                        label={"Pasword"}
                                        type={"password"}
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color={"primary"}>Cancel</Button>
                                    <Button onClick={handleClose} color={"primary"}>Log in</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                        <Button color={"secondary"} variant={"contained"}>Sign up</Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Web
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="inherit"
                                        paragraph
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam
                                        asperiores, beatae culpa dignissimos excepturi expedita in inventore labore
                                        laudantium maxime nobis quasi, qui reiciendis sequi sunt velit, veniam
                                        voluptatem.
                                    </Typography>
                                    <Button variant={"contained"} color={"secondary"}>
                                        Learn more
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainContent}>
                    <Container maxWidth={"md"}>
                        <Typography variant={"h2"} align={"center"} color={"TextPrimary"} gutterBottom>Web</Typography>
                        <Typography variant={"h5"} align={"center"} color={"TextSecondary"} paragraph>Lorem ipsum dolor
                            sit amet, consectetur adipisicing elit. Assumenda at atque, consequatur cumque distinctio
                            doloribus eos esse eum hic in iure maiores perspiciatis quas quasi sequi, similique unde
                            voluptas voluptate.</Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={5} justify={"center"}>
                                <Grid item>
                                    <Button variant={"contained"} color={"Primary"}>Start now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant={"outlined"} color={"Primary"}>Learn more</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth={"md"}>
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia}
                                               image="https://source.unsplash.com/random"
                                               title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Blog Post
                                        </Typography>
                                        <Typography>
                                            Smth smth smth
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="Secondary" variant={"contained"}>
                                            View
                                        </Button>
                                        <Button size="small" color="Primary">
                                            Edit
                                        </Button>
                                        <LayersIcon/>
                                        <PlayCircleFilledIcon/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography variant={"h6"} align={"center"} gutterBottom>
                    Footer
                </Typography>
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.root}
                >
                    <BottomNavigationAction
                        label={"Recents"}
                        value="recents"
                        icon={<RestoreIcon/>}
                    />
                    <BottomNavigationAction
                        label={"Favorites"}
                        value="favorites"
                        icon={<FavoriteIcon/>}
                    />
                    <BottomNavigationAction
                        label={"Nearby"}
                        value="Nearby"
                        icon={<LocationOnIcon/>}
                    />
                    <BottomNavigationAction
                        label={"Folder"}
                        value="folder"
                        icon={<FolderIcon/>}
                    />
                </BottomNavigation>
                <Typography align={"center"} color={"textSecondary"} component={"p"} variant={"subtitle1"}>
                    Simple site on ReactJS and Material UI
                </Typography>
            </footer>
        </>
    );
}

export default App;