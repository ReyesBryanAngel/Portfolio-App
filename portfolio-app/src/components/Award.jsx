import { Card, Box, Typography } from "@mui/material";
import AngularCertificate from "../assets/angular-certificate.png"
import LaravelCertificate from "../assets/laravel-certificate.png"
import { CompanyAward, CompanyAwardV2, FinxpAward } from "../assets";

const Award = () => {
    return (
        <>
            <div className="mt-10">
            <Typography variant="h5" fontWeight="bold" className='pt-20 text-left'>COMPANY PERFORMANCE AWARD</Typography>
                <div className="pt-20 flex items-start gap-10">
                   
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