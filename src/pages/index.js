import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import Layout from 'components/layout';
import Head from 'next/head';
import { Hero, Testimonials, Team, WorkFlow, Services, WhyUs } from 'sections';

export default function Home({ meta }) {
  const metaData = [
    {
      name: `description`,
      content: `description`,
    },
    {
      property: `og:title`,
      content: `Techvestors`,
    },
    {
      property: `og:description`,
      content: `description`,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
  ].concat(meta);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <Head>
            <title>Techvestors</title>
            {metaData.map(({ name, content }, i) => (
              <meta key={i} name={name} content={content} />
            ))}
          </Head>
          <Hero />
          <Services />
          <WhyUs />
          <Team />
          <Testimonials />
          <WorkFlow />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}

Home.defaultProps = {
  lang: `en`,
  meta: [],
};
