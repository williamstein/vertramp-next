const basePath = require("./lib/basePath")();

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("./lib/mdx-frontmatter")],
  },
});

module.exports = withMDX({
  basePath,
  env: {
    basePath,
  },
  future: {
    webpack5: true,
  },
  pageExtensions: ["md", "mdx", "jsx", "js", "ts", "tsx"],
  trailingSlash: true, // critical to support static export!
});

/*
NOTES:

- See https://stackoverflow.com/questions/62867105/how-to-deal-with-nextjs-exporting-files-with-html-extension-but-inlink-there
  for more about why the tailing slate is critical for us!


*/
