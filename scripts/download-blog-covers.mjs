/**
 * Descarga las portadas del blog y las deja en public/blog/<slug>.webp.
 *
 * Las fuentes estan en scripts/blog-covers.json: fotos CC0 1.0 (dominio publico)
 * encontradas via la API de Openverse, restringida a stock curado (StockSnap y
 * rawpixel). CC0 no exige atribucion; el JSON guarda la procedencia igual.
 *
 * Las imagenes ya estan versionadas. Este script solo hace falta para agregar
 * una portada nueva o regenerar todas con otro tamano/calidad.
 *
 * Uso: node scripts/download-blog-covers.mjs
 *
 * `sharp` llega como dependencia de next; no esta declarado en package.json.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "blog");

// 3:2. Las fuentes vienen a 960px de ancho, asi que este es el techo real.
const WIDTH = 960;
const HEIGHT = 640;
const QUALITY = 78;

// Los CDN de origen rechazan pedidos sin User-Agent.
const HEADERS = { "User-Agent": "DrivaDev/1.0 (+https://drivadev.com.ar)" };

let sharp;
try {
  ({ default: sharp } = await import("sharp"));
} catch {
  console.error("Falta sharp. Se instala junto con next: npm install");
  process.exit(1);
}

const { covers } = JSON.parse(await readFile(path.join(ROOT, "scripts", "blog-covers.json"), "utf8"));

await mkdir(OUT_DIR, { recursive: true });

let fallidas = 0;
for (const [slug, cover] of Object.entries(covers)) {
  try {
    const res = await fetch(cover.url, { headers: HEADERS, redirect: "follow" });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const webp = await sharp(Buffer.from(await res.arrayBuffer()))
      .resize(WIDTH, HEIGHT, { fit: "cover", position: "attention" })
      .webp({ quality: QUALITY })
      .toBuffer();

    await writeFile(path.join(OUT_DIR, `${slug}.webp`), webp);
    console.log(`${slug}.webp  ${(webp.length / 1024).toFixed(0)} KB`);
  } catch (err) {
    fallidas++;
    console.error(`${slug}: ${err.message}`);
  }
}

if (fallidas) {
  console.error(`\n${fallidas} portada(s) fallaron.`);
  process.exit(1);
}
