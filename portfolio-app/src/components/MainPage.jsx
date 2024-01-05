import Header from './Header';
import AboutMe from './AboutMe';
import { Box, Typography, Button} from "@mui/material";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MyPicture from "../assets/my-picture.png";
import GithubLogo from "../assets/github.png"
import Skills from './Skills';
import ReactLogo from "../assets/react.png"
import AngularLogo from "../assets/angular.png"
import LaravelLogo from "../assets/laravel.png"
import TailwindLogo from "../assets/tailwind.png"
import Projects from './Projects';
import ApplyCorporate from "../assets/apply-corporate.jpg"
import BoAPI from "../assets/bo-api.jpg"
import Mtci from "../assets/mtci.jpg"
import Nsrc from "../assets/nsrc.png"
import Award from './Award';
import Footer from './Footer';
import ContactModal from './ContactModal';
import myResume from "../assets/files/my_resume.pdf"
import { useData } from '../context/globalDataProvider';
import { useState, useRef, useEffect } from 'react';

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
                    <div className='mt-3 ml-2'>
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
                <Skills
                    logo={ReactLogo} 
                    title="React"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam quisquam doloribus eius recusandae accusantium quis ea, 
                    eum itaque sint perspiciatis dolorum reprehenderit tenetur 
                    ducimus laboriosam eos rem doloremque? 
                    Temporibus, animi!"
                />
                <Skills
                    logo={AngularLogo} 
                    title="Angular"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam quisquam doloribus eius recusandae accusantium quis ea, 
                    eum itaque sint perspiciatis dolorum reprehenderit tenetur 
                    ducimus laboriosam eos rem doloremque? 
                    Temporibus, animi!"
                />
                <Skills
                    logo={LaravelLogo} 
                    title="Laravel"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam quisquam doloribus eius recusandae accusantium quis ea, 
                    eum itaque sint perspiciatis dolorum reprehenderit tenetur 
                    ducimus laboriosam eos rem doloremque? 
                    Temporibus, animi!"
                />
                <Skills
                    header={null}
                    logo={TailwindLogo} 
                    title="Tailwind CSS"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam quisquam doloribus eius recusandae accusantium quis ea, 
                    eum itaque sint perspiciatis dolorum reprehenderit tenetur 
                    ducimus laboriosam eos rem doloremque? 
                    Temporibus, animi!"
                />
            </div>
            <Typography variant="h5" className='pt-20 text-left'>Recent Company Projects</Typography>
            <div ref={projectsRef} className="lg:grid grid-cols-3 gap-10">
                <Projects
                    banner={ApplyCorporate}
                    title={"Apply Corporate Application"}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam quisquam doloribus eius recusandae accusantium quis ea, 
                    eum itaque sint perspiciatis dolorum reprehenderit tenetur 
                    ducimus laboriosam eos rem doloremque? 
                    Temporibus, animi!"
                    language="React/Laravel"
                />
                <Projects
                    banner={BoAPI}
                    title={"Business Onboarding API"}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam quisquam doloribus eius recusandae accusantium quis ea, 
                    eum itaque sint perspiciatis dolorum reprehenderit tenetur 
                    ducimus laboriosam eos rem doloremque? 
                    Temporibus, animvi!"
                    language="Laravel"
                />
                <Projects
                    banner={Mtci}
                    title={"Maltese Creditor Identifier"}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam quisquam doloribus eius recusandae accusantium quis ea, 
                    eum itaque sint perspiciatis dolorum reprehenderit tenetur 
                    ducimus laboriosam eos rem doloremque? 
                    Temporibus, animvi!"
                    language="Angular/Laravel"
                />
                <Projects
                    banner={Nsrc}
                    title={"New Born Screening Application"}
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Totam quisquam doloribus eius recusandae accusantium quis ea, 
                    eum itaque sint perspiciatis dolorum reprehenderit tenetur 
                    ducimus laboriosam eos rem doloremque? 
                    Temporibus, animvi!"
                    language="React/Laravel"
                />
            </div>
            <Award/>
            <Footer footer={footer} />
        </div>
    );
    
}

export default MainPage;