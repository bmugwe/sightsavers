// src/components/GridLayout.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const GridLayout = () => {
  return (
    <Container>
      <Row>
        <Col>
            Column One
        </Col>
        <Col xs={10}>
            Column One
        </Col>
      </Row>
    </Container>
  );
};

export default GridLayout;
