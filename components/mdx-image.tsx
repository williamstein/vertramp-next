import Image from "components/image";

export default function MDXImage(props) {
  const props2 = {};
  for (const key in props) {
    if (key == "width" || key == "height") {
      props2[key] = toNumber(props[key]);
    } else {
      props2[key] = props[key];
    }
  }

  return <Image {...props2} />;
}

function toNumber(x: string | number): number {
  if (typeof x == "number") {
    return x;
  }
  if (typeof x == "string") {
    if (x.endsWith("px")) {
      return parseFloat(x.slice(0, x.length - 2));
    }
    return parseFloat(x);
  }
  throw Error("bug");
}
