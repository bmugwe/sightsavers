// src/components/GridLayout.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { DataQuery, useDataQuery } from '@dhis2/app-runtime';

const query = {
  me: {
      resource: 'visualizations',
  },
}

const GridLayout = () => {
  const { error, loading, data } = useDataQuery(query)

  const site_url = window.location.origin;
  const testing_url = 'https://partnermanagementsystem.uonbi.ac.ke';
  const site_app = `${site_url.includes('localhost') ? testing_url : site_url}/dhis-web-data-visualizer/#/`
  // https://partnermanagementsystem.uonbi.ac.ke/dhis-web-data-visualizer/#/msQFEJMgOYu
  console.log(site_app)

    if (error) {
        return <span>Error</span>
    }

    if (loading) {
        return <span>Loading .... </span>
    }
    console.log({data})
    const visuals = data?.me?.visualizations
    if (visuals.length > 1) {
      return (
        <Container fluid>
          <Row fluid>
            <Col>
              
            </Col>
            <Col>
            
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <div>
          {/* Handle case when visuals.length <= 1 */}
          No visuals to display
        </div>
      );
    }
};

export default GridLayout;
