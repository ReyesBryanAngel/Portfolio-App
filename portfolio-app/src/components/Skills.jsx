import { Card, Box, Typography } from "@mui/material";

const Skills = ({logo, title, description}) => {
    return (
        <div className="mt-10">
            <Card className="p-5 text-left gap-3">
                <Box
                    component="img"
                    className="h-20 mt-2"
                    src={logo}
                    
                />
                <Typography className="pt-5" variant="h5">{title}</Typography>
                <Typography>{description}</Typography>
            </Card>
        </div>
    )
}

export default Skills;