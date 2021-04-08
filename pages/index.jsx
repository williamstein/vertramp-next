import Head from "next/head";
import Link from "next/link";
import Image from "components/image";
import Ramps from "components/ramps";

export default function Home({ ramps }) {
  return (
    <div>
      <Head>
        <title>Vert Ramps</title>
        <link rel="icon" href={`${process.env.basePath}/favicon.ico`} />
      </Head>

      <main>
        <div style={{ marginBottom: "30px" }}>
          <Image src="/images/svr-pano-small.jpg" width={450} height={150} />
        </div>
        <Ramps ramps={ramps} />
      </main>
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
    if (!(await fs.stat(dir + "/" + filename)).isFile()) continue;
    const { frontMatter } = await import("pages/ramps/" + filename);
    const base = filename.split(".").slice(0, -1).join(".");
    const url = "/ramps/" + base;
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
