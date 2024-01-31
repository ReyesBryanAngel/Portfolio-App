import Header from './Header';
import AboutMe from './AboutMe';
import { Box, Typography, Button} from "@mui/material";
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
import { newBornDescription, companyProjectDescription, creditorIdentifier, BOAPI } from './ContributionLists';
import { 
    ReactLogo, 
    AngularLogo, 
    LaravelLogo, 
    TailwindLogo, 
    WebLogo, 
    GithubLogo, 
    MyPicture,
    BoAPI,
    PostmanLogo,
    DockerLogo,
    LinuxLogo
} from "../assets";
import { ApplyCorporate, PortalAdmin, NewBorn } from '../assets';

const MainPage = () => {
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const home = useRef(null);
    const footer = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState(false); 
    const githubLink = "https://github.com/ReyesBryanAngel";
    const { formSubmit, setFormSubmit } =  useData();
    const skillsData = [
        { logo: ReactLogo, title: "React", progressValue: 85 },
        { logo: AngularLogo, title: "Angular", progressValue: 60 },
        { logo: LaravelLogo, title: "Laravel", progressValue: 75 },
        { logo: TailwindLogo, title: "Tailwind CSS", progressValue: 80 },
        { logo: WebLogo, title: "Html CSS JS", progressValue: 85 },
        { logo: PostmanLogo, title: "Postman", progressValue: 85 },
        { logo: DockerLogo, title: "Docker", progressValue: 70 },
        { logo: LinuxLogo, title: "Linux", progressValue: 60 },
      ];

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
            <div ref={home} className='flex flex-col justify-center items-center m-10 lg:flex-row mt-28 justify-evenly'>
                <div>
                    <Box
                        component="img"
                        className='h-56 lg:h-96'
                        alt="my image"
                        src={MyPicture}
                    />
                </div>
                <div className='flex flex-col items-center'>
                    <div className='whitespace-nowrap mt-10'>
                        <Typography variant="h4" style={{ lineHeight:"3.5rem" }}>Hi, I&apos;m <strong>Bryan</strong><br/>
                        <strong>Full Stack Developer</strong><br/></Typography>
                    </div>
                    <div className='flex flex-row gap-6 mt-10 whitespace-nowrap'>
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
                    <div className='mt-3 ml-1'>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">
                            <Box 
                                component="img"
                                src={GithubLogo}
                                className='h-8'
                            />
                        </a>
                    </div>
                </div>
            </div>
            {modalOpen && formSubmit === null && (
                <ContactModal
                    closeModal={closeModal}
                 />
            )}
            <AboutMe aboutRef={aboutRef}/>
            <Typography variant="h4" className='pt-20 text-left'>Skills</Typography>
            <div ref={skillsRef} className="lg:grid grid-cols-4 gap-10">
            {skillsData.map((skill, index) => (
                <Skills key={index} logo={skill.logo} title={skill.title} progressValue={skill.progressValue} />
            ))}
            </div>
            <Typography variant="h4" className='pt-20 text-left'>Recent Projects</Typography>
                <div className='grid lg:grid-cols-2 gap-20 mt-10'>
                    <Projects
                        banner={NewBorn}
                        title={"New Born Application"}
                        description={newBornDescription}
                        language="React/Laravel"
                        link={
                            <a 
                                href='https://sample-project-app.com/'  
                                style={{ 
                                    color: 'blue', 
                                    textDecoration: 'underline', 
                                    alignSelf: "end" 
                                }}
                            >
                                https://sample-project-app.com/
                            </a>
                        }
                    />
                    <div ref={projectsRef}>
                        <Projects
                            banner={ApplyCorporate}
                            title={"Apply Corporate"}
                            description={companyProjectDescription}
                            language="React and Laravel"
                            link={
                                <a 
                                    href='https://apply.finxp.com/'  
                                    style={{ 
                                        color: 'blue', 
                                        textDecoration: 'underline', 
                                        alignSelf: "end" 
                                    }}
                                >
                                    https://apply.finxp.com/
                                </a>
                            }
                        />
                    </div>
                    <div>
                        <Projects
                            banner={PortalAdmin}
                            title={"Maltese Creditor Identfier"}
                            description={creditorIdentifier}
                            language="Angular and Laravel"
                            link={
                                <a 
                                    href='https://portal-admin.finxp.com/'  
                                    style={{ 
                                        color: 'blue', 
                                        textDecoration: 'underline', 
                                        alignSelf: "end" 
                                    }}
                                >
                                    https://portal-admin.finxp.com/
                                </a>
                            }
                        />
                    </div>
                    <div>
                        <Projects
                            banner={BoAPI}
                            title={"Business Onboarding API"}
                            description={BOAPI}
                            language="Laravel"
                        />
                    </div>  
                </div>

            <Award/>
            <Footer footer={footer} />
        </div>
    );
    
}

export default MainPage;