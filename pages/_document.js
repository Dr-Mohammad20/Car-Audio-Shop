import { Html, Head, Main, NextScript } from 'next/document';
import Link from 'next/link';

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
        <Link href="../assets/font/IranianSans.ttf" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
