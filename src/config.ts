const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  const name = process.env.NEXT_PUBLIC_BLOG_DISPLAY_NAME || "Riccardo.";
  const copyright = process.env.NEXT_PUBLIC_BLOG_COPYRIGHT || "Riccardo Gualtieri";
  const defaultTitle =
    process.env.NEXT_DEFAULT_METADATA_DEFAULT_TITLE || "notebook";
  const defaultDescription = process.env.NEXT_PUBLIC_BLOG_DESCRIPTION || "Il mio piccolo mondo Online";
  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    blog: {
      name,
      copyright,
      metadata: {
        title: {
          absolute: defaultTitle,
          default: defaultTitle,
          template: `%s - ${defaultTitle}`,
        },
        description: defaultDescription,
      },
    },
    ogImageSecret:
      process.env.OG_IMAGE_SECRET ||
      "secret_used_for_signing_and_verifying_the_og_image_url",
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
