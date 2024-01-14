import { useState } from 'react';
import { Card, Box, Typography, Button } from "@mui/material";

const MAX_HEIGHT = 250;

const Projects = ({banner, title, description, language, link }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
      setExpanded(!expanded);
    };

    return (
        <div className="mt-10">
             <Card className="text-left gap-3" elevation={4}>
                <Box component="img" className="w-full" src={banner} alt="Banner" />
                <div className="p-3">
                    <Typography className="pt-5" variant="h5">
                    {title}
                    </Typography>
                    <Typography className="py-3" sx={{ fontSize: "16px" }}>
                    Language: {language}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", height: expanded ? "none" : `${MAX_HEIGHT}px`, overflow: "hidden" }}>
                    {description} <br/> <br/>
                    {link}
                    </Typography>
                    {title === "Apply Corporate Application" &&  (
                    <Button sx={{ marginBottom:"-10px", marginTop:"10px" }} onClick={toggleExpansion} color="primary">
                        {expanded ? "See less" : "See more"}
                    </Button>
                    )}
                </div>
            </Card>
        </div>
    )
}

export default Projects;