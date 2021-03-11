import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
//Images
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
//Animations
import {motion} from 'framer-motion';
import { pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer } from '../animation';
import {useScroll} from '../components/useScroll';
//Components
import ScrollTop from '../components/ScrollTop';


const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (
        <StyledWork 
            variants={pageAnimation} 
            initial='hidden' 
            animate='show' exit='exit' 
            style={{background: '#1C1D21'}}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <StyledMovie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-athlete'>
                    <StyleHide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
                    </StyleHide>
                </Link>
            </StyledMovie>
            <StyledMovie ref={element} variants={fade} animate={controls} initial='hidden'>
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/the-racer'>
                    <motion.img variants={photoAnim} src={theracer} alt="Racer"/>
                </Link>
            </StyledMovie>
            <StyledMovie ref={element2} variants={fade} animate={controls2} initial='hidden'>
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to='/work/good-times'>
                    <motion.img variants={photoAnim} src={goodtimes} alt="GoodTimes"/>
                </Link>
            </StyledMovie>
        </StyledWork>
    )
}

const StyledWork = styled(motion.div)`
    min-height: 10vh;
    overflow: hidden;
    padding: 5rem 15rem;
    h2{
        padding: 1rem 0rem;
        color: white;
    }
`

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: fill;
    }
`
const StyleHide = styled.div`
    overflow: hidden;
`

//Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0%;
    width: 100%;
    height: 100vh;
    background: #1C1D21;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    background: #23d997;
`

const Frame3 = styled(Frame1)`
    background: #1C1D21;
`

const Frame4 = styled(Frame1)`
    background: #23d997;
`

export default OurWork;