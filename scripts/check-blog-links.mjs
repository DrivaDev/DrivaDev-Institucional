/**
 * Un artículo solo puede enlazar a otro publicado ANTES que él.
 *
 * Enlazar hacia adelante rompe el sitio: mientras el destino no llega a su
 * lunes, la URL devuelve 404. Y aunque ya esté publicado, un artículo viejo
 * que remite a uno nuevo se lee mal.
 *
 * Corre en `prebuild`, así que un enlace hacia adelante rompe el build antes
 * de llegar a producción.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const DIR = "src/content/blog/posts";

const posts = new Map();
for (const file of readdirSync(DIR)) {
  const source = readFileSync(join(DIR, file), "utf8");
  const slug = source.match(/slug:\s*"([^"]+)"/)?.[1];
  const publishedAt = source.match(/publishedAt:\s*"([^"]+)"/)?.[1];

  if (!slug || !publishedAt) {
    console.error(`[blog] ${file} no declara slug o publishedAt.`);
    process.exit(1);
  }
  posts.set(slug, { publishedAt, file, source });
}

const errors = [];

for (const [slug, { publishedAt, file, source }] of posts) {
  const targets = new Set(
    [...source.matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((m) => m[1])
  );

  for (const target of targets) {
    if (target === slug) {
      errors.push(`${file}: se enlaza a sí mismo.`);
      continue;
    }

    const found = posts.get(target);
    if (!found) {
      errors.push(`${file}: enlaza a "/blog/${target}", que no existe.`);
      continue;
    }

    if (found.publishedAt >= publishedAt) {
      errors.push(
        `${file} (${publishedAt}) enlaza hacia adelante a "${target}" (${found.publishedAt}).`
      );
    }
  }
}

if (errors.length > 0) {
  console.error("\n[blog] Enlaces internos invalidos:\n");
  for (const error of errors) console.error(`  ${error}`);
  console.error(
    `\n${errors.length} problema(s). Un articulo solo puede enlazar a otro anterior.\n`
  );
  process.exit(1);
}

console.log(`[blog] ${posts.size} articulos, enlaces internos correctos.`);
