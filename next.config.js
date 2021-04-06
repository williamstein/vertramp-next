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

module.exports = {
  basePath,
  env: {
    basePath,
  },
  future: {
    webpack5: true,
  },
  pageExtensions: ["jsx", "js", "ts", "tsx"],
};
