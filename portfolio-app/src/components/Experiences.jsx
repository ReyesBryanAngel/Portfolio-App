import React from 'react';
import { Box, Typography } from "@mui/material";

const Experiences = ({ logo, title, company, description, date}) => {
    return (
        <div className="flex gap-5">
            <Box
                component="img"
                src={logo}
                sx={{borderRadius:"8px", width:"50px", height:"50px" }}
                className='h-6' 
            />
            <div className="flex flex-col">
                <Typography fontWeight="bold">{title}</Typography>
  
                <Typography fontSize="small" color="textSecondary">{company}</Typography>
                <Typography fontSize="small" color="textSecondary">{date}</Typography>
                <Typography sx={{ marginTop:"5px" }} color="textSecondary">{description}</Typography>
                
            </div>
           
        </div>
    )
}

export default Experiences;