import React, { useEffect } from 'react';

export default function AppRedirect(): React.ReactElement {
  useEffect(() => {
    const baseUrl = process.env.NODE_ENV === 'development' ? "http://localhost:8000" : "https://app.backmesh.com";
    
    // Get the current query string
    const queryString = window.location.search;
    
    // Redirect to the destination URL with the query parameters
    window.location.href = baseUrl + queryString;
  }, []);
  return null;
}
