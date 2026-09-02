import styled from "styled-components";

export const MissionSection = styled.section`
  padding: 80px 24px;
  background-color: #f3fbf8;
`;

export const MissionContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 56px;
  background-color: #ffffff;
  border: 1px solid #dce9e4;
  border-radius: 28px;

  @media (max-width: 768px) {
    padding: 24px;
    grid-template-columns: 1fr;
    gap: 32px;
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

  @media (max-width: 768px) {
    min-height: 280px;
  }
`;

export const MissionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Tag = styled.span`
  margin-bottom: 16px;
  padding: 7px 14px;
  color: #007e62;
  background-color: #d5f7ea;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  color: #071d1a;
  font-size: 42px;
  line-height: 1.12;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Description = styled.p`
  margin: 0 0 32px;
  color: #425b56;
  font-size: 18px;
  line-height: 1.7;
`;

export const ReportLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 24px;
  color: #ffffff;
  background-color: #008f6b;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #006f54;
  }

  &:focus-visible {
    outline: 3px solid #65d6b4;
    outline-offset: 3px;
  }
`;