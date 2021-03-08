import React from 'react';
import home1 from '../img/home1.png';
import styled from 'styled-components';

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className='title'>
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span> come</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>true.</h2>
                    </StyledHide>
                </div>
                <p>Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.</p>
                <button>Contact Us</button>
            </StyledDescription>
            <StyledImage>
                <img alt='guy with a camera' src={home1} />
            </StyledImage>
        </StyledAbout>
    )
}

//Styled Components

const StyledAbout = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`
const StyledDescription = styled.div`
    flex: 1;
    padding: 5rem;
    h2{
        font-weight: lighter;
    }
`

const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

const StyledHide = styled.div`
    overflow: hidden;
`


export default AboutSection;