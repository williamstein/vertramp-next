//import Image from "next/image";
import React from "react";

const basePath = process.env.basePath ?? "";

const loader = ({ src }) => {
  return basePath ? `${basePath}/${src}` : src;
};

// Version of Image that works with the basePath and the dynamic server.
function Image1(props) {
  const props2 = { loader };
  for (const key in props) {
    if (key == "src") {
      props2[key] = ensureAbsolutePath(props[key]);
    } else {
      props2[key] = props[key];
    }
  }
  return React.createElement(require("next/image").default, props2 as any);
}

// Version of Image that works with the basePath and static site generation (?).
function Image2(props) {
  const props2 = { loader };
  for (const key in props) {
    if (key == "src") {
      props2[key] = basePath + ensureAbsolutePath(props[key]);
    } else {
      props2[key] = props[key];
    }
  }
  return <img {...(props2 as any)} />;
}

export default function MyImage(props) {
  return basePath.indexOf("raw") != -1 ? Image2(props) : Image1(props);
}

function ensureAbsolutePath(s) {
  if (s.startsWith("..")) {
    // relative link
    const i = s.indexOf("/images/");
    return s.slice(i);
  }
  return s;
}
