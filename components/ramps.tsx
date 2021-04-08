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
  return (
    <div>
      <h2>Ramps</h2>
      <ul>{v}</ul>
    </div>
  );
}

export interface Ramp {
  url?: string;
  title: string;
  location?: string;
  status?: string;
  type?: string;
  submitted?: string;
}

function Ramp({ ramp }: { ramp: Ramp }) {
  if (ramp.url == null) return <RampSummary ramp={ramp} />;
  return (
    <Link href={ramp.url}>
      <a>
        <RampSummary ramp={ramp} long={false} />
      </a>
    </Link>
  );
}

export function RampSummary({ ramp, long }: { ramp: Ramp; long?: boolean }) {
  return (
    <span>
      {ramp.title} - {ramp.location}
      {ramp.type == "public"
        ? " - Public"
        : ramp.type == "private"
        ? " - Private"
        : ""}{" "}
      <span>
        {" "}
        - <Status ramp={ramp} long={long} />
      </span>
      {long && ramp.submitted ? ` - submitted by ${ramp.submitted}` : undefined}
    </span>
  );
}

export function Status({ ramp, long }: { ramp: Ramp; long?: boolean }) {
  let x;
  if (ramp.status == "opened" || ramp.status == "active") {
    x = <b>Opened</b>;
  } else if (ramp.status == "closed") {
    x = <span>Closed</span>;
  } else {
    x = <span>Unknown</span>;
  }
  if (!long) return x;
  return <span>Status: {x}</span>;
}
