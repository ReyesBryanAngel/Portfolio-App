import Header from './Header';
import AboutMe from './AboutMe';
import { Box, Typography, Button } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Skills from './Skills';
import Projects from './Projects';
import Award from './Award';
import Footer from './Footer';
import ContactModal from './ContactModal';
import myResume from "../assets/files/my_resume.pdf"
import { useData } from '../context/globalDataProvider';
import { useState, useRef, useEffect } from 'react';
import { newBornDescription, companyProjectDescription, creditorIdentifier, skillsData } from './ContributionLists';
import LinkIcon from '@mui/icons-material/Link';

import LaunchIcon from '@mui/icons-material/Launch';
import { 
    GithubLogo, 
    MyPicture,
    Mtci
} from "../assets";
import { ApplyCorporate, NewBorn } from '../assets';

const MainPage = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const home = useRef(null);
    const footer = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false); 
    const { formSubmit, setFormSubmit } =  useData();
    const githubLink = "https://github.com/ReyesBryanAngel/Sample-Project-App";
    const newbornDemoLink = "https://sample-project-app.com/login";
    const acLink = "https://apply.finxp.com/";
    const portalLink = "https://portal-admin.finxp.com/";

    const contactModal = () => {
        setModalOpen(true);
        setFormSubmit(null);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    const closeSnackBar = () => {
        setOpenSnackBar(false);
    }

    useEffect(() => {
        if (formSubmit !== null) {
            setOpenSnackBar(true);
        }
    }, [formSubmit])

    return (
        <div>
            <Header 
                aboutRef={aboutRef}
                skillsRef={skillsRef}
                projects={projectsRef}
                footer={footer}
                home={home}
            />
            {openSnackBar && (
                <Snackbar 
                    open={open} 
                    autoHideDuration={5000} 
                    onClose={closeSnackBar} 
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MuiAlert
                        elevation={6}
                        variant="filled"
                        onClose={closeSnackBar}
                        severity="success"
                    >
                        Message has been sent succesfully!
                    </MuiAlert>
                </Snackbar>
             )}
            <div ref={home} className='flex flex-col justify-center items-center m-10 lg:flex-row mt-12 lg:mt-36 justify-evenly'>
                <div>
                    <Box
                        component="img"
                        className='h-56 lg:h-80'
                        alt="my image"
                        src={MyPicture}
                    />
                </div>
                <div className='flex flex-col items-center lg:items-left'>
                    <div className='lg:items-start lg:text-left space-y-2 mt-5'>
                        <Typography variant='h3' fontWeight="bold">Fullstack Developer</Typography>
                        <Typography>Hi, I&apos;m Angel Bryan Reyes, a passionate Fullstack Developer <br/> based in the Philippines.</Typography>
                    </div>
                    <div className='flex lg:flex-col gap-3 mt-5 lg:self-start'>
                        <Button
                            style={{ borderRadius: '20px' }}
                            variant='contained'
                        >
                            <a
                                href={myResume}
                                download='my_resume.pdf'
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                Download CV
                            </a>
                        </Button>
                        <Button onClick={contactModal} sx={{ borderRadius: "20px", width:"140px" }} variant='outlined'>Reach Out</Button>
                    </div>
                    
                </div>
            </div>
            {modalOpen && formSubmit === null && (
                <ContactModal
                    closeModal={closeModal}
                 />
            )}
            <AboutMe aboutRef={aboutRef}/>
            <Typography variant="h5" fontWeight="bold" className='pt-20 text-left pb-5'>TECH STACKS</Typography>
            <div ref={skillsRef} className="lg:grid grid-cols-4 gap-10">
            {skillsData.map((skill, index) => (
                <Skills key={index} logo={skill.logo} title={skill.title} progressValue={skill.progressValue} />
            ))}
            </div>
            <Typography variant="h5" fontWeight="bold" className='pt-20 text-left'>PORTFOLIO</Typography>
                <div ref={projectsRef}>
                    <Projects
                        banner={NewBorn}
                        title={"Newborn Screening Application"}
                        description={newBornDescription}
                        code={
                            <div className='flex flex-col'>
                                <div className='flex gap-5'>
                                    <div className='flex gap-2'>
                                        <Typography>Code</Typography>
                                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                            <Box
                                                component="img"
                                                src={GithubLogo}
                                                className='h-6' />
                                        </a>
                                    </div>

                                    <div className='flex gap-2'>
                                        <Typography>Live Demo</Typography>
                                        <a href={newbornDemoLink} target="_blank" rel="noopener noreferrer">
                                            <LaunchIcon className="hover:cursor-pointer" />
                                        </a>
                                    </div>
                                </div>
                                    <div className='self-center mt-5'>
                                        <Typography fontWeight="bold">React&nbsp; &nbsp;Laravel</Typography>
                                    </div>
                                </div>
                        }
                        
                    />
                     <Projects
                        banner={ApplyCorporate}
                        title={"Apply Corporate Application"}
                        description={companyProjectDescription}
                        code={
                            <div className='flex flex-col'>
                                 <div className='self-center'>
                                    <Typography fontWeight="bold">React&nbsp; &nbsp;Laravel</Typography>
                                 </div>
                                 <div className='mr-3'>
                                    <a href={acLink} target="_blank" rel="noopener noreferrer">
                                        <LinkIcon color='primary' />
                                    </a>
                                 </div>
                            </div>
                        }
                    />
                    <Projects
                        banner={Mtci}
                        title={"Maltese Creditor Identifier"}
                        description={creditorIdentifier}
                        code={
                            <div className='flex flex-col'>
                                 <div className='self-center'>
                                    <Typography fontWeight="bold">Angular&nbsp; &nbsp;Laravel</Typography>
                                 </div>
                                 <div>
                                    <a href={portalLink} target="_blank" rel="noopener noreferrer">
                                        <LinkIcon color='primary' />
                                    </a>
                                 </div>
                            </div>
                        }
                    />
                    <div className='mt-10 border-2 mt-20 py-20 bg-zinc-100'>
                        <Typography fontWeight="bold" variant='h5'>Ecommerce Website Project Coming soon...</Typography>
                    </div>
                </div>

            <Award/>
            <Footer footer={footer} />
        </div>
    );
    
}

export default MainPage;