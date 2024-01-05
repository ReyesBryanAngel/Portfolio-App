import { useState, useEffect } from 'react';
import { 
    Typography, 
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Breadcrumbs,
    Box,
    Button
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MyLogo from "../assets/my-logo.png"

const Header = ({ aboutRef, skillsRef, projects, footer, home }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const scrolltoAbout = () => {
        if (aboutRef.current) {
            setDrawerOpen(false)
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } 
    };

    const scrollToSkils = () => {
        if (skillsRef.current) {
            setDrawerOpen(false)
            skillsRef.current.scrollIntoView({ behavior: 'smooth' });                               
        }
    }

    const scrollToProjects = () => {
        if (projects.current) {
            setDrawerOpen(false)
            projects.current.scrollIntoView({ behavior: 'smooth' });                               
        }
    }

    const scrollToHome = () => {
        if (home.current) {
            home.current.scrollIntoView({ behavior: 'smooth' });
        }
    }
    const scrollToFooter = () => {
        if (footer.current) {
            setDrawerOpen(false)
            footer.current.scrollIntoView({ behavior: 'smooth' });                               
        }
    }
    const toggleDrawer = (open) => () => {
      setDrawerOpen(open);
    };

    useEffect(() => {
        const handleScroll = () => {
          const isScrolled = window.scrollY > 0;
          setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showBreadCrumb = 'hidden lg:block hover:cursor-pointer';
    const showMenu = 'lg:hidden';

    return (
        <div className={`fixed w-full top-0 ${scrolled ? 'bg-blue-100' : ''} transition-all duration-300 left-1/2 transform -translate-x-1/2 z-10 pr-5`}>
            <Toolbar className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <Box
                        component="img"
                        className='h-24 hover:cursor-pointer'
                        alt="my logo."
                        src={MyLogo}
                        onClick={scrollToHome}
                    />
                    <Typography>CoderBryan</Typography>
                </div>
                <div  className={showMenu}>
                    <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <Breadcrumbs className={showBreadCrumb} aria-label="breadcrumb">
                    <Button variant="h6" onClick={scrolltoAbout}>
                        About
                    </Button>
                    <Button variant="h6" onClick={scrollToSkils}>
                        Skills
                    </Button>
                    <Button variant="h6" onClick={scrollToProjects}>
                        Projects
                    </Button>
                    <Button variant="h6" onClick={scrollToFooter}>
                        Contact
                    </Button>
                </Breadcrumbs>
            </Toolbar>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button onClick={scrolltoAbout}>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={scrollToSkils}>
                        <ListItemText primary="Skills" />
                    </ListItem>
                    <ListItem button onClick={scrollToProjects}>
                        <ListItemText primary="Projects" />
                    </ListItem>
                    <ListItem button onClick={scrollToFooter}>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default Header;