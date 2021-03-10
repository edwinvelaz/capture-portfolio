import React, {useState} from 'react';
import styled from 'styled-components';
import { StyledAbout } from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion';

const FaqSection = () => {


    return (
        <StyledFaq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How Do I Start?'>
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <p>Asperiores dicta molestias id tempore aliquam.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <p>Asperiores dicta molestias id tempore aliquam.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title='Different Payment Methods'>
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <p>Asperiores dicta molestias id tempore aliquam.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title='What Product do you offer'>
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <p>Asperiores dicta molestias id tempore aliquam.</p>
                        </div>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq>
    )
}

const StyledFaq = styled(StyledAbout)`
    display: block;
    padding-left: 15rem;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer {
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection;