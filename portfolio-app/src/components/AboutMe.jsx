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
                        <Typography className='pt-5 lg:w-96'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Temporibus quasi excepturi vitae corporis ab vel accusamus odio dolorem aliquam.
                            Aspernatur, possimus neque maxime unde quasi facere corrupti nulla delectus impedit.
                        </Typography>
                    </div>
                </div>

                <div className='flex flex-col mt-44 lg:flex-row gap-10'>
                    <Grid
                        item={true}
                        component={Paper}
                        elevation={3}
                        square
                        className='p-5'
                    >
                        <Box>
                            <CodeOffIcon />
                            <Typography variant="h5">Experience</Typography>
                            <Typography className='pt-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Temporibus quasi excepturi vitae corporis ab vel accusamus odio dolorem aliquam.
                                Aspernatur, possimus neque maxime unde quasi facere corrupti nulla delectus impedit.
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
                            <Typography variant="h5">Education</Typography>
                            <Typography className='pt-5'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Temporibus quasi excepturi vitae corporis ab vel accusamus odio dolorem aliquam.
                                Aspernatur, possimus neque maxime unde quasi facere corrupti nulla delectus impedit.
                            </Typography>
                        </Box>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default AboutMe;