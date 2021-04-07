import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";
import Layout from "components/layout";
import MDXImage from "components/mdx-image";

const components = {
  img: MDXImage,
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}

export default MyApp;
