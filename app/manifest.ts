import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chatzero",
    short_name: "Chatzero",
    description: "Chatzero, a chat application built with Next.js",
    start_url: "/",
    display: "standalone",
    background_color: "#171717",
    theme_color: "#171717",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
