function buildGlobalStyles(theme) {
  return `
    html {
      height: 100%;
    }
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      font-family: ${theme.fonts.primary};
      font-size: 16px;
      font-weight: 400;
      height: 100%;
      margin: 0;

      button,
      input,
      select,
      textarea {
        font-family: ${theme.fonts.primary};
      }

    }
    #___gatsby {
      min-height: 100%;
      margin: auto;
      max-width: 800px;
    }
  `;
}

export default buildGlobalStyles;
