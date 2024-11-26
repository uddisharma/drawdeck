import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "BoardSphere",
    short_name: "BoardSphere",
    description: `Boardsphere is a powerful online collaborative whiteboard tool designed for teams to brainstorm, plan, and execute ideas seamlessly. Boost productivity with real-time collaboration, intuitive drawing tools, and flexible workspace organization. Perfect for creative projects, team meetings, and remote collaboration.`,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/9a311683-0f72-4bf7-93d8-55baf510d893.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/9a311683-0f72-4bf7-93d8-55baf510d893.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
