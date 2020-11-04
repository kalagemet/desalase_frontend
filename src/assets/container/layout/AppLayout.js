import React from 'react';
import '../../styles/sass/style.scss';
import { Container } from 'semantic-ui-react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { Home } from '../../page/Home';

export function AppLayout(props){
    return(
        <div className="app-layout">
            <Container className="content-container">
                <Header/>
                <Home>
                    {props.children}
                </Home>
                <Footer/>
            </Container>
        </div>
    )
}