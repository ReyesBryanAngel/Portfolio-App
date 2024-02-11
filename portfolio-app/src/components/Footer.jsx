import { Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';


const Footer = ({ footer }) => {
    const facebookUrl = 'https://www.facebook.com/lefthandedbryan/';
    const instagramUrl = 'https://www.instagram.com/reyesangelbryan/?hl=en';
    const linkedInUrl = 'https://www.linkedin.com/in/angel-bryan-reyes-7329331b0/';
    
    return (
        <>
            <div ref={footer} className='flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t bg-blue-100 py-6 text-center md:justify-evenly mt-20 p-3'>
                <div>
                    <div className='mt-5 text-left'>
                        <Typography>
                            <div className="flex items-center gap-2">
                                <MailIcon
                                    fontSize="large"
                                    color="primary"
                                    className="rounded-full bg-white p-2"
                                />
                                    reyesangelbryan@gmail.com
                            </div>
                            <div className="flex items-center gap-2">
                                <PhoneIcon 
                                    className="rounded-full bg-white p-2 my-2" 
                                    fontSize="large" 
                                    color="primary"
                                />
                                +639184067584
                            </div>
                            <div className="flex items-center gap-2">
                                <BusinessIcon 
                                    className="rounded-full bg-white p-2 my-2" 
                                    fontSize="large"
                                    color="primary"
                                />
                                Miralles Subd. Brgy Wawa Nasugbu, Batangas, Philippines
                            </div>
                        </Typography>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='flex gap-5 justify-center mt-5'>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="hover:cursor-pointer rounded-full bg-white p-2 my-2" fontSize="large" color="primary"/>
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="hover:cursor-pointer rounded-full bg-white p-2 my-2" fontSize="large" color="primary"/>
                        </a>
                        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="hover:cursor-pointer rounded-full bg-white p-2 my-2" fontSize="large" color="primary"/>
                        </a>
                    </div>
                </div>

            </div>
            <Typography className="pt-10">&copy; CoderBryan Portfolio. All Rights Reserved.</Typography>
        </>
    )
}

export default Footer;