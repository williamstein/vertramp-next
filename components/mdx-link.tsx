import Link from "next/link";

export default function MDXLink(props) {
  if (props["href"]?.startsWith("/")) {
    return <Link {...props} />;
  } else {
    return <a {...props} target={"_blank"} rel={"noopener"} />;
  }
}
