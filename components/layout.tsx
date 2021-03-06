import Link from "next/link";
import { RampSummary } from "./ramps";

export default function Layout({ children, frontMatter }) {
  return (
    <>
      <div
        style={{
          background: "#efefef",
          padding: "0 30px",
          marginBottom: "30px",
          borderBottom: "1px solid lightgrey",
        }}
      >
        <Link href="/">
          <a>
            <span style={{ fontSize: "32px" }}>Vert Ramps</span>
          </a>
        </Link>
        <h4 style={{ float: "right", marginTop: "15px", color:"#666" }}>
          {frontMatter && <RampSummary ramp={frontMatter} long={true} />}
        </h4>
      </div>

      <div
        style={{
          color: "#555",
          margin: "0 auto",
          maxWidth: "900px",
          fontSize: "11pt",
          padding: "0 15px",
        }}
      >
        {children}
      </div>

      <footer
        style={{
          borderTop: "1px solid lightgrey",
          padding: "30px",
          marginTop: "50px",
          background: "#efefef",
          fontSize: "12pt",
          textAlign: "center",
        }}
      >
        <div>
          If you know of a vert ramp that is not listed or something needs
          updating, please email me!
          <br />
          <a href="mailto:wstein@gmail.com">
            William Stein -- wstein@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
}
