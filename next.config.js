let basePath = undefined;
if (process.env.COCALC_PROJECT_ID) {
  if (process.env.BASE_PATH) {
    basePath = process.env.BASE_PATH;
  } else if (process.env.NEXT_STATIC) {
    basePath = `/${process.env.COCALC_PROJECT_ID}/raw/vertramp/out`;
  } else {
    basePath = `/${process.env.COCALC_PROJECT_ID}/port/3000`;
  }
}

const withMDX = require("@next/mdx")({
  extension: /\.md?$/,
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
  trailingSlash: true /* see https://stackoverflow.com/questions/62867105/how-to-deal-with-nextjs-exporting-files-with-html-extension-but-inlink-there */
});
