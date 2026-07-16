import { copyFileSync, existsSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { basename, join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const entries = ["site-data.js", "作品集", "精选案例", "视频", "底图"];

function copyRecursive(from, to) {
  const stat = statSync(from);
  if (stat.isDirectory()) {
    mkdirSync(to, { recursive: true });
    for (const name of readdirSync(from)) {
      copyRecursive(join(from, name), join(to, name));
    }
    return;
  }
  mkdirSync(join(to, ".."), { recursive: true });
  copyFileSync(from, to);
}

mkdirSync(dist, { recursive: true });
for (const entry of entries) {
  const from = join(root, entry);
  if (!existsSync(from)) continue;
  copyRecursive(from, join(dist, basename(entry)));
}