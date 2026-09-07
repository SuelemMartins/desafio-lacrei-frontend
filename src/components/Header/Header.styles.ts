import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  z-index: 20;

  width: 100%;
  min-height: 72px;

  background-color: ${({ theme }) => theme.colors.emerald10};
  border-bottom: 1px solid ${({ theme }) => theme.colors.emerald20};
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 72px;
  margin: 0 auto;
  padding: 12px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 12px 32px;
    gap: 24px;
  }
`;

export const LogoLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
`;

export const Navigation = styled.nav`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 24px;
  }
`;

export const NavigationLink = styled.a`
  min-height: 48px;
  padding: 0 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald20};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const Actions = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MobileMenuButton = styled.button`
  width: 48px;
  min-height: 48px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald20};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileNavigation = styled.nav`
  width: 100%;
  padding: 8px 16px 16px;

  display: flex;
  flex-direction: column;
  gap: 4px;

  background-color: ${({ theme }) => theme.colors.emerald10};
  border-top: 1px solid ${({ theme }) => theme.colors.emerald20};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

export const MobileNavigationLink = styled.a`
  width: 100%;
  min-height: 48px;
  padding: 0 16px;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald20};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const EnterButton = styled.button`
  min-width: 48px;
  min-height: 48px;
  padding: 0 16px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryPressed};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const EnterText = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: inline;
  }
`;

export const EnterMenu = styled.div`
  position: absolute;
  top: 56px;
  right: 0;
  z-index: 30;

  width: 190px;
  padding: 8px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.emerald20};
  border-radius: 8px;
  box-shadow: 0 8px 24px rgb(1 76 55 / 12%);
`;

export const EnterMenuLink = styled.a`
  min-height: 48px;
  padding: 0 16px;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.body};
  border-radius: 8px;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.emerald10};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;