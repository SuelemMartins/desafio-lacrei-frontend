import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const headerPath = new URL(
  "../components/Header/Header.tsx",
  import.meta.url,
);

const headerCode = await readFile(headerPath, "utf8");

test("Header possui os links principais", () => {
  assert.match(headerCode, /href="\/#inicio"/);
  assert.match(headerCode, /href="\/#pilares"/);
  assert.match(headerCode, /href="\/#missao"/);
  assert.match(headerCode, /href="\/denuncia"/);
});

test("Header possui menu de navegação mobile", () => {
  assert.match(headerCode, /menuMobileAberto/);
  assert.match(headerCode, /alternarMenuMobile/);
  assert.match(headerCode, /Navegação principal no celular/);
});

test("Header possui opções de entrada com destinos reais", () => {
  assert.match(headerCode, /https:\/\/paciente\.lacreisaude\.com\.br\//);
  assert.match(headerCode, /https:\/\/profissional\.lacreisaude\.com\.br\//);
  assert.doesNotMatch(headerCode, /href="#"/);
});