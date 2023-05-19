import { Container, Row, Col, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="footer bg-primary bg-gradient border-top py-3">
            <Container>
                <Row className="d-flex justify-content-center align-items-center text-center text-white">
                    <Col sm={4}>
                        © { new Date().getFullYear() } by Pawdoption
                    </Col>

                    <Col sm={4}>
                    <form action="/create-checkout-session" method="POST">
                        <Button variant="outline-white" size="sm" type="submit">Click to Donate</Button>
                    </form>
                    </Col>

                    <Col sm={4}>
                        (111) 111-1111<br/>
                        info@pawdoption.com<br/>
                        Salt Lake City, Utah
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;