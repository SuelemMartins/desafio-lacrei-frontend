"use client";

import {
  Brand,
  BrandColumn,
  BrandDescription,
  ColumnTitle,
  Copyright,
  FooterBottom,
  FooterColumn,
  FooterColumns,
  FooterContainer,
  FooterContent,
  FooterLink,
  LogoCircle,
  SocialLink,
  SocialLinks,
  WarningText,
} from "./Footer.styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumns>
          <BrandColumn>
            <Brand href="/">
              <LogoCircle aria-hidden="true">♡</LogoCircle>
              Lacrei Saúde
            </Brand>

            <BrandDescription>
              Cuidando com inclusão e respeito para todas as pessoas,
              preservando saúde e bem-estar.
            </BrandDescription>

            <SocialLinks aria-label="Redes sociais da Lacrei Saúde">
              <SocialLink
                href="https://www.facebook.com/lacrei.saude/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook da Lacrei Saúde"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.6.4-1 1-1Z" />
                </svg>
              </SocialLink>

              <SocialLink
                href="https://www.instagram.com/lacreisaude/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Lacrei Saúde"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/company/lacreisaude/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn da Lacrei Saúde"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 0 1 6 0v4" />
                </svg>
              </SocialLink>

              <SocialLink
                href="mailto:acessibilidade@lacreisaude.com.br"
                aria-label="Enviar e-mail para a Lacrei Saúde"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </SocialLink>
            </SocialLinks>
          </BrandColumn>

          <FooterColumn>
            <ColumnTitle>Lacrei Saúde</ColumnTitle>

            <FooterLink href="/#inicio">Quem Somos</FooterLink>

            <FooterLink href="/#pilares">
              Nosso Propósito
            </FooterLink>

            <FooterLink href="/#missao">
              Missão, Visão e Valores
            </FooterLink>

            <FooterLink href="https://lacreisaude.com.br/acessibilidade/">
              Acessibilidade
            </FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Saúde</ColumnTitle>

            <FooterLink href="https://paciente.lacreisaude.com.br/">
              Buscar atendimento
            </FooterLink>

            <FooterLink href="https://profissional.lacreisaude.com.br/">
              Oferecer atendimento
            </FooterLink>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>Segurança e Privacidade</ColumnTitle>

            <FooterLink href="https://lacreisaude.com.br/politica-de-privacidade/">
              Política de Privacidade
            </FooterLink>

            <FooterLink href="https://lacreisaude.com.br/termos-de-uso/">
              Termos de Uso
            </FooterLink>

            <FooterLink href="https://lacreisaude.com.br/direitos-de-titular/">
              Direitos de Titular
            </FooterLink>
          </FooterColumn>
        </FooterColumns>

        <FooterBottom>
          <WarningText>
            A Lacrei Saúde não oferece tratamento médico emergencial. Em caso
            de emergência, procure o hospital mais próximo.
          </WarningText>

          <WarningText>
            Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o
            site www.cvv.org.br.
          </WarningText>

          <Copyright>
            © 2026 Lacrei Saúde. Todos os direitos reservados.
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
}