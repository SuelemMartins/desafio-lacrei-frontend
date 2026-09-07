"use client";

import styled from "styled-components";

export const PillarsSection = styled.section`
  padding: 80px 24px;
  background-color: ${({ theme }) => theme.colors.emerald10};
`;

export const PillarsContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 12px;

  color: ${({ theme }) => theme.colors.heading};
  font-size: ${({ theme }) => theme.typography.headlineLg.fontSize};
  font-weight: ${({ theme }) => theme.typography.headlineLg.fontWeight};
  line-height: ${({ theme }) => theme.typography.headlineLg.lineHeight};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.headlineBase.fontSize};
  }
`;

export const SectionDescription = styled.p`
  margin: 0 0 40px;

  color: ${({ theme }) => theme.colors.body};
  font-size: 18px;
  line-height: 1.6;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PillarCard = styled.article`
  padding: ${({ theme }) => theme.spacing.lg};

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.emerald20};
  border-radius: 24px;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgb(1 76 55 / 10%);
  }
`;

export const IconContainer = styled.div`
  display: inline-flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.emerald20};
  border-radius: 50%;

  svg {
    width: 25px;
    height: 25px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export const CardTitle = styled.h3`
  margin: 0 0 12px;

  color: ${({ theme }) => theme.colors.heading};
  font-size: 21px;
`;

export const CardDescription = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.colors.body};
  font-size: 15px;
  line-height: 1.7;
`;