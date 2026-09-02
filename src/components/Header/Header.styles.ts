import styled from "styled-components";

export const HeaderContainer = styled.header`
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
  gap: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 12px 32px;
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryPressed};
  }
`;

export const EnterText = styled.span`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: inline;
  }
`;
export const Actions = styled.div`
  position: relative;
`;

export const EnterMenu = styled.div`
  position: absolute;
  top: 56px;
  right: 0;
  z-index: 10;

  width: 180px;
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
`;