import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';

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
  return (
    <Layout title="Backmesh" description="The Firebase for AI apps">
      <div className="hero hero">
        <div className="container">
          <div className="row">
            <div className="col col--6 padding--lg">
              <h1 className="hero__title">The Firebase for AI apps</h1>
              <p className="hero__subtitle">Use any Gen AI API from your app without a backend with analytics and rate limits per user</p>
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
            <div className="col col--4 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>Easy integration</h3>
                </div>
                <div className="card__body">
                  <p>
                  Use any Gen AI SDK from any web or mobile app. No custom SDK integration.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4 padding--sm">
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
            </div>
            <div className="col col--4 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>Analytics and limits per user</h3>
                </div>
                <div className="card__body">
                  <p>
                    Set API request limits and tracks errors per user
                  </p>
                </div>
              </div>
            </div>
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
            <p className="hero__subtitle">Backmesh is a proxy on edge CDN servers between your web or mobile app and the Gen AI APIs. Proxied requests are verified with your auth provider's JWT and checked for rate limits.</p>
          </div>
          <div className="text--center">
            <img
              alt="Two way connection"
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
            <div className="col">
              <button className="button button--primary button--lg" onClick={() => window.location.href="https://forms.gle/an5hMGFmDuQ36L7B9"}>Get early access</button>
            </div>
            <div className="col">
              <button className="button button--primary button--lg" onClick={() => window.location.href="/docs"}>Documentation</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}