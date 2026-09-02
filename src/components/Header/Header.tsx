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
  Navigation,
  NavigationLink,
} from "./Header.styles";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  function alternarMenu() {
    setMenuAberto((estadoAtual) => !estadoAtual);
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoLink href="/" aria-label="Ir para a página inicial da Lacrei Saúde">
          Lacrei Saúde
        </LogoLink>

        <Navigation aria-label="Navegação principal">
          <NavigationLink href="/">Início</NavigationLink>
          <NavigationLink href="/#pilares">Nossos pilares</NavigationLink>
          <NavigationLink href="/#missao">Missão</NavigationLink>
          <NavigationLink href="/denuncia">Denúncia</NavigationLink>
        </Navigation>

        <Actions>
          <EnterButton
            type="button"
            onClick={alternarMenu}
            aria-expanded={menuAberto}
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

          {menuAberto && (
            <EnterMenu id="menu-entrar" role="menu">
              <EnterMenuLink href="#" role="menuitem">
                Sou paciente
              </EnterMenuLink>

              <EnterMenuLink href="#" role="menuitem">
                Sou profissional
              </EnterMenuLink>
            </EnterMenu>
          )}
        </Actions>
      </HeaderContent>
    </HeaderContainer>
  );
}