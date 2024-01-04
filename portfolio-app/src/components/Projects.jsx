import { Card, Box, Typography } from "@mui/material";

const Projects = ({banner, title, description, language }) => {
    return (
        <div className="mt-10">
            <Card className="text-left gap-3">
                <Box
                    component="img"
                    className="w-full"
                    src={banner}
                    
                />
                <div className="p-3">
                    <Typography className="pt-5" variant="h5">{title}</Typography>
                    <Typography className="py-3" sx={{ fontSize: "16px" }}>Language: {language}</Typography>
                    <Typography sx={{ fontSize: "14px" }}>{description}</Typography>
                </div>
            </Card>
        </div>
    )
}

export default Projects;