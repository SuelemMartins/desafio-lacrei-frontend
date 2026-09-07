import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const pagePath = new URL("../app/page.tsx", import.meta.url);
const pillarsPath = new URL(
  "../components/Pillars/Pillars.tsx",
  import.meta.url,
);

const pageCode = await readFile(pagePath, "utf8");
const pillarsCode = await readFile(pillarsPath, "utf8");

test("Página inicial renderiza a seção Nossos Pilares", () => {
  assert.match(pageCode, /import\s+\{\s*Pillars\s*\}/);
  assert.match(pageCode, /<Pillars\s*\/>/);
});

test("Seção de pilares possui identificador de navegação", () => {
  assert.match(pillarsCode, /id="pilares"/);
  assert.match(pillarsCode, /aria-labelledby="titulo-pilares"/);
});

test("Seção renderiza os três pilares", () => {
  assert.match(pillarsCode, />Inclusão</);
  assert.match(pillarsCode, />Acolhimento</);
  assert.match(pillarsCode, />Segurança</);
});