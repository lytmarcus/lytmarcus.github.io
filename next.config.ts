import type { NextConfig } from "next";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage = Boolean(
  process.env.GITHUB_ACTIONS && repository && !repository.endsWith(".github.io"),
);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProjectPage ? `/${repository}` : "",
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
