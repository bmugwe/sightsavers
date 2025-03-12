// src/components/GridLayout.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { DataQuery } from '@dhis2/app-runtime';

const query = {
  me: {
      resource: 'visulizations',
  },
}

const GridLayout = () => {
  return (
    <Container>
      <Row>
        <Col>
            Column One
        </Col>
        <Col>
            Column One
        </Col>
      </Row>
    </Container>
  );
};

export default GridLayout;
