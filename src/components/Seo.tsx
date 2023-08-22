import Head from 'next/head';
import { useRouter } from 'next/router';
import favicon from 'public/images/favicon.ico';

import { openGraph } from '@/lib/helper';

const defaultMeta = {
  title: 'Alvara Protocol',
  siteName: 'Alvara Protocol',
  description:
    'Build. Manage. Earn. A cutting-edge trading platform empowering the next generation of fund managers.',
  /** Without additional '/' on the end */
  url: 'http://alvaraprotocol.io/',
  type: 'website',
  robots: 'follow, index',
  /**
   * No need to be filled, will be populated with openGraph function
   * If you wish to use a normal image, just specify the path below
   */
  image: '/alvara.png',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };
  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // !STARTERCONF Follow config for opengraph, by deploying one on https://github.com/.../og
  // ? Uncomment code below if you want to use default open graph
  meta['image'] = openGraph({
    description: meta.description,
    siteName: props.templateTitle ? meta.siteName : meta.title,
    templateTitle: props.templateTitle,
  });
  return (
    <Head>
      <title>{meta.title}</title>
      <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest"></link>
      <meta name="robots" content={meta.robots} />
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.siteName} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@th_clarence" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta
            name="author"
            property="article:author"
            content="Theodorus Clarence"
          />
        </>
      )}

      {/* Favicons */}
      {/* {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))} */}

      {/* <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" /> */}
    </Head>
  );
}

// type Favicons = {
//   rel: string;
//   href: string;
//   sizes?: string;
//   type?: string;
// };

// !STARTERCONF this is the default favicon, you can generate your own from https://favicon.io/ then replace the whole /public/favicon folder
// const favicons: Array<Favicons> = [
//   {
//     rel: 'apple-touch-icon',
//     sizes: '180x180',
//     href: '/favicon/apple-icon.png',
//   },
//   {
//     rel: 'icon',
//     type: 'image/png',
//     sizes: '32x32',
//     href: '/favicon/favicon-32x32.png',
//   },
//   {
//     rel: 'icon',
//     type: 'image/png',
//     sizes: '16x16',
//     href: '/favicon/favicon-16x16.png',
//   },
//   {
//     rel: 'manifest',
//     href: '/favicon/site.webmanifest',
//   },
// ];
