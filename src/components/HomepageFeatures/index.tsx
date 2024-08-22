import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  // {
  //   title: 'Proxy with CORS and SSE support',
  //   description: (
  //     <>
  //       Proxied requests support server side events and cross-origin resource sharing out of the box
  //     </>
  //   ),
  // },
  {
    title: 'Easy integration with no restrictions',
    description: (
      <>
        Proxy OpenAI, Anthropic and Gemini API requests through Backmesh from any web or mobile app. No custom SDK integration.
      </>
    ),
  },
  {
    title: 'Secure proxy authentication and secret storage',
    description: (
      <>
        Proxied requests are verified using your authentication provider's JWT and private API keys are securely encrypted
      </>
    ),
  },
  {
    title: 'Configurable access control',
    description: (
      <>
        API proxy request limits can be set per user over different time windows so you can safely call the AI API 
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p style={{ padding: '10px' }}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
