import Head from "next/head";
import Link from "next/link";
import Image from "components/image";
import Ramps from "components/ramps";
import A from "components/mdx-link";

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
            <a>
              <Image
                src="/images/svr-pano-small.jpg"
                width={450}
                height={150}
              />
            </a>
          </Link>
          <Link href="/ramps/houston/">
            <a>
              {" "}
              <Image src="/images/houston-small.png" width={307} height={150} />
            </a>
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
              The Philosopher Colin Ruloff writes about skating vert at age 50
            </A>
          </li>
        </ul>
      </main>
    </div>
  );
}

import getRamps from "lib/get-ramps";

export async function getStaticProps(context) {
  const ramps = await getRamps();
  return { props: { ramps } };
}
