import React, { ReactNode } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function BrowserWindow({ children, style }: {
  children: ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div className="browser-window" style={style}>
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
    <Layout description={siteConfig.tagline}>
      <div className="hero hero">
        <div className="container">
          <div className="row">
            <div className="col col--6 padding--lg">
              <h1 className="hero__title">{siteConfig.tagline}</h1>
              <p className="hero__subtitle">Securely call LLM APIs from your mobile or web app with analytics and rate limits per user. No backend or SDK needed.</p>
              {/* <p className="hero__subtitle">No SDK needed and LLM user analytics included.</p> */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '50px' }}>
                <button className="button button--primary button--lg" onClick={() => window.location.href="https://app.backmesh.com"}>Start trial</button>
                <button className="button button--primary button--lg" onClick={() => window.location.href="/docs"}>Documentation</button>
              </div>
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
          <div className="row padding--md text--center">
            <h1 style={{width: '100%'}}>How is the LLM API protected
            </h1>
          </div>
          <div className="row padding--lg">
            <div className="col col--4 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>Authenticated proxy</h3>
                </div>
                <div className="card__body">
                  <p>
                    Requests are verified with JWTs from the app's authentication provider so only your users have access to the LLM API via the Backmesh proxy.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>Rate limits per user</h3>
                </div>
                <div className="card__body padding-vert-md">
                  <p>
                    Configurable per-user rate limits to prevent abuse (e.g. no more than 5 OpenAI API calls per user per hour).
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>API resource access control</h3>
                </div>
                <div className="card__body">
                  <p>
                    Sensitive API resources like <a href="https://platform.openai.com/docs/api-reference/files">Files</a> and <a href="https://platform.openai.com/docs/api-reference/threads">Threads</a> are protected so only the users that create them can continue to access them.
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col col--4 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>LLM Analytics without packages</h3>
                </div>
                <div className="card__body">
                  <p>
                  Automatically instrument all LLM API calls to understand how it affects each user, e.g. error rates, token usage, costs, response times across models, etc
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
          <div className="row padding--md text--center" style={{ display: 'flex', justifyContent: 'center'}}>
            <h1 style={{width: '100%', marginBottom: '60px'}}>How Backmesh works</h1>
            <p className="hero__subtitle">Backmesh is a proxy deployed close to your users that sits between your web or mobile app and the LLM APIs.</p>
          </div>
          <div className="text--center">
            <img
              alt="Proxy"
              style={{width: '60%', marginTop: '20px'}}
              src={'proxy.gif'}
            />
          </div>
        </div>
      </div>
      <div className="hero hero--gradient">
        <div className="container">
          <div className="row padding--md text--center">
            <h1 style={{width: '100%', marginBottom: '60px'}}>LLM User Analytics without packages
            </h1>
            <p style={{width: '100%'}} className="hero__subtitle">All LLM API calls are instrumented so you can identify usage patterns, reduce costs and improve user satisfaction within your AI applications.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <BrowserWindow style={{width: '70%', marginTop: '20px'}}>
              <img
                alt="User LLM Analytics"
                className='shadow--tl browser-content'
                src={'analytics.png'}
              />
            </BrowserWindow>
          </div>
        </div>
      </div>
      <div className="hero padding-bottom--xl">
        <div className="container">
          <div className="row text--center">
            <h1 style={{width: '100%', paddingBottom: '60px'}}>Ready to get started?</h1>
          </div>
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="button button--primary button--lg" onClick={() => window.location.href="https://app.backmesh.com"}>Start trial</button>
            <button className="button button--primary button--lg" onClick={() => window.location.href="/docs"}>Documentation</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}