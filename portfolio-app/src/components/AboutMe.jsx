import React, { useState } from 'react';
import { Box, Typography, Tabs, Tab, Card } from "@mui/material";
import { AboutPicV3 } from "../assets";
import Experiences from "./Experiences";
import { experiences } from "./ContributionLists";

const AboutMe = ({ aboutRef }) => {
    return (
        <>
            <div className='flex flex-col gap-6 mt-56 lg:mt-60' ref={aboutRef}>
                <div className="lg:ml-32">
                    <Typography variant="h5" fontWeight="bold" className="lg:text-left">ABOUT ME</Typography>
                </div>
                
                <div className='flex flex-col items-center lg:text-left gap-10 justify-center lg:flex-row mt-10'>
                    <Box
                        component="img"
                        className='h-60 lg:h-80'
                        src={AboutPicV3}
                    />

                        <Typography className='pt-5 lg:w-1/2' sx={{ lineHeight:"30px" }}>
                        As a Fullstack Developer, I excel in developing robust full-stack web applications while applying agile
                         development methodologies for all assigned projects. My expertise lies in crafting reliable and secure 
                         API structures by writing clean, reusable code across both front-end and back-end platforms, 
                         utilizing cutting-edge development techniques. Additionally, I am a strong communicator and 
                         creative problem solver, thriving in collaborative environments 
                        with cross-functional teams to deliver high-quality services.
                        </Typography>
   
                </div>

                <div className='flex flex-col mt-44 gap-10 text-left'>
                    <Typography variant="h5" fontWeight="bold" className="">EXPERIENCES</Typography>
                    
                    {experiences.map((experience, index) => (
                        <Experiences
                            key={index}
                            logo={experience.logo}
                            title={experience.title}
                            company={experience.company}
                            description={experience.description}
                            date={experience.date}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default AboutMe;