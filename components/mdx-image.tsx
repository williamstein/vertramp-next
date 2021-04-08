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
  if (
    props2["width"] == null &&
    props2["height"] == null &&
    props2["layout"] == null
  ) {
    return (
      <span>
        <Image {...props2} width={200} height={200} />
        <br />
        <span style={{ background: "red", color: "white", padding: "10px" }}>
          ERROR: You must explicitly set the above image's width and height
          (e.g., resize it in the editable view).
        </span>
        <br />
      </span>
    );
  }

  return (
    <div style={{ margin: "15px 0", textAlign: "center" }}>
      <Image {...props2} />
    </div>
  );
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
