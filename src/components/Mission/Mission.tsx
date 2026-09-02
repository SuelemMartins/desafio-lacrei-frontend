"use client";

import Image from "next/image";

import {
  Description,
  ImageWrapper,
  MissionContainer,
  MissionContent,
  MissionSection,
  ReportLink,
  Tag,
  Title,
} from "./Mission.styles";

export function Mission() {
  return (
    <MissionSection id="missao">
      <MissionContainer>
        <ImageWrapper>
          <Image
            src="/images/img.png"
            alt="Pessoas e profissionais de saúde em um ambiente inclusivo e acolhedor"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ImageWrapper>
        <MissionContent>
          <Tag>Nossa Missão</Tag>

          <Title>Tecnologia humana, sensível e acessível.</Title>

          <Description>
            Na Lacrei Saúde, nossa missão é construir experiências inclusivas
            que valorizem diversidade, acolhimento e acesso facilitado à saúde.
            Trabalhamos para que cada pessoa se sinta segura, respeitada e capaz
            de encontrar apoio em uma tecnologia humana e sensível.
          </Description>

          <ReportLink href="/denuncia">
            Acessar canal de denúncia
          </ReportLink>
        </MissionContent>
      </MissionContainer>
    </MissionSection>
  );
}
