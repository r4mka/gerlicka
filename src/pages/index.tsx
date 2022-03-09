import Layout from 'components/Layout';
import { graphql, PageProps } from 'gatsby';
import React from 'react';

interface IndexPageProps {
  site: {
    siteMetadata: {
      siteName: string;
    };
  };
}

const Home = ({ data: { site } }: PageProps<IndexPageProps>) => (
  <Layout>
    <section>
      <h1>{site.siteMetadata.siteName}</h1>
    </section>
  </Layout>
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`;

export default Home;
