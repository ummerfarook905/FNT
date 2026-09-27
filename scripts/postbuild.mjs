// GitHub Pages has no server rewrite rules, so every published path that is
// not a real file falls through to 404.html. Shipping a copy of index.html
// under that name lets React Router resolve deep links on a hard refresh.
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(process.cwd(), "dist");

copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));

console.log("dist/404.html written");