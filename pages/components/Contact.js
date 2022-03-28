import {Row, Col} from "react-bootstrap";


const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact</h2>
            <style jsx>{`
            h2{
                text-decoration: underline;
            }

            .contact {
                padding-top: 1rem;
                font-size: 0.9em;
                margin-top: 2rem;
                margin-bottom: 2rem;
            }

            .contact a {
                color: #333;
                transition: transform 0.2s;
                text-decoration: none;
            }

            .contact a:hover {
                text-decoration: none;
                background: #f3f3f3;
                transform: scale(1.2);
                border: none;
                box-shadow: 0 2px 5px 0 #dfdfdf,  0 8px 40px 0 rgb(10 14 29 / 6%);

            }

            .boxes {
                display: flex;
                justify-content: space-between;
                margin: 1rem 0;
            }

            .box {
                padding: 1rem;
                padding-top: 0.25rem;
                padding-bottom: 0.25rem;
                border: 1px solid lightgrey;
                border-radius: 0.3rem;
                align-items: center;
                display: flex;
            }

            .box i {
                font-size: 1.5em;
                margin-right: 0.5rem;
            }
            @media (max-width: 991px){
                .box {
                    font-size: 0.9em;
                    margin-bottom: 1rem;
                }
            }


            `}
                
            </style>
            <Row className="boxes">
                <Col lg={4} md={6} sm={12}>
                    <a 
                    href="phumlamazibuko188@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="box"
                    >
                        <i className="bi bi-envelope"></i>
                        email
                    </a>
                </Col>
                <Col lg={4} md={6} sm={12}>
                    <a 
                    href="https://www.linkedin.com/in/phumla-mazibuko-3684a0187/"
                    target="_blank"
                    rel="noreferrer"
                    className="box"
                    >
                        <i className="bi bi-linkedin"></i>
                        linkedin
                    </a>
                    </Col>
            </Row>
        </div>
    )
}

export default Contact;