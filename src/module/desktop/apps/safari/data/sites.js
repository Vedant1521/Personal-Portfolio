import { PROJECT_1_URL, PROJECT_2_URL, PROJECT_3_URL, PROJECT_4_URL } from "@constants";

const getDomain = (url) => {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    return parsed.hostname;
  } catch {
    return "";
  }
};

const blockedDomains = ["github.com", "npmjs.com", "npm.im", "x.com", "twitter.com", "linkedin.com"];
const isDomainCompatible = (url) => {
  const domain = getDomain(url);
  if (!domain) return null;
  if (blockedDomains.some((b) => domain.toLowerCase().includes(b))) return null;
  return domain;
};

export const IFRAME_COMPATIBLE_SITES = [
  "openstreetmap.org",
  "wttr.in",
  "example.com",
  "example.org",
  isDomainCompatible(PROJECT_1_URL),
  isDomainCompatible(PROJECT_2_URL),
  isDomainCompatible(PROJECT_3_URL),
  isDomainCompatible(PROJECT_4_URL),
].filter(Boolean);
