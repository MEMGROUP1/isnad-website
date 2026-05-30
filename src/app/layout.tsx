// Since we have a `[locale]` segment, this root layout is required
// and must not render any UI except for the children.
// See: https://next-intl-docs.vercel.app/docs/getting-started/app-router

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
