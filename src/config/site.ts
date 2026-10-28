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
  officialLinks?: {
    steamCommunity?: string;
    nintendo?: string;
    playstation?: string;
  };
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
  supportEmail: "support@village-in-the-shade.top",
  gameUrl: "https://store.steampowered.com/app/3934250/Village_in_the_Shade/",
  heroVideoId: "BKxXdJd6_Fc",
  officialLinks: {
    steamCommunity: "https://steamcommunity.com/app/3934250/",
    nintendo: "https://www.nintendo.com/us/store/products/village-in-the-shade-switch-2/",
    playstation: "https://store.playstation.com/en-us/concept/10015979/",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
