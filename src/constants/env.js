export const PROJECT_1_URL = process.env.NEXT_PUBLIC_PROJECT_1_URL;
export const PROJECT_1_GITHUB = process.env.NEXT_PUBLIC_PROJECT_1_GITHUB;
export const PROJECT_2_URL = process.env.NEXT_PUBLIC_PROJECT_2_URL;
export const PROJECT_2_GITHUB = process.env.NEXT_PUBLIC_PROJECT_2_GITHUB;
export const PROJECT_3_URL = process.env.NEXT_PUBLIC_PROJECT_3_URL;
export const PROJECT_3_GITHUB = process.env.NEXT_PUBLIC_PROJECT_3_GITHUB;
export const PROJECT_4_URL = process.env.NEXT_PUBLIC_PROJECT_4_URL || "https://neversleep-three.vercel.app";
export const PROJECT_4_GITHUB = process.env.NEXT_PUBLIC_PROJECT_4_GITHUB || "https://github.com/Vedant1521/NeverSleep";
export const GITHUB_PROFILE = process.env.NEXT_PUBLIC_GITHUB_PROFILE;
export const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/VedantG24089568";
export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/in/vedant-gupta";
export const GITHUB_USERNAME = GITHUB_PROFILE
  ? GITHUB_PROFILE.replace(/\/+$/, "").split("/").pop()
  : "Vedant1521";

export const PORTFOLIO_URL =
  process.env.NEXT_PUBLIC_PORTFOLIO_URL || "https://macos-vedantgupta.vercel.app";
export const PORTFOLIO_ALT_URL =
  process.env.NEXT_PUBLIC_PORTFOLIO_ALT_URL || "https://vedant-gupta.vercel.app/";
// TODO(ask-user): fill in email
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "guptavedant847@gmail.com";
export const PHONE = process.env.NEXT_PUBLIC_PHONE || "+91 9098523827";
