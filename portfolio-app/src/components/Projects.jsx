import React from 'react';
import { Box, Typography } from "@mui/material";
import { GithubLogo } from "../assets";

const Projects = ({banner, title, description, code }) => {
    return (
        <div className='mt-28'>
             <div className="flex flex-col lg:flex-row items-center justify-evenly gap-12 text-left w-full">
                <div>
                    <Box component="img" sx={{ maxWidth: "100%", height: "auto", width: "600px" }} src={banner} alt="Banner" />
                </div>
                <div className="w-80 text-center flex flex-col items-center">
                    <Typography variant="h6" fontWeight="bold">
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", lineHeight: "24px", marginTop:"10px" }}>
                        {description}
                    </Typography>
                    <div className='flex gap-5 mt-5'>
                        <div className='flex gap-2 hover:cursor-pointer'>
                            {code}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;