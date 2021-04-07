import Link from "next/link";
import css from "styles/Home.module.css";
import Image from "components/image";

export default function Layout({ children }) {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          padding: "0 30px",
          borderBottom: "1px solid grey",
        }}
      >
        <Link href="/">
          <a>
            <span style={{ fontSize: "64px" }}>Vert</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src="/images/svr-pano.jpg" width={300} height={100} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ fontSize: "64px" }}>Ramps</span>
          </a>
        </Link>
      </div>

      <div style={{ color: "#555" }}>{children}</div>

      <footer className={css.footer}>
        <div>
          If you know of a vert ramp that is not listed or something needs updating,
          please email me!
          <a href="mailto:wstein@gmail.com">William Stein -- wstein@gmail.com</a>
        </div>
      </footer>
    </>
  );
}
