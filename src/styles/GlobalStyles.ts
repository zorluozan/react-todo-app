import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    --color-light-gray: #fafafa;
    --color-light-gray-grayish-blue: #e4e5f1;
    --color-light-grayish-blue: #d2d3db;
    --color-dark-grayish-blue: #9394a5;
    --color-very-dark-grayish-blue: #484b6a;
  }

  &.dark-mode {
    --color-very-dark-blue: #161722;
    --color-very-dark-desurated-blue: #25273c;
    --color-light-grayish-blue: #cacde8;
    --color-light-grayish-hover-blue: #e4e5f1;
    --color-dark-grayish-blue: #777a92;
    --color-very-dark-grayish-blue: #4d5066;
    --color-very-dark-grayish-blue-2: #393a4c;

  }

  --color-primary: #3a7bfd;
  --linear-gradient-color: linear-gradient(#57ddff,#c058f3);
  --shadow-lg: 0 2.4rem 3rem rgba(0, 0, 0, 0.2);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Josefin Sans", sans-serif;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  font-size: 1.8rem;
  font-weight: 400;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
  background-color: transparent;
  border: none;
}

*:disabled {
  cursor: not-allowed;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}


a {
  color: inherit;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
  height: auto;
}
`;

export default GlobalStyles;
