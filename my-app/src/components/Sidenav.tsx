// import { FC } from 'react';
// import { Drawer, Box, Typography, IconButton } from '@mui/material';
// import {Link} from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from 'react';
// import classes from './Sidenav.module.css';

// interface SidenavProps {}

// const Sidenav: FC<SidenavProps> = ({}) => {
//     const [drawerOpen, setDrawerOpen] = useState(false);

//     return (
//         <>
//             <IconButton
//                 size="large"
//                 edge="start"
//                 color="inherit"
//                 aria-label="logo"
//                 onClick={() => {
//                     setDrawerOpen(true);
//                 }}
//             >
//                 <MenuIcon />
//                 <p style={{ fontSize: 20 }}>Menu</p>
//             </IconButton>
//             <Drawer
//                 anchor="left"
//                 open={drawerOpen}
//                 onClose={() => {
//                     setDrawerOpen(false);
//                 }}
//             >
//                 <Box p={2} width="250px" textAlign="center" role="presentation">
//                     <Typography variant="h6" component="div">
//                         <div className={classes.links}>
//                             <Link to="/contacts/list" style={{ textDecoration: 'none', color: 'black' }}>
//                                 Home
//                             </Link>
//                             <br />
//                             <Link to="/contacts/new" style={{ textDecoration: 'none', color: 'black' }}>
//                                 Add Contact
//                             </Link>
//                             <br />
//                             <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
//                                 therila
//                             </Link>
//                         </div>
//                     </Typography>
//                 </Box>
//             </Drawer>
//         </>
//     );
// };

// export default Sidenav;


import { FC, useState } from 'react';
import { Drawer, Box, Typography, IconButton, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import classes from './Sidenav.module.css';

interface SidenavProps {}

const Sidenav: FC<SidenavProps> = ({}) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <div className="d-flex align-items-center">
                <IconButton
                    className="mr-2"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                    onClick={() => {
                        setDrawerOpen(true);
                    }}
                >
                    <MenuIcon />
                    <p className="m-2" style={{ fontSize: '20px' }}>
                        Menu
                    </p>
                </IconButton>
            </div>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => {
                    setDrawerOpen(false);
                }}
            >
                <Box p={2} marginTop="40px" width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">
                        <div className={classes.links}>
                            <ListItem button component={Link} to="/contacts/list" style={{ textDecoration: 'none', color: 'black' }}>
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <br />
                            <ListItem button component={Link} to="/contacts/new" style={{ textDecoration: 'none', color: 'black' }}>
                                <ListItemIcon>
                                    <PersonAddIcon />
                                </ListItemIcon>
                                <ListItemText primary="Add Contact" />
                            </ListItem>
                            <br />
                            <ListItem button component={Link} to="/" style={{ textDecoration: 'none', color: 'black' }}>
                                <ListItemIcon>
                                    <CloseIcon />
                                </ListItemIcon>
                                <ListItemText primary="therila" />
                            </ListItem>
                        </div>
                    </Typography>
                </Box>
            </Drawer>
        </>
    );
};

export default Sidenav;

