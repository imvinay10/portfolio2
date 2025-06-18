import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import ResumeModal from '../PDFViewer/ResumeModal';

const HeroSection = () => {
     const [openResume, setOpenResume] = React.useState(false);
  const resumeUrl = require('../../assets/VinayMahajan_CV.pdf');
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    {/* <HeroBgAnimation /> */}
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton onClick={() => setOpenResume(true)}>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
                  <ResumeModal open={openResume} onClose={() => setOpenResume(false)} resumeUrl={resumeUrl} />

        </div>
    )
}

export default HeroSection