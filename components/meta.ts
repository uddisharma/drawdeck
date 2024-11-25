const title: string = "Boardsphere";
const description: string =
  "BoardSphere is a Miro-inspired collaborative whiteboarding tool that enables users to brainstorm, organize ideas, and collaborate visually on interactive boards, supporting a seamless and creative team workflow.";

export const SiteConfig = {
  title,
  description,
  openGraph: {
    type: "website",
    url: "https://github.com/uddisharma/Boardsphere",
    title,
    description,
    images: [
      {
        url: "/public/image.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/uddisharma/Boardsphere",
    title,
    description,
    images: ["/public/image.png"],
  },
};
