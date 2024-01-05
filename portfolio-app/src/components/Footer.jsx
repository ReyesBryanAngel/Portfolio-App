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
            <div ref={footer} className='flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t bg-blue-100 py-6 text-center md:justify-evenly mt-20'>
                <div>
                    <Typography variant='h5'>Contact</Typography>
                    <div className='mt-5 text-left'>
                        <Typography>
                            <MailIcon /> reyesangelbryan@gmail.com <br />
                            <PhoneIcon /> +639184067584 <br />
                            <BusinessIcon /> Miralles Subd. Brgy Wawa <br /> Nasugbu, Batangas, Philippines
                        </Typography>
                    </div>
                </div>
                <div className='mt-5'>
                    <Typography variant='h5'>Accounts</Typography>
                    <div className='flex gap-5 justify-center mt-5'>
                        <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                            <FacebookIcon className="hover:cursor-pointer"/>
                        </a>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="hover:cursor-pointer"/>
                        </a>
                        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon className="hover:cursor-pointer"/>
                        </a>
                    </div>
                </div>

            </div><Typography className="whitespace-nowrap pt-10">&copy; CoderBryan Portfolio. All Rights Reserved.</Typography>
        </>
    )
}

export default Footer;