import React from 'react';
import { Redirect } from '@docusaurus/router';

export default function AppRedirect(): React.ReactElement {
  if (process.env.NODE_ENV === 'development') {
    return <Redirect to="http://localhost:8000" />;
  }

  // Fallback redirect for SSR
  return <Redirect to="https://app.backmesh.com" />;
}
