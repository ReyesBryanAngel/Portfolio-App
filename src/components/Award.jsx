import {  Box, Typography } from "@mui/material";
import { CompanyAwardV2, FinxpAward } from "../assets";

const Award = () => {
    return (
        <>
            <div className="mt-10">
            <Typography variant="h5" fontWeight="bold" className='pt-20 text-left'>COMPANY PERFORMANCE AWARD</Typography>
                <div className="flex flex-col lg:flex-row pt-20 items-start gap-10">
                   
                    <Box
                        component="img"
                        style={{ height:"20rem", marginBottom:"30px"}}
                        src={CompanyAwardV2} 
                    />
                     <Box
                        component="img"
                        style={{ height:"20rem", marginBottom:"30px"}}
                        src={FinxpAward} 
                    />
                </div>
            </div>
        </>
    )
}

export default Award;