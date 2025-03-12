// src/components/GridLayout.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { DataQuery, useDataQuery } from '@dhis2/app-runtime';

const query = {
  me: {
      resource: 'visulizations',
  },
}

const GridLayout = () => {
  const { error, loading, data } = useDataQuery(query)

    if (error) {
        return <span>{i18n.t('ERROR')}</span>
    }

    if (loading) {
        return <span>{i18n.t('Loading...')}</span>
    }

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
