"use client";

import { useState } from "react";

import {
  Actions,
  EnterButton,
  EnterMenu,
  EnterMenuLink,
  EnterText,
  HeaderContainer,
  HeaderContent,
  LogoLink,
  MobileMenuButton,
  MobileNavigation,
  MobileNavigationLink,
  Navigation,
  NavigationLink,
} from "./Header.styles";

export function Header() {
  const [menuEntrarAberto, setMenuEntrarAberto] = useState(false);
  const [menuMobileAberto, setMenuMobileAberto] = useState(false);

  function alternarMenuEntrar() {
    setMenuEntrarAberto((estadoAtual) => !estadoAtual);
    setMenuMobileAberto(false);
  }

  function alternarMenuMobile() {
    setMenuMobileAberto((estadoAtual) => !estadoAtual);
    setMenuEntrarAberto(false);
  }

  function fecharMenuMobile() {
    setMenuMobileAberto(false);
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink
          href="/"
          aria-label="Ir para a página inicial da Lacrei Saúde"
        >
          Lacrei Saúde
        </LogoLink>

        <Navigation aria-label="Navegação principal">
          <NavigationLink href="/#inicio">Início</NavigationLink>
          <NavigationLink href="/#pilares">Nossos pilares</NavigationLink>
          <NavigationLink href="/#missao">Missão</NavigationLink>
          <NavigationLink href="/denuncia">Denúncia</NavigationLink>
        </Navigation>

        <Actions>
          <MobileMenuButton
            type="button"
            onClick={alternarMenuMobile}
            aria-label={
              menuMobileAberto
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
            }
            aria-expanded={menuMobileAberto}
            aria-controls="menu-mobile"
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              {menuMobileAberto ? (
                <path
                  d="M6 6 18 18M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </MobileMenuButton>

          <EnterButton
            type="button"
            onClick={alternarMenuEntrar}
            aria-label="Abrir opções de entrada"
            aria-expanded={menuEntrarAberto}
            aria-haspopup="menu"
            aria-controls="menu-entrar"
          >
            <EnterText>Entrar</EnterText>

            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8a7 7 0 0 0-14 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </EnterButton>

          {menuEntrarAberto && (
            <EnterMenu id="menu-entrar" role="menu">
              <EnterMenuLink
                href="https://paciente.lacreisaude.com.br/"
                role="menuitem"
              >
                Sou paciente
              </EnterMenuLink>

              <EnterMenuLink
                href="https://profissional.lacreisaude.com.br/"
                role="menuitem"
              >
                Sou profissional
              </EnterMenuLink>
            </EnterMenu>
          )}
        </Actions>
      </HeaderContent>

      {menuMobileAberto && (
        <MobileNavigation
          id="menu-mobile"
          aria-label="Navegação principal no celular"
        >
          <MobileNavigationLink href="/#inicio" onClick={fecharMenuMobile}>
            Início
          </MobileNavigationLink>

          <MobileNavigationLink href="/#pilares" onClick={fecharMenuMobile}>
            Nossos pilares
          </MobileNavigationLink>

          <MobileNavigationLink href="/#missao" onClick={fecharMenuMobile}>
            Missão
          </MobileNavigationLink>

          <MobileNavigationLink href="/denuncia" onClick={fecharMenuMobile}>
            Denúncia
          </MobileNavigationLink>
        </MobileNavigation>
      )}
    </HeaderContainer>
  );
}