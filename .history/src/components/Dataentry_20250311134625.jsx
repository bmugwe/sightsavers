import React from 'react';

const DHIS2Iframe = () => {


    const site_url = window.location.origin;
    const testing_url = 'https://partnermanagementsystem.uonbi.ac.ke/';
    const site_app = `${site_url.includes('localhost') ? testing_url : site_url}/dhis-web-dataentry/index.action`
    console.log(site_app)
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        src= {site_app}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="DHIS2 Data Entry"
      />
    </div>
  );
};

export default DHIS2Iframe;
