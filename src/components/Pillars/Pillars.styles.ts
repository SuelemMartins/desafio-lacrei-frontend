import styled from "styled-components";

export const PillarsSection = styled.section`
  padding: 80px 24px;
  background-color: #f3fbf8;
`;

export const PillarsContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 12px;
  color: #071d1a;
  font-size: 40px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const SectionDescription = styled.p`
  margin: 0 0 40px;
  color: #425b56;
  font-size: 18px;
  line-height: 1.6;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const PillarCard = styled.article`
  padding: 32px;
  background-color: #ffffff;
  border: 1px solid #dce9e4;
  border-radius: 24px;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 79, 60, 0.1);
  }
`;

export const IconContainer = styled.div`
  display: inline-flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
  color: #008f6b;
  background-color: #d5f7ea;
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
  color: #071d1a;
  font-size: 21px;
`;

export const CardDescription = styled.p`
  margin: 0;
  color: #425b56;
  font-size: 15px;
  line-height: 1.7;
`;