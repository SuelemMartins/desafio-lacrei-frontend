"use client";

import Image from "next/image";

import {
  Buttons,
  Description,
  HeroContent,
  HeroSection,
  HeroText,
  ImageWrapper,
  PrimaryLink,
  SecondaryLink,
  Tag,
  Title,
} from "./Hero.styles";

export function Hero() {
  return (
    <HeroSection id="inicio" aria-labelledby="titulo-principal">
      <HeroContent>
        <HeroText>
          <Tag>Inclusão • Respeito • Cuidado</Tag>

          <Title id="titulo-principal">
            Saúde que acolhe, <strong>tecnologia</strong> que conecta.
          </Title>

          <Description>
            Promovemos experiências de cuidado seguras, inclusivas e
            acolhedoras para toda a comunidade LGBTQIAPN+.
          </Description>

          <Buttons>
            <PrimaryLink href="pilares">
              Conhecer nossos pilares
            </PrimaryLink>

            <SecondaryLink href="/denuncia">
              Fazer denúncia
            </SecondaryLink>
          </Buttons>
        </HeroText>

        <ImageWrapper>
          <Image
            src="/images/image.png"
            alt="Pessoa abraçando uma bandeira LGBTQIAPN+"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ImageWrapper>
      </HeroContent>
    </HeroSection>
  );
}