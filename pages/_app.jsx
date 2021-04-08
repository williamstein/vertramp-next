import { MDXProvider } from "@mdx-js/react";
import "styles/global.css";
import Layout from "components/layout";
import MDXImage from "components/mdx-image";
import MDXLink from "components/mdx-link";
import Video from "components/mdx-video";
import "antd/dist/antd.min.css";

const components = {
  img: MDXImage,
  iframe: Video, // so we don't have to edit all the iframe embeds for youtube, etc., and can uniformly set size at any point.
  a: MDXLink, // Amazingly this fully works, even with normal markdown syntax links!
};

function MyApp({ Component, pageProps }) {
  return (
    <Layout frontMatter={Component.frontMatter}>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}

export default MyApp;
