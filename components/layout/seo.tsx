import { Head } from "$fresh/runtime.ts";

interface SEOProps {
  site: string;
  url: URL;
  description: string;
  keywords?: string;
  type?: string;
  ogImage?: string;
  twitterHandle?: string;
}

export default function SEO({
  site,
  url,
  description,
  keywords,
  type,
  ogImage,
  twitterHandle,
}: SEOProps) {
  const pathTitle = url.pathname === "/" ? "Welcome" : url.pathname
    .slice(1)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const title = `${pathTitle} | ${site}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
      {keywords && <meta name="keywords" content={keywords} key="keywords" />}

      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:url" content={url.href} key="og:url" />
      {ogImage && <meta property="og:image" content={ogImage} key="og:image" />}
      <meta property="og:type" content={type || "website"} key="og:type" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} key="tw:title" />
      <meta
        name="twitter:description"
        content={description}
        key="tw:description"
      />
      <meta name="twitter:url" content={url.href} key="tw:url" />
      {ogImage && (
        <meta
          name="twitter:image"
          content={ogImage}
          key="tw:image"
        />
      )}
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
    </Head>
  );
}
