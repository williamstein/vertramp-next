import { promises as fs } from "fs";
import path from "path";
import { Ramp } from "components/ramps";

export default async function getRamps(): Promise<Ramp[]> {
  const dir = path.join(process.cwd(), "pages/ramps");
  const filenames = await fs.readdir(dir);
  const ramps = [];
  for (const filename of filenames) {
    if (!filename.endsWith(".md")) continue;
    if (filename[0] == ".") continue;
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
    if (a.status == "active" && b.status != "active") {
      return -1;
    }
    if (a.status != "active" && b.status == "active") {
      return 1;
    }
    return 0;
  });
  return ramps;
}
