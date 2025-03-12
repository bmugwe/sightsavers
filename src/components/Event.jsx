
import React, { useRef, useEffect } from 'react';

const EventIframe = () => {
  const iframeRef = useRef(null);

  const site_url = window.location.origin;
  const testing_url = 'https://partnermanagementsystem.uonbi.ac.ke';
  const site_app = `${site_url.includes('localhost') ? testing_url : site_url}/dhis-web-capture/index.html#/`
  console.log(site_app)


  useEffect(() => {
    // Check if the iframe is loaded and accessible
    const iframe = iframeRef.current;

    const hideHeader = () => {
      // Ensure the iframe's document is available and it's from the same origin
      if (iframe && iframe.contentWindow && iframe.contentDocument) {
        const iframeDoc = iframe.contentDocument;
        const headerElement = iframeDoc.getElementById('header');
        if (headerElement) {
          headerElement.style.display = 'none'; // Hide the header
        }
      }
    };

    // Run the function after the iframe is loaded
    iframe.onload = hideHeader;

    return () => {
      // Cleanup the event listener when the component unmounts
      iframe.onload = null;
    };
  }, [site_app]);

  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe
        ref={iframeRef}
        src={site_app}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="DHIS2 Data Entry"
      />
    </div>
  );
};

export default EventIframe;

