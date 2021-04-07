import Link from "next/link";
import css from "styles/Home.module.css";
import Image from "components/image";

export default function Layout({ children }) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Link href="/">
          <a>
            <span style={{fontSize:'64px'}}>Vert</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Image src="/images/svr-pano.jpg" width={300} height={100} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{fontSize:'64px'}}>Ramps</span>
          </a>
        </Link>

        <hr />
      </div>
      {children}

      <footer className={css.footer}>
        If you know of a ramp (public or private) that is not listed or the
        specs are wrong, email me:&nbsp;
        <a href="mailto:wstein@gmail.com">wstein@gmail.com</a>.
      </footer>
    </>
  );
}
