import React from 'react';

const DHIS2Iframe = () => {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://cccc.com/dhis-web-dataentry/index.action"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="DHIS2 Data Entry"
      />
    </div>
  );
};

export default DHIS2Iframe;
