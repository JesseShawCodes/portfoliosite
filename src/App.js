import React from 'react';
import Heading from './components/heading/heading'
import Landing from './components/landing/landing'
import Whoiam from './components/whoiam/whoiam'
import Footer from './components/footer/footer'
import Portfolio from './components/portfolio/portfolio'
import './app.css'

/* Portfolio Items*/
import squaresLogo from './images/Logo3.jpg'
import mumuLogo from './images/logo.png'
import stegatoLogo from './images/stegatto_logo2.png'

/*Portfolio Screenshots */

import squaresScreenshot from './images/squares_screenshot.jpg';
import stegatoScreenshot from './images/stegato_screenshot.jpg';
import mumuScreenshot from './images/mumu_screenshot.jpg'

export default function App(props) {
    return (
        <main>
            <Heading />
            <Landing />
            <Whoiam />
            <section className="projects" id="portfolio">
                <section className="portfolio-header">
                    <h2 className="portfolio-header-text">Portfolio</h2>
                </section>
                <Portfolio site="1" screenshot={stegatoScreenshot} logo={stegatoLogo} projectname="stegato" description="My inspiration for Stegato started from IMDB's top 250. I created a project that users can rate their favorite (and least favorite) albums and those ratings accross the application are collected in the Stegato leaderboard. Features that I am currently working on to add to this application include Facebook login and a leaderboard that updates in real-time using websockets." technologies="html" applink="https://stegato.netlify.com/" repolink="https://github.com/thejesseshaw/stegato"/>
                <Portfolio site="2" screenshot={squaresScreenshot} logo={squaresLogo} projectname="squares" description="As someone who has worked on project teams in the past, I understand the value of having a go to place to keep all online resources. I created Squares to fill that need." technologies="icons go here" applink="https://squaresapp.herokuapp.com/" repolink="https://github.com/thejesseshaw/squares"/>
                <Portfolio site="3" screenshot={mumuScreenshot} logo={mumuLogo} projectname="mumu" description="Mumu is my first application. I have been a music lover for most of my life. Mumu is an application that users can use to search for the top 3 albums (based on last.fm statistics) of any artist, and listen to that music on YouTube." technologies="icons go here" applink="https://thejesseshaw.github.io/mumu/" repolink="https://github.com/thejesseshaw/mumu"/>
            </section>
            <Footer />
        </main>
    );
}

