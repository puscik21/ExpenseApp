import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'
import backgroundImage from '../../assets/backgroundImage.jpg'

const Styles = styled.div `
    .jumbo {
        background: url(${backgroundImage}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 250px;
        position: relative;
        z-index: -2;
    }
    
    .overlay {
      background-color: #000;
      opacity: 0.4;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
                <Container>
                    <h1>Welcome</h1>
                    <p>Kasia jest super</p>
                </Container>
            </div>
        </Jumbo>
    </Styles>
)