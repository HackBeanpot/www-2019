import React from 'react';
import FAQItem from '../components/FAQItem';
import MailingListPrompt from '../components/MailingListPrompt';
import AboutItem from '../components/AboutItem';

const App = () => (
    <div>
        <section className="landing-section">
            <img className="hero-logo" src="https://hackbeanpot.com/img/solid_logo.png"/>

            <div>
                <h3>
                    An independently-run Boston hackathon
                    <br />
                    for curious students, hackers, makers, and beginners.
                </h3>
                <h1>
                    Come learn and build with us
                    <br />
                    February 9-11th 2019
                    <br />
                    @ Genuine HQ
                </h1>
                <MailingListPrompt />
                <span>
                    <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg" />
                    <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg" />
                    <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg" />
                    <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg" />
                </span>
            </div>
        </section>

        <section className="about-section">
            <h2>HackBeanpot is about...</h2>
            <AboutItem
                header="The Stories"
                content="Stories content"
                pageLink="/stories"
                floatDirection="left"
            />
            <AboutItem
                header="The Projects"
                content="Projects content"
                pageLink="/projects"
                floatDirection="right"
            />
            <AboutItem
                header="The People"
                content="People content"
                pageLink="/sponsors/"
                floatDirection="left"
            />
        </section>

        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <FAQItem
                question="Question 1"
                answer="Answer 1"
            />
            <FAQItem
                question="Question 2"
                answer="Answer 2"
            />
            <FAQItem
                question="Question 3"
                answer="Answer 3"
            />
        </section>

        <section className="sponsors-section">
            <h2>2019 Sponsors</h2>
            <div>
                <img className="sponsor" src="https://www.freelogodesign.org/Content/img/logo-ex-5.png" />
                <img className="sponsor" src="https://www.freelogodesign.org/Content/img/logo-ex-5.png" />
                <img className="sponsor" src="https://www.freelogodesign.org/Content/img/logo-ex-5.png" />
            </div>
        </section>
    </div>
);

export default App;
