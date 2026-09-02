import styled from "styled-components";

export const PageSection = styled.section`
  min-height: calc(100vh - 72px);
  padding: 48px 16px;
  background-color: ${({ theme }) => theme.colors.emerald10};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 32px;
  }
`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

export const Introduction = styled.div`
  margin-bottom: 32px;
  text-align: center;
`;

export const Badge = styled.span`
  display: inline-block;
  margin-bottom: 16px;
  padding: 6px 12px;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.emerald20};
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
`;

export const PageTitle = styled.h1`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 36px;
  line-height: 120%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.typography.headlineXl.fontSize};
  }
`;

export const PageDescription = styled.p`
  max-width: 680px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.body};
  font-size: 16px;
  line-height: 150%;
`;

export const FormCard = styled.form`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.emerald20};
  border-radius: 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px;
  }
`;

export const SituationFieldset = styled.fieldset`
  margin: 0 0 32px;
  padding: 0;
  border: 0;
`;

export const Legend = styled.legend`
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 16px;
  font-weight: 700;
`;

export const HelperText = styled.p`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.body};
  font-size: 14px;
`;

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CheckboxLabel = styled.label`
  min-height: 48px;
  padding: 12px 16px;

  display: flex;
  align-items: center;
  gap: 12px;

  background-color: ${({ theme }) => theme.colors.emerald10};
  border: 1px solid ${({ theme }) => theme.colors.emerald20};
  border-radius: 16px;

  input {
    width: 18px;
    height: 18px;
    accent-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FieldGroup = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.heading};
  font-weight: 700;
`;

export const Input = styled.input`
  width: 100%;
  min-height: 48px;
  padding: 12px 16px;

  color: ${({ theme }) => theme.colors.body};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.emerald30};
  border-radius: 16px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 160px;
  padding: 12px 16px;
  resize: vertical;

  color: ${({ theme }) => theme.colors.body};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.emerald30};
  border-radius: 16px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled.button`
  min-height: 48px;
  padding: 0 24px;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0;
  border-radius: 999px;
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryPressed};
  }
`;

export const StatusMessage = styled.p`
  margin-top: 24px;
  padding: 16px;

  color: ${({ theme }) => theme.colors.primaryPressed};
  background-color: ${({ theme }) => theme.colors.emerald10};
  border-radius: 12px;
  font-weight: 700;
`;