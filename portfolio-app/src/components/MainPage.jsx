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
import Contribution from './Contribution';
import myResume from "../assets/files/my_resume.pdf"
import { useData } from '../context/globalDataProvider';
import { useState, useRef, useEffect } from 'react';
import { ContributionLists, boAPIDescription, mtciDescription, newBornDescription } from './ContributionLists';
import { 
    ReactLogo, 
    AngularLogo, 
    LaravelLogo, 
    TailwindLogo, 
    WebLogo, 
    GithubLogo, 
    MyPicture,
    BoAPI,
    Mtci,
    Nsrc,
    ApplyCorporate,
    PostmanLogo,
    DockerLogo,
    LinuxLogo,
    // NewBorn
} from "../assets";
import NewBorn from "../assets/new-born.jpg";

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
                            Download Resume
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
            <div ref={projectsRef} className="lg:grid grid-cols-3 gap-10">
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
                <Projects
                    banner={ApplyCorporate}
                    title={"Apply Corporate Application"}
                    description={<>
                        Apply Corporate is an app 
                        made to accumulate all the data of companies who wants to 
                        acquire the products of finXp. It compose of different sections
                        with different fields. Each field ask data such as file uploads, country code,
                        country, products chosen among available products, and so on. This app uses auto saving, so that
                        users won&apos;t have to repeat the fields that they&apos;ve filled out already. <br /><br />
                        <strong>Contribution</strong>
                        {ContributionLists.map((contribution, index) => (
                            <Contribution key={index} contribution={contribution} />
                        ))}
                    </>}
                    language="React/Laravel"
                />
                <Projects
                    banner={BoAPI}
                    title={"Business Onboarding API"}
                    description={boAPIDescription}
                    language="Laravel"
                />
                <Projects
                    banner={Mtci}
                    title={"Maltese Creditor Identifier"}
                    description={mtciDescription}
                    language="Angular/Laravel"
                />
            </div>
            <Award/>
            <Footer footer={footer} />
        </div>
    );
    
}

export default MainPage;