import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p style={{ paddingTop: '30px' }}className="hero__subtitle">{siteConfig.tagline}</p>

      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Securely call private key APIs from Flutter without a backend">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="https://forms.gle/an5hMGFmDuQ36L7B9">
            Get early access
          </Link>
        </div>
    </Layout>
  );
}
