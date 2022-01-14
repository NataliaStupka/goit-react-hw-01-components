// записаны основные настройки 
import { css } from '@emotion/react'

export const GlobalStyle = css`

* {
  margin: 0;
  padding: 0;
}

body,
html {
  height: 100%;
}

img,
picture,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,
ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
`

