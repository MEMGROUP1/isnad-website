// Since we have a `[locale]` segment, this root layout is required
// and must not render any UI except for the children.
// See: https://next-intl-docs.vercel.app/docs/getting-started/app-router

import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KCETV292NZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KCETV292NZ');
        `}
      </Script>
      {children}
    </>
  );
}
