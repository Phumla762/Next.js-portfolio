import React from "react";

const About = () => {
    return(
        <div className="about">
            <h2>About Me</h2>
            <p>
            I am a passionate Web Developer. I am committed to all things Web including application developing using JavaScript libraries and frameworks.
            I aim to see the impact web development has on businesses making them expand, to be scalable and user friendly.
            I specialise in Frontend development and bring a personality that loves to seek solutions and bring them to life with innovative skills and team work capabilities.
            </p>

            <style jsx>{`
            .about {
                padding-top: 1rem;
                font-size: 0.9em;
                margin-top: 2rem;
                margin-bottom: 2rem;
            }

            .boxes {
                display: flex;
                justify-content: space-between;
                margin: 1rem 0;
            }

            .box {
                padding: 1rem;
                padding-top: 0rem;
                padding-bottom: 0rem;
                border: 1px solid lightgrey;
                border-radius: 0.6rem;
                align-items: center;
                display: flex;
            }

            .box i {
                font-size: 1.5em;
                margin-right: 0.5rem;
            }

            h2 {
                text-decoration: underline;
            }

            `}
            </style>
        </div>
    )
}

export default About;