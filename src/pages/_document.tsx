import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Schedjuice</title>
      <meta
  name="description"
  content="Schedjuice - Transform the way you administer education with Schedjuice"
/>
<meta
          property="og:image"
          content="https://schedjuice.com/img/Icon-Color.png"
        />
         <meta
          property="og:description"
          content="Schedjuice - Transform the way you administer education with Schedjuice"
        />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}