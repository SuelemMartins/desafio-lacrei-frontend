"use client";

import {
  CardDescription,
  CardsContainer,
  CardTitle,
  IconContainer,
  PillarCard,
  PillarsContainer,
  PillarsSection,
  SectionDescription,
  SectionTitle,
} from "./Pillars.styles";

export function Pillars() {
  return (
    <PillarsSection id="pilares">
      <PillarsContainer>
        <SectionTitle>Nossos Pilares</SectionTitle>

        <SectionDescription>
          Três fundamentos que orientam cada interação digital e presencial.
        </SectionDescription>

        <CardsContainer>
          <PillarCard>
            <IconContainer aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M7 12 4.5 9.5a3.5 3.5 0 0 1 5-5L12 7l2.5-2.5a3.5 3.5 0 0 1 5 5L12 17Z" />
                <path d="m9 14 3-3 3 3" />
              </svg>
            </IconContainer>

            <CardTitle>Inclusão</CardTitle>

            <CardDescription>
              Valorizamos a diversidade e criamos experiências digitais
              pensadas para acolher todas as pessoas.
            </CardDescription>
          </PillarCard>

          <PillarCard>
            <IconContainer aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5Z" />
                <path d="m19 3 .5 2L22 6l-2.5 1L19 9l-.5-2L16 6l2.5-1Z" />
              </svg>
            </IconContainer>

            <CardTitle>Acolhimento</CardTitle>

            <CardDescription>
              Priorizamos uma comunicação humana, respeitosa e segura em cada
              etapa da jornada.
            </CardDescription>
          </PillarCard>

          <PillarCard>
            <IconContainer aria-hidden="true">
              <svg viewBox="0 0 24 24">
                <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </IconContainer>

            <CardTitle>Segurança</CardTitle>

            <CardDescription>
              Construímos interfaces claras, acessíveis e confiáveis para
              promover cuidado com responsabilidade.
            </CardDescription>
          </PillarCard>
        </CardsContainer>
      </PillarsContainer>
    </PillarsSection>
  );
}