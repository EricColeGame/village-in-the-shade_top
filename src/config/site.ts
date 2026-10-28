export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Village in the Shade Wiki",
  shortName: "Village in the Shade",
  logoText: "V",
  tagline: "Farming, Secrets & Survival in Kagatsu",
  description: "A fan-made Village in the Shade wiki covering farming, fishing, festivals, characters, secrets, and walkthroughs for Kagatsu.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://village-in-the-shade.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://village-in-the-shade.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/3934250/Village_in_the_Shade/",
  heroVideoId: "BKxXdJd6_Fc",
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
