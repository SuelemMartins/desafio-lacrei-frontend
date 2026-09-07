import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const formPath = new URL(
  "../components/ComplaintForm/ComplaintForm.tsx",
  import.meta.url,
);

const formCode = await readFile(formPath, "utf8");

test("Formulário possui os campos obrigatórios", () => {
  assert.match(formCode, /Nome\s*\*/);
  assert.match(formCode, /E-mail\s*\*/);
  assert.match(formCode, /Descrição da ocorrência\s*\*/);
});

test("Formulário possui opções de tipo de situação", () => {
  assert.match(formCode, /Discriminação/);
  assert.match(formCode, /Assédio/);
  assert.match(formCode, /Atendimento inadequado/);
});

test("Formulário possui ação de envio e mensagem de retorno", () => {
  assert.match(formCode, /onSubmit=/);
  assert.match(formCode, /Enviar denúncia/);
  assert.match(formCode, /StatusMessage/);
});