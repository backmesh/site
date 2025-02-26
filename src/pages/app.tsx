import React, { useEffect } from 'react';

export default function AppRedirect(): React.ReactElement {
  useEffect(() => {
    const baseUrl = process.env.NODE_ENV === 'development' ? "http://localhost:8000" : "https://app.backmesh.com";
    const queryString = window.location.search;
    window.location.assign(baseUrl + queryString);
  }, []);
  return null;
}
