import React, { useState } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function decodeJwt(token: string) {
  try {
    const [headerB64, payloadB64] = token.split('.');
    const header = JSON.parse(atob(headerB64));
    const payload = JSON.parse(atob(payloadB64));
    // Extract custom claims if they exist
    const customClaims = Object.entries(payload).reduce((acc, [key, value]) => {
      // Skip standard JWT claims
      if (!['iss', 'aud', 'auth_time', 'user_id', 'sub', 'iat', 'exp', 'email', 'email_verified'].includes(key)) {
        acc[key] = value;
      }
      return acc;
    }, {});
    return { header, payload, customClaims };
  } catch (e) {
    return null;
  }
}

export default function FirebaseJWT() {
  const { siteConfig } = useDocusaurusContext();
  const [apiKey, setApiKey] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [jwt, setJwt] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const generateJWT = async () => {
    setLoading(true);
    setError('');
    setJwt('');

    try {
      const response = await fetch(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
            returnSecureToken: true,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        setError(data.error.message);
      } else {
        setJwt(data.idToken);
      }
    } catch (err) {
      setError('Failed to generate JWT: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      title="Firebase JWT Generator"
      description="Generate Firebase JWT tokens for testing"
    >
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <h1>Firebase JWT Generator</h1>
            <div className="margin-bottom--md">
              <label className="margin-bottom--sm">Firebase API Key:</label>
              <input
                type="text"
                className="input"
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter Firebase API Key"
              />
            </div>
            <div className="margin-bottom--md">
              <label className="margin-bottom--sm">Email:</label>
              <input
                type="email"
                className="input"
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>
            <div className="margin-bottom--md">
              <label className="margin-bottom--sm">Password:</label>
              <input
                type="password"
                className="input"
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '16px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <button
              className="button button--primary button--lg"
              onClick={generateJWT}
              disabled={loading || !apiKey || !email || !password}
            >
              {loading ? 'Generating...' : 'Generate JWT'}
            </button>

            {error && (
              <div
                style={{
                  marginTop: '16px',
                  padding: '12px',
                  backgroundColor: '#ffebee',
                  color: '#c62828',
                  borderRadius: '4px',
                }}
              >
                {error}
              </div>
            )}

            {jwt && (
              <div className="margin-top--md">
                <h3>Generated JWT:</h3>
                <div className="row">
                  <div className="col col--6">
                    <div
                      style={{
                        padding: '12px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '4px',
                        wordBreak: 'break-all',
                      }}
                    >
                      {jwt}
                    </div>
                  </div>
                  <div className="col col--6">
                    <div
                      style={{
                        padding: '12px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '4px',
                        fontFamily: 'monospace',
                      }}
                    >
                      {decodeJwt(jwt) && (
                        <>
                          <h4>Header:</h4>
                          <pre style={{ margin: 0 }}>
                            {JSON.stringify(decodeJwt(jwt)?.header, null, 2)}
                          </pre>
                          <h4 style={{ marginTop: '16px' }}>Payload:</h4>
                          <pre style={{ margin: 0 }}>
                            {JSON.stringify(decodeJwt(jwt)?.payload, null, 2)}
                          </pre>
                          {Object.keys(decodeJwt(jwt)?.customClaims || {}).length > 0 && (
                            <>
                              <h4 style={{ marginTop: '16px' }}>Custom Claims:</h4>
                              <pre style={{ margin: 0 }}>
                                {JSON.stringify(decodeJwt(jwt)?.customClaims, null, 2)}
                              </pre>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
