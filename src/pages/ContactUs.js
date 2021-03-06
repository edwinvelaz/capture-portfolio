import React from 'react';
//Animations
import {motion} from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';


const ContactUs = () => {
    return (
        <ContactStyle
            variants={pageAnimation}
            initial='hidden'
            animate='show'
            exit='exit'
        >
            <StyledTitle>
                <StyledHide>
                    <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
                </StyledHide>
            </StyledTitle>
            <div>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2>Send us a message!</h2>
                    </StyledSocial>
                </StyledHide>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2>Send Email</h2>
                    </StyledSocial>
                </StyledHide>
                <StyledHide>
                    <StyledSocial variants={titleAnim}>
                        <StyledCircle />
                        <h2>Social Media</h2>
                    </StyledSocial>
                </StyledHide>
            </div>
        </ContactStyle>
    )
}

const ContactStyle = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`

const StyledTitle = styled.div`
    margin-bottom: 4rem;
    color: black;
`
const StyledHide = styled.div`
    overflow: hidden;
`

const StyledCircle = styled.div`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`

const StyledSocial = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`
export default ContactUs;