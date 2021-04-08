import Head from "next/head";
import Link from "next/link";
import Image from "components/image";
import Ramps from "components/ramps";
import A from "components/mdx-link"

export default function Home({ ramps }) {
  return (
    <div>
      <Head>
        <title>Ramps</title>
        <link rel="icon" href={`${process.env.basePath}/favicon.ico`} />
      </Head>

      <main>
        <div style={{ marginBottom: "30px" }}>
          <Link href="/ramps/svr/">
            <Image src="/images/svr-pano-small.jpg" width={450} height={150} />
          </Link>
          <Link href="/ramps/houston/">
            <Image src="/images/houston-small.png" width={307} height={150} />
          </Link>
        </div>
        <Ramps ramps={ramps} />
        <h2>Articles</h2>
        <ul>
          <li>
            <A
              href="https://www.thrashermagazine.com/articles/jeff-grosso-on-vert-ramps/"
              target="_blank"
            >
              Jeff Grosso: On Vert Ramps, Thrasher magazine
            </A>
          </li>
          <li>
            <A
              href="https://juicemagazine.com/home/this-beautiful-frenzied-madness-skating-at-fifty"
              target="_blank"
            >
              The Philosopher Colin Ruloff writes about skating vert at
              age 50
            </A>
          </li>
        </ul>
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
    if (a.status == "active" && b.status != "active") {
      return -1;
    }
    if (a.status != "active" && b.status == "active") {
      return 1;
    }
    const x = a.priority ?? 999999,
      y = b.priority ?? 9999999;
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
  });
  return { props: { ramps } };
}
