import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 90px 24px 24px;
  background-color: #ffffff;
  border-top: 1px solid #dce9e4;
`;

export const FooterContent = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`;

export const FooterColumns = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 48px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const BrandColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Brand = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
  color: #071d1a;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
`;

export const LogoCircle = styled.span`
  display: inline-flex;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #008f6b;
  border-radius: 50%;
  font-size: 18px;
`;

export const BrandDescription = styled.p`
  max-width: 240px;
  margin: 0 0 22px;
  color: #425b56;
  font-size: 15px;
  line-height: 1.6;
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-top: 6px;
`;

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #008f6b;
  text-decoration: none;
  transition: color 0.2s ease;

  svg {
    width: 21px;
    height: 21px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  &:hover {
    color: #006f54;
  }

  &:focus-visible {
    outline: 3px solid #65d6b4;
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ColumnTitle = styled.h3`
  margin: 0 0 18px;
  color: #071d1a;
  font-size: 16px;
  font-weight: 700;
`;

export const FooterLink = styled.a`
  margin-bottom: 14px;
  color: #425b56;
  font-size: 15px;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #008f6b;
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 3px solid #65d6b4;
    outline-offset: 3px;
  }
`;

export const FooterBottom = styled.div`
  padding-top: 24px;
  border-top: 1px solid #dce9e4;
`;

export const WarningText = styled.p`
  margin: 0 0 10px;
  color: #425b56;
  font-size: 13px;
  line-height: 1.6;
`;

export const Copyright = styled.p`
  margin: 20px 0 0;
  color: #425b56;
  font-size: 13px;
`;