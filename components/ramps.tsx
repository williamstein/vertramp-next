import Link from "next/link";

export default function Ramps({ ramps }) {
  const v: JSX.Element[] = [];
  for (const ramp of ramps) {
    v.push(
      <li key={ramp.url}>
        <Ramp ramp={ramp} />
      </li>
    );
  }
  return <ul>{v}</ul>;
}

interface Ramp {
  url: string;
  title: string;
  location?: string;
  status?: string;
}

function Ramp({ ramp }: { ramp: Ramp }) {
  return (
    <Link href={ramp.url}>
      <a>
        {ramp.title} ({ramp.location})
      </a>
    </Link>
  );
}
