"use client";

import styled from "styled-components";

export const MissionSection = styled.section`
  padding: 80px 24px;
  background-color: ${({ theme }) => theme.colors.emerald10};
`;

export const MissionContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xxl};

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 56px;

  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.emerald20};
  border-radius: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 390px;
  overflow: hidden;
  border-radius: 24px;

  img {
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 280px;
  }
`;

export const MissionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Tag = styled.span`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding: 7px 14px;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.emerald20};
  border-radius: 999px;
  font-size: ${({ theme }) => theme.typography.textSm.fontSize};
  font-weight: 600;
`;

export const Title = styled.h2`
  margin: 0 0 20px;

  color: ${({ theme }) => theme.colors.heading};
  font-size: 42px;
  line-height: 1.12;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.headlineBase.fontSize};
    line-height: ${({ theme }) => theme.typography.headlineBase.lineHeight};
  }
`;

export const Description = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.lg};

  color: ${({ theme }) => theme.colors.body};
  font-size: 18px;
  line-height: 1.7;
`;

export const ReportLink = styled.a`
  padding: 15px ${({ theme }) => theme.spacing.md};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.emerald30};
    outline-offset: 3px;
  }
`;