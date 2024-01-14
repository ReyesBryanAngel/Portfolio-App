import { Box, Typography, Paper, Grid } from "@mui/material";
import MyPicture from "../assets/my-picture.png";
import SchoolIcon from '@mui/icons-material/School';
import CodeOffIcon from '@mui/icons-material/CodeOff';

const AboutMe = ({ aboutRef }) => {
    return (
        <>
            <div className='flex flex-col gap-6 mt-56 lg:mt-60' ref={aboutRef}>
                <Typography variant="h4" className="text-center">About</Typography>
                <div className='flex flex-col items-center justify-center lg:flex-row'>
                    <div>
                        <Box
                            component="img"
                            className='h-52 lg:h-72'
                            src={MyPicture}
                        />
                    </div>
                    <div className='lg:ml-20'>
                        <Typography className='pt-5 lg:w-96' sx={{ lineHeight:"30px" }}>
                        I embarked on my journey as a developer after graduating in 2022. 
                        I previously worked as a Call Center Agent and Transcriptionist. 
                        I can confidently state that being a developer is a truly fulfilling career, 
                        and it has deepened my love for it. I believe that the career path I have 
                        chosen enables me to harness my full potential
                        and imbue my work with a lasting sense 
                        of purpose for years to come. 
                        </Typography>
                    </div>
                </div>

                <div className='flex flex-col mt-44 lg:grid grid-cols-2 gap-10 text-left'>
                    <Grid
                        item={true}
                        component={Paper}
                        elevation={3}
                        square
                        className='p-5'
                    >
                        <Box>
                            <CodeOffIcon />
                            <Typography variant="h5" className="pt-5">Experience</Typography>
                            <Typography className='pt-5'>
                                Full Stack Developer at FinXp Ltd. <br/><br/>
                                My responsibilities are to implement user stories, fix arising technical issues, collaborate with
                                other developers to discuss what can we improve to produce better features, and strictly follow
                                project requirements including unit testing. <br/><br/>

                                Full Stack Developer at Unexus Inc.<br/><br/>
                                I got hired as a developer as well at Unexus to build a full stack web application from scratch. I also
                                parcticipate with implementing new features and fix arising bugs with their current application.
                                <br/>
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item={true}
                        component={Paper}
                        elevation={3}
                        square
                        className='p-5'
                    >
                        <Box>
                            <SchoolIcon />
                            <Typography variant="h5" className='pt-5'>Education</Typography>
                            <Typography className='pt-5'>
                                <strong>College</strong><br/>
                                <span>Bachelor of Science in Computer Science</span><br/>
                                <span>2018 - 2022</span>
                            </Typography>

                            <Typography className='pt-10'>
                                <strong>Senior High School</strong><br/>
                                <span>Science, Technology, Engineering and Mathematics</span><br/>
                                <span>2015 - 2018</span>
                            </Typography>
                        </Box>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default AboutMe;