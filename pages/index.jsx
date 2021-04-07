import Head from "next/head";
import Link from "next/link";
import css from "styles/Home.module.css";
import Image from "components/image";
import Ramps from "components/ramps";

export default function Home({ ramps }) {
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

        <Ramps ramps={ramps} />
      </main>

      <footer className={css.footer}>
        If you know of a ramp (public or private) that is not listed or the
        specs are wrong, email me:&nbsp;
        <a href="mailto:wstein@gmail.com">wstein@gmail.com</a>.
      </footer>
    </div>
  );
}

import { promises as fs } from "fs";
import path from "path";
export async function getStaticProps(context) {
  const dir = path.join(process.cwd(), "pages/ramps");
  const filenames = await fs.readdir(dir);
  const ramps = [];
  for (const filename of filenames) {
    const { frontMatter } = await import("pages/ramps/" + filename);
    const base = filename.split(".").slice(0, -1).join(".");
    const url = "ramps/" + base;
    ramps.push({ ...(frontMatter ?? { title: base }), url });
  }
  ramps.sort((a, b) => {
    const x = a.priority ?? 999999,
      y = b.priority ?? 9999999;
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });
  return { props: { ramps } };
}
