import Head from "next/head";
import Link from "next/link";
import css from "styles/Home.module.css";
import Image from "components/image";

export default function Home() {
  return (
    <div className={css.container}>
      <Head>
        <title>Vert Ramps</title>
        <link rel="icon" href={`${process.env.basePath}/favicon.ico`} />
      </Head>

      <main className={css.main}>
        <div style={{ marginBottom: "15px" }}>
          <Image src="/images/svr-pano.jpg" width={750} height={250} />
        </div>
        <h1 className={css.title}>Vert Ramps</h1>

        <Link href="/ramps/svr">
          <a>Seattle Vert Ramp</a>
        </Link>
      </main>

      <footer className={css.footer}>
        If you know of a ramp (public or private) that is not listed or the
        specs are wrong, email me:&nbsp;
        <a href="mailto:wstein@gmail.com">wstein@gmail.com</a>.
      </footer>
    </div>
  );
}
