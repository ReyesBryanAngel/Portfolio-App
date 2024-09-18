import React from 'react';
import { Box, Typography } from "@mui/material";

const Experiences = ({ logo, title, company, description, date}) => {
    const formatDescription = (description) => {
        // eslint-disable-next-line react/prop-types
        return description.split('\n').map((line, index) => (
            <div key={index} className='mt-4'>
                {line}
                <br/>
            </div>
        ));
    };

    return (
        <div className="flex gap-5">
            <Box
                component="img"
                src={logo}
                sx={{ borderRadius: "8px", width: "50px", height: "50px" }}
                className='h-6'
            />
            <div className="flex flex-col">
                <Typography fontWeight="bold">{title}</Typography>
                <Typography fontSize="small" color="textSecondary">{company}</Typography>
                <Typography fontSize="small" color="textSecondary">{date}</Typography>
                {/* Format the description with newlines */}
                <Typography color="textSecondary">
                    {formatDescription(description)}
                </Typography>
            </div>
        </div>
    );
}

export default Experiences;