module.exports = () => {
  if (!process.env.COCALC_PROJECT_ID) {
    // not in cocalc or building for production
    return undefined;
  }

  if (process.env.BASE_PATH) {
    return process.env.BASE_PATH;
  }
  if (process.env.NEXT_STATIC) {
    return `/${process.env.COCALC_PROJECT_ID}/raw/vertramp/out`;
  } else {
    return `/${process.env.COCALC_PROJECT_ID}/port/3000`;
  }
};
