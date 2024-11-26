import { Metadata } from "next";

export function constructMetadata({
  title = `Boardsphere - Collaborative Online Whiteboard for Teams `,
  description = `Boardsphere is a powerful online collaborative whiteboard tool designed for teams to brainstorm, plan, and execute ideas seamlessly. Boost productivity with real-time collaboration, intuitive drawing tools, and flexible workspace organization. Perfect for creative projects, team meetings, and remote collaboration.`,
  image = "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicImages/_public/4ed2998e-f741-49ba-8b00-82ed006d5769.png",
  video,
  icons = [
    {
      rel: "apple-touch-icon",
      sizes: "32x32",
      url: "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/9a311683-0f72-4bf7-93d8-55baf510d893.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/9a311683-0f72-4bf7-93d8-55baf510d893.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "https://files.edgestore.dev/j26azsoyqh7n72m2/myPublicFiles/_public/9a311683-0f72-4bf7-93d8-55baf510d893.png",
    },
  ],
  canonicalUrl,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  video?: string | null;
  icons?: Metadata["icons"];
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const HOME_DOMAIN = "https://miro.deepakbhardwaj.me/";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(image && {
        images: image,
      }),
      ...(video && {
        videos: video,
      }),
    },
    twitter: {
      title,
      description,
      ...(image && {
        card: "summary_large_image",
        images: [image],
      }),
      ...(video && {
        player: video,
      }),
      creator: "@dubdotco",
    },
    icons,
    metadataBase: new URL(HOME_DOMAIN),
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
