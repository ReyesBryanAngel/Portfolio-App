import { useState } from 'react';
import { Card, Box, Typography, Button } from "@mui/material";

const Projects = ({banner, title, description, language, link }) => {

    const isCompanyProjects = "Company Projects"

    return (
        <div className="mt-10">
             <div className="text-left gap-3 w-full">
                <Box component="img" className="w-80" src={banner} alt="Banner" />
                <div className="p-3">
                    <Typography className="pt-5" variant="h5">
                    {title}
                    </Typography>
                    <Typography className="py-3" sx={{ fontSize: "16px" }}>
                    Language: {language}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", lineHeight: "24px"  }}>
                    {description} <br/> <br/>
                    {link}
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default Projects;