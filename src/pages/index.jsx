import * as React from "react";
import SEOComponent from "../components/SEOComponent";
import Layout from "../components/Layout";
import Section1 from "../components/Home/Section1";
import Headline from "../components/Home/Headline";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Headline />
        <Section1 />
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => {
  return <SEOComponent />;
};
