import styled from "styled-components";

export const HeroSection = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.emerald10};
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 16px;

  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 620px;
    padding: 64px 32px;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

export const Tag = styled.span`
  padding: 6px 12px;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.emerald20};
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.heading};
  font-size: 40px;
  font-weight: 700;
  line-height: 120%;

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.headlineXl.fontSize};
  }
`;

export const Description = styled.p`
  max-width: 580px;
  color: ${({ theme }) => theme.colors.body};
  font-size: 18px;
  line-height: 150%;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 480px) {
    width: auto;
    flex-direction: row;
  }
`;

export const PrimaryLink = styled.a`
  min-height: 48px;
  padding: 0 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    border-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const SecondaryLink = styled.a`
  min-height: 48px;
  padding: 0 24px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.emerald20};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  aspect-ratio: 3 / 2;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 24px;

  img {
    object-fit: cover;
  }
`;