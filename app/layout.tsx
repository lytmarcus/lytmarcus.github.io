import type { Metadata } from "next";
import "./globals.css";

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const deploymentUrl = githubOwner && githubRepository
  ? githubRepository.endsWith(".github.io")
    ? `https://${githubRepository}`
    : `https://${githubOwner}.github.io/${githubRepository}/`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(deploymentUrl),
  title: "Marcus Leung | Urban Studies Portfolio",
  description:
    "Urban planning, spatial research, design and visual storytelling by LEUNG Yin To, Marcus.",
  openGraph: {
    title: "Marcus Leung | Urban Studies Portfolio",
    description: "Urban planning, spatial research, design and visual storytelling.",
    type: "website",
    images: [{ url: "og.png", width: 1200, height: 630, alt: "Marcus Leung urban studies portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus Leung | Urban Studies Portfolio",
    description: "Urban planning, spatial research, design and visual storytelling.",
    images: ["og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
