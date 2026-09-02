"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import {
  Badge,
  CheckboxLabel,
  FieldGroup,
  FormCard,
  HelperText,
  Input,
  Introduction,
  Label,
  Legend,
  Options,
  PageContainer,
  PageDescription,
  PageSection,
  PageTitle,
  SituationFieldset,
  StatusMessage,
  SubmitButton,
  TextArea,
} from "./ComplaintForm.styles";

const situacoes = [
  "Discriminação",
  "Assédio",
  "Atendimento inadequado",
  "Falta de acessibilidade",
  "Outro",
];

export function ComplaintForm() {
  const [mensagem, setMensagem] = useState("");
  const [houveErro, setHouveErro] = useState(false);

  function enviarDenuncia(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formulario = event.currentTarget;
    const dados = new FormData(formulario);
    const situacoesSelecionadas = dados.getAll("situacoes");

    if (situacoesSelecionadas.length === 0) {
      setHouveErro(true);
      setMensagem("Selecione pelo menos um tipo de situação.");
      return;
    }

    setHouveErro(false);
    setMensagem(
      "Sua denúncia foi validada nesta demonstração. Nenhuma informação foi armazenada.",
    );

    formulario.reset();
  }

  return (
    <PageSection aria-labelledby="titulo-denuncia">
      <PageContainer>
        <Introduction>
          <Badge>Ambiente seguro e confidencial</Badge>

          <PageTitle id="titulo-denuncia">Canal de denúncia</PageTitle>

          <PageDescription>
            Denuncie um comportamento inadequado. As informações preenchidas
            serão utilizadas apenas para demonstrar o funcionamento do
            formulário e não serão armazenadas.
          </PageDescription>
        </Introduction>

        <FormCard onSubmit={enviarDenuncia}>
          <SituationFieldset>
            <Legend>Tipo de situação</Legend>

            <HelperText id="ajuda-situacoes">
              Selecione uma ou mais opções.
            </HelperText>

            <Options aria-describedby="ajuda-situacoes">
              {situacoes.map((situacao) => (
                <CheckboxLabel key={situacao}>
                  <input
                    type="checkbox"
                    name="situacoes"
                    value={situacao}
                  />

                  <span>{situacao}</span>
                </CheckboxLabel>
              ))}
            </Options>
          </SituationFieldset>

          <FieldGroup>
            <Label htmlFor="nome">Nome *</Label>

            <Input
              id="nome"
              name="nome"
              type="text"
              autoComplete="name"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="email">E-mail *</Label>

            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="descricao">Descrição da ocorrência *</Label>

            <TextArea
              id="descricao"
              name="descricao"
              required
              minLength={20}
              aria-describedby="ajuda-descricao"
            />

            <HelperText id="ajuda-descricao">
              Escreva pelo menos 20 caracteres.
            </HelperText>
          </FieldGroup>

          <SubmitButton type="submit">Enviar denúncia</SubmitButton>

          {mensagem && (
            <StatusMessage
              role={houveErro ? "alert" : "status"}
              aria-live={houveErro ? "assertive" : "polite"}
            >
              {mensagem}
            </StatusMessage>
          )}
        </FormCard>
      </PageContainer>
    </PageSection>
  );
}