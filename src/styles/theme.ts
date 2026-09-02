export const theme = {
  colors: {
    emerald10: "#DFF2ED",
    emerald20: "#B2DFD0",
    emerald30: "#80CAB1",
    emerald40: "#4FBA94",
    emerald50: "#29A480",
    emerald60: "#018762",
    emerald70: "#007756",
    emerald80: "#014C37",

    background: "#FFFFFF",
    primary: "#018762",
    primaryHover: "#007756",
    primaryPressed: "#014C37",

    heading: "#131313",
    body: "#2D2D2D",
    white: "#FFFFFF",
  },

  typography: {
    headlineXl: {
      fontSize: "48px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    headlineLg: {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    headlineBase: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: "120%",
    },
    headlineSm: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "150%",
    },
    textBase: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "150%",
    },
    textSm: {
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "150%",
    },
    textXs: {
      fontSize: "12px",
      fontWeight: 400,
      lineHeight: "150%",
    },
  },

  spacing: {
    xs: "8px",
    sm: "16px",
    md: "24px",
    lg: "32px",
    xl: "40px",
    xxl: "48px",
  },

  breakpoints: {
    tablet: "768px",
    desktop: "1024px",
  },
} as const;

export type Theme = typeof theme;