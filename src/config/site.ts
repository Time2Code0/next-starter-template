export const config = {
  author: {
    name: "SITE_AUTHOR",
    url: "SITE_AUTHOR_URL",
  },
  description: "SITE_DESCRIPTION",
  keywords: ["SITE_KEYWORDS"],
  name: "SITE_NAME",
  socials: {
    github: "SITE_GITHUB_URL",
    linkedin: "SITE_LINKEDIN_URL",
    twitter: "SITE_TWITTER_URL",
  },
  title: "SITE_TITLE",
  url: (process.env.NEXT_PUBLIC_APP_URL ?? "https://example.com").replace(
    /\/$/,
    ""
  ),
} as const;

export type SiteConfig = typeof config;
