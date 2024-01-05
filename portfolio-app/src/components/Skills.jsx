import { Card, Box, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const Skills = ({logo, title, progressValue}) => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        width: "50%",
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
        },
    }));

    return (
        <div className="mt-10">
            <Card className=" flex flex-col justify-center items-center p-5 gap-3" elevation={3}>
                <Box
                    component="img"
                    className="h-20 mt-2"
                    src={logo}
                    
                />
                <Typography className="pt-5" variant="h5">{title}</Typography>
                <BorderLinearProgress variant="determinate" value={progressValue} />
            </Card>
        </div>
    )
}

export default Skills;