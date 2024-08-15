import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

function Footer() {
    return (
        <div style={{ background: 'linear-gradient(to bottom, skyblue,white )', color: 'white', padding: '30px 0' }}>
            <Container>
                <Row className="mb-4">
                    <Col md={4}>
                        <h1 className="font-weight-bold fs-4">Company Inc.</h1>
                        <div className="d-flex mb-3">
                            <FaInstagram size={24} style={{ marginRight: '15px', color: '#fff' }} />
                            <FaTwitter size={24} style={{ marginRight: '15px', color: '#fff' }} />
                            <FaFacebookF size={24} style={{ color: '#fff' }} />
                        </div>
                        <ListGroup variant="flush">
                            <ListGroupItem className="bg-transparent border-0" style={{ fontSize: '0.875rem' }}>91+ 98753-04467</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0" style={{ fontSize: '0.875rem' }}> Recreational_Media@Gmail.com</ListGroupItem>

                        </ListGroup>
                    </Col>

                    <Col md={2}>
                        <h1 className="font-weight-bold fs-4">About Us</h1>
                        <ListGroup variant="flush">
                            <ListGroupItem className="bg-transparent border-0">Services</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Packages</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Support</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Partners</ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col md={2}>
                        <h1 className="font-weight-bold fs-4">Career</h1>
                        <ListGroup variant="flush">
                            <ListGroupItem className="bg-transparent border-0">Legal</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Suppliers</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Partners</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Team</ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col md={2}>
                        <h1 className="font-weight-bold fs-4">Adventures</h1>
                        <ListGroup variant="flush">
                            <ListGroupItem className="bg-transparent border-0">Religious</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Shared Experiences</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Historical</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Geographical</ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col md={2}>
                        <h1 className="font-weight-bold fs-4">Others</h1>
                        <ListGroup variant="flush">
                            <ListGroupItem className="bg-transparent border-0">Partners</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Culture</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Cuisine</ListGroupItem>
                            <ListGroupItem className="bg-transparent border-0">Community</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            <div className="border-top border-white pt-3 mt-4">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <small>© 2024 Company Inc. All rights reserved.</small>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Footer;
