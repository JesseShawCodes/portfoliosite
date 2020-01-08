import React from 'react';
import './portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSalesforce, faHtml5, faCss3, faJs, faBitbucket, faWordpress, faPhp, faNodeJs, faNode, faNpm, faReact } from '@fortawesome/free-brands-svg-icons';


var stegatoTech = 
<section className="techfonts">
    <FontAwesomeIcon icon={faHtml5} title="HTML"/>
    <FontAwesomeIcon icon={faCss3} title="CSS"/>
    <FontAwesomeIcon icon={faJs} title="Javascript"/>
    <FontAwesomeIcon icon={faNodeJs} title="Node JS"/>
    <FontAwesomeIcon icon={faNode} title="Node"/>
    <FontAwesomeIcon icon={faNpm} title="Node Package Manager"/>
    <FontAwesomeIcon icon={faReact} title="React"/>
    </section>
var squaresTech = 
<section className="techfonts">
    <FontAwesomeIcon icon={faHtml5} />
    <FontAwesomeIcon icon={faCss3} title="CSS"/>
    <FontAwesomeIcon icon={faJs} title="Javascript"/>
    <FontAwesomeIcon icon={faNodeJs} title="Node JS"/>
    <FontAwesomeIcon icon={faNode} title="Node"/>
    <FontAwesomeIcon icon={faNpm} title="Node Package Manager"/>

</section>
var mumuTech = 
<section className="techfonts">
    <FontAwesomeIcon icon={faHtml5} title="HTML"/>
    <FontAwesomeIcon icon={faCss3} title="CSS"/>
    <FontAwesomeIcon icon={faJs} title="Javascript"/>
</section>
var smuTech = 
<section className="techfonts">
    <FontAwesomeIcon icon={faSalesforce} title="Salesforce Commerce Cloud"/>
    <FontAwesomeIcon icon={faHtml5} title="HTML5"/>
    <FontAwesomeIcon icon={faCss3} title="CSS"/>
    <FontAwesomeIcon icon={faJs} title="Javascript"/>
    <FontAwesomeIcon icon={faBitbucket} title="Bitbuck"/>
    </section>
var yogaDebTech = 
<section className="techfonts">
    <FontAwesomeIcon icon={faHtml5} title="HTML"/>
    <FontAwesomeIcon icon={faCss3} title="CSS"/>
    <FontAwesomeIcon icon={faJs} title="Javascript"/>
    <FontAwesomeIcon icon={faWordpress} title="Wordpress"/>
    <FontAwesomeIcon icon={faPhp} title="PHP"/>
</section>

export default function Portfolio(props) {
    let technologies
    let jobDetails
    let thelinks
    if (props.projectname === "stegato") {
        technologies = stegatoTech
        thelinks = <section><span className="linkout github"><a href={props.repolink} target="_blank">Repo</a></span><span className="linkout demo"><a href={props.applink} target="_blank">Demo</a></span></section>
    }
    else if (props.projectname === "mumu") {
        technologies = mumuTech
        thelinks = <section><span className="linkout github"><a href={props.repolink} target="_blank">Repo</a></span><span className="linkout demo"><a href={props.applink} target="_blank">Demo</a></span></section>
    }
    else if (props.projectname === "squares") {
        technologies = squaresTech
        thelinks = <section><span className="linkout github"><a href={props.repolink} target="_blank">Repo</a></span><span className="linkout demo"><a href={props.applink} target="_blank">Demo</a></span></section>
    }
    else if (props.projectname === "south-moon-under") {
        technologies = smuTech
        jobDetails = 
            <ul>
                <li>Maintanance of legacy code and assets and troubleshoot bugs within a complex, global code base.</li>
                <li>Built, managed, and maintained front end site features and integrations using HTML, CSS, Javascript, and jQuery coding best practices within Demandware Business manager.</li>
                <li>Provided consultation to creative/design team with guidance on UX and Mobile design best practices to implement within site content updates.</li>
                <li>Developed cross-browser, cross-device compatible pages adhering to industry best practices.</li>
                <li>Updates to Back end site features built on SFCC Pipeline Architecture. These features include product feed jobs that built XML catalog files with demandware script files as well as security functionality.</li>
                <li>Developed A/B tests using Monetate platform. Built and tested features that have led to a 10 - 15% increase in Conversion Rate and a 15 - 20% increase in revenue per session.</li>
                <li>Implemented and researched Search Engine Optimization (SEO) opportunities for the brand. These opportunities included setting up structured data, tagging updates, and updating template files to serve needs of E-Commerce team to add appropriate keywords on the site within the CMS.</li>
                <li>Updated and maintained site integrations with Monetate, Bronto, Channel Advisor, Facebook, Google Analytics.</li>
            </ul>
        thelinks = <span className="linkout demo"><a href={props.applink} target="_blank">Live</a></span>

    }
    else if (props.projectname === "yoga-by-deborah") {
        technologies = yogaDebTech
        thelinks = <section><span className="linkout github"><a href={props.repolink} target="_blank">Repo</a></span><span className="linkout demo"><a href={props.applink} target="_blank">Live</a></span></section>
    }
    return (
        <section className={`portfolio ${props.projectname}`}>
            <section className="portfolio-section">
                <h2>{props.sitename}</h2>
                <section className="screenshot">
                <img src={props.screenshot} alt="screenshot" className="project-screenshot"></img>
                </section>
                <section className="logo-section">
                <script>console.log({props.logo});</script>
                <img src={props.logo} alt="logo" className="project-logo"></img>
                </section>
                <section className="project-description">
                <span className="site-identifier">{props.description}</span>
                </section>
                <section className="job-details">
                    {jobDetails}
                </section>
                <section className="technologies">
                    {technologies}
                </section>
                <section className="the-links">
                    {thelinks}
                </section>
            </section>
        </section>
    );
}

