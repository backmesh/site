import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function BrowserWindow({ children }: {
  children: ReactNode;
}) {
  return (
    <div className="browser-window">
      <div className="browser-top">
        <span className="browser-dot"></span>
        <span className="browser-dot"></span>
        <span className="browser-dot"></span>
      </div>
      {children}
    </div>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Backmesh" description={siteConfig.tagline}>
      <div className="hero hero">
        <div className="container">
          <div className="row">
            <div className="col col--6 padding--lg">
              <h1 className="hero__title">{siteConfig.tagline}</h1>
              <p className="hero__subtitle">Supports all Gen AI APIs, and any web or mobile app</p>
              <button className="button button--primary button--lg margin-top--lg" onClick={() => window.location.href="https://forms.gle/an5hMGFmDuQ36L7B9"}>Get early access</button>
            </div>
            <div className="col col--6 padding--lg">
              <BrowserWindow>
                <img
                  alt="Backmesh Code Sample"
                  className='shadow--tl browser-content'
                  src={'typewriter.gif'}
                />
              </BrowserWindow>
            </div>
          </div>
        </div>
      </div>
      <div className="hero hero--gradient">
        <div className="container">
          <div className="row padding--lg">
            <div className="col col--6 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>Zero config Gen AI Analytics</h3>
                </div>
                <div className="card__body">
                  <p>
                  Automatically instrument all Gen AI API calls to understand how it affects each user, e.g. error rates, response times across models, etc
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--6 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>Rate limits per user</h3>
                </div>
                <div className="card__body">
                  <p>
                    Set Gen AI API request limits per user, e.g. no user should be calling a Gen AI API more than 5 times per hour
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col col--4 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>Secure secret storage</h3>
                </div>
                <div className="card__body">
                  <p>
                    Private API keys are securely encrypted and handled
                  </p>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className="row padding--lg">
            <BrowserWindow>
              <img
                alt="Dashboard"
                className='shadow--tl browser-content'
                src={'emptydash.png'}
              />
            </BrowserWindow>
          </div> */}
        </div>
      </div>
      <div className="hero">
        <div className="container">
          <div className="row padding--md text--center">
            <h1 style={{width: '100%'}}>How Backmesh works</h1>
            <p className="hero__subtitle">Backmesh is a proxy on edge CDN servers between your web or mobile app and the Gen AI APIs. Proxied requests are automatically verified with your auth provider's JWT, checked for rate limits and instrumented.</p>
          </div>
          <div className="text--center">
            <img
              alt="Proxy"
              style={{width: '60%'}}
              src={'proxy.gif'}
            />
          </div>
        </div>
      </div>
      <div className="hero padding-bottom--xl">
        <div className="container">
          <div className="row text--center">
            <h1 style={{width: '100%', paddingBottom: '80px'}}>Ready to get started?</h1>
          </div>
          <div className="row text--center">
            <div className="col col--3"></div>
            <div className="col col--3">
              <button className="button button--primary button--lg" onClick={() => window.location.href="https://forms.gle/an5hMGFmDuQ36L7B9"}>Get early access</button>
            </div>
            <div className="col col--3">
              <button className="button button--primary button--lg" onClick={() => window.location.href="/docs"}>Documentation</button>
            </div>
            <div className="col col--3"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}