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
      <div className="hero">
        <div className="container">
          <div className="row padding--md text--center" style={{ display: 'flex', justifyContent: 'center'}}>
              <h1 className="hero__title">{siteConfig.tagline}</h1>
              <p className="hero__subtitle">Hide API keys in your app and avoid <a href="https://thehackernews.com/2023/06/over-100000-stolen-chatgpt-account.html">leaks</a> that lead to thousands of dollars in API bills 💸🚨</p>
            </div>
            <div className="row">
              <div className="col col--6 padding--lg">
                <BrowserWindow>
                  <img
                    alt="Backmesh Code Sample"
                    className='shadow--tl browser-content'
                    src={'bad.jpg'}
                  />
                </BrowserWindow>
              </div>
              <div className="col col--6 padding--lg">
                <BrowserWindow>
                  <img
                    alt="Backmesh Code Sample"
                    className='shadow--tl browser-content'
                    src={'good.jpg'}
                  />
                </BrowserWindow>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
                <button className="button button--primary button--lg" onClick={() => window.location.href="https://backmesh.com/app"}>Start trial</button>
                <button className="button button--primary button--lg" onClick={() => window.location.href="/docs"}>Documentation</button>
              </div>
        </div>
      </div>
      <div className="hero hero--gradient">
        <div className="container">
          <div className="row padding--md text--center">
            <h1 style={{width: '100%'}}>Use an open-source, battle-tested backend to protect your API key
            </h1>
          </div>
          <div className="row padding--lg">
            <div className="col col--4 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>🛡️</h3>
                  <h3>JWT Authentication</h3>
                </div>
                <div className="card__body">
                  <p>
                    Requests are verified with JWTs from the app's authentication provider so only your users have access to the API via Backmesh.
                  </p>
                </div>
              </div>
            </div>
            <div className="col col--4 padding--sm">
              <div className="card">
                <div className="card__header">
                  <h3>🚧</h3>
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
                  <h3>🔐</h3>
                  <h3>LLM API resource access control</h3>
                </div>
                <div className="card__body">
                  <p>
                    Sensitive LLM API resources like <a href="https://platform.openai.com/docs/api-reference/files">Files</a> and <a href="https://platform.openai.com/docs/api-reference/threads">Threads</a> are protected so only the users that create them can continue to access them.
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
            <h1 style={{width: '100%', marginBottom: '60px'}}>What is Backmesh</h1>
            <p className="hero__subtitle">Backmesh is an open-source, thoroughly tested backend that uses military grade encryption to protect your API key and offer an API Gatekeeper to let your app safely call the API</p>
          </div>
          <div className="text--center">
            <img
              alt="Overview"
              style={{width: '60%', marginTop: '20px'}}
              src={'overview.gif'}
            />
          </div>
        </div>
      </div>
      <div className="hero hero--gradient">
        <div className="container">
          <div className="row padding--md text--center">
            <h1 style={{width: '100%', marginBottom: '60px'}}>API usage per user without packages
            </h1>
            <p style={{width: '100%'}} className="hero__subtitle">All API calls are instrumented so you can identify usage patterns, reduce costs and improve user satisfaction within your app.</p>
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
            <button className="button button--primary button--lg" onClick={() => window.location.href="https://backmesh.com/app"}>Start trial</button>
            <button className="button button--primary button--lg" onClick={() => window.location.href="/docs"}>Documentation</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}