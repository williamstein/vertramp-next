import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";
import Layout from "components/layout";
import MDXImage from "components/mdx-image";
import MDXLink from "components/mdx-link";

const components = {
  img: MDXImage,
  a:MDXLink,  // Amazingly this fully works, even with normal markdown syntax links!
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
