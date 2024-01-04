import { Card, Box, Typography } from "@mui/material";
import AngularCertificate from "../assets/angular-certificate.png"
import LaravelCertificate from "../assets/laravel-certificate.png"
import FinxpAward from "../assets/finxp-award.png"

const Award = () => {
    return (
        <>
            <div className="mt-10">
            <Typography variant="h4" className='pt-20 text-left'>Certifications and Award</Typography>
                <div className="pt-20 flex justify-center">
                    <Box
                        component="img"
                        style={{ height:"20rem"}}
                        src={FinxpAward} 
                    />
                </div>
                <Card className="flex flex-col gap-5 p-5 lg:grid grid-cols-2 gap-5">
                    <Box
                        component="img"
                        className="w-full"
                        src={AngularCertificate} />
                    <Box
                        component="img"
                        className="w-full"
                        src={LaravelCertificate} />
                </Card>
            </div>
        </>
    )
}

export default Award;