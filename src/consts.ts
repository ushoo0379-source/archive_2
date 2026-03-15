/** Site-wide constants — single source of truth for values used across components. */

export const SITE_TITLE = "USHOO";
export const SITE_DESCRIPTION = "3D Visual Artist & Designer Portfolio Archive.";
export const SITE_AUTHOR = "Ushoo";

/** CDN base URLs for remote images. */
/** 这里的图标暂时还是原作者的，等你有自己的图了可以再换 */
export const CDN_FAVICON_URL = "https://image.erfi.io/ea_favicon.png";
export const CDN_COVER_IMAGE_URL = "https://image.erfi.io/tenhult_3.jpg";

/** Social media links. */
/** 建议把下面的链接换成你真实的个人主页地址 */
export const SOCIAL_LINKS = {
  github: "https://github.com/你的用户名",
  linkedin: "https://www.linkedin.com/in/你的用户名/",
  instagram: "https://www.instagram.com/你的用户名/",
} as const;
