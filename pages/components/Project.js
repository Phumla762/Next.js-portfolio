import { Card, Col, Row } from "react-bootstrap";

const Works = () => {
    return (
        <div className="works">
            <h2>Projects</h2>
            <Row>
                <Col md={6}>
                    <Card className="card">
                        <a href="#" target="_blank" rel="noreferrer">
                        <Card.Img
                        variant="top"
                        src="/assets/images/Spotty.png"
                        />
                        <Card.Body>
                            <Card.Title className="title">Spotify App</Card.Title>
                            <p className="category">
                                Used React.js to create the application. Integrated Spotify api, Spotify aunthentication and using material-ui. 
                                Also it uses React Context api (Redux pattern).
                            </p>
                            <Card.Text>
                                This application was developed to display my personal login information having used personal data.
                                It shows songs that are in the personal favourites profile of the cloned of the successful music application.
                            </Card.Text>
                        </Card.Body>
                        </a>
                    </Card>
                </Col>
                <Col md={6}>
                <Card className="card">
                    <a href="#" target="_blank" rel="noreferrer">
                        <Card.Img
                        variant="top"
                        src="/assets/images/store.png"
                        />
                        <Card.Title className="title"> E-commerce website</Card.Title>
                        <p className="category">This is made with Html, CSS and JavaScript.</p>
                        <Card.Text>
                            This is a trendy e-commerce store that includes a functional shopping cart.
                            It is an attractive site focussed on stylinging and interactiveness.
                        </Card.Text>
                    </a>
                </Card>
                </Col>
                <Col md={6}>
                    <Card className="card">
                        <a href="#" target="_blank" rel="noreferrer">
                            <Card.Img
                            variant="top"
                            src="/assets/images/weather.png"
                            />
                            <Card.Body>
                                <Card.Title className="title">Weather App</Card.Title>
                                <p className="category">It uses REST API integration .</p>
                                <Card.Text>
                                It has limited styling using linear-gradient to show the weather at low temperatures.
                                The application uses API works according to city.
                                </Card.Text>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
            </Row>
            <style jsx global>{`
            .works {
                padding-top: 1rem;
                font-size: 0.9em;
                margin-top: 2rem;
                margin-bottom: 2rem;
            }

            .works a {
                color: black;
                text-decoration: none;
            }

            .work a:hover{
                text-decoration: none;
            }

            .title {
                margin-bottom: 0;
            }

            .category {
                font-size: 0.8em;
            }

            .card {
                transition: transform 0.2s;
                margin: 0 auto;
                margin-bottom: 1.2rem;
            }

            .card:hover {
                transform: scale(1.1);
                border: none;
                box-shadow: 0 2px 5px 0 #dfdfdf, 0 8px 40px 0 rgb(10 14 29 / 6%)
            }
            
            h2{
                text-decoration: underline;
                color: #333a45;
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
            `}
            </style>
        </div>
    )
}

export default Works;