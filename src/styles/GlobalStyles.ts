"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.body};
    font-family: Arial, Helvetica, sans-serif;
    font-size: ${({ theme }) => theme.typography.textBase.fontSize};
    line-height: ${({ theme }) => theme.typography.textBase.lineHeight};
    -webkit-font-smoothing: antialiased;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.emerald40};
    outline-offset: 3px;
  }
`;