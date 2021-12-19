import type { MetaFunction } from "remix";

const metaTitle = "TODO - Fill in the title";
const metaDescription = "TODO - Fill in description";

export let meta: MetaFunction = () => {
  return {
    title: metaTitle,
    description: metaDescription,
    "og:type": "website",
    "og:url": "TODO - Fill in the page url",
    "og:title": metaTitle,
    "og:descripion": metaDescription,
    "og:image": "TODO - Fill in the open graph image - Cloudinary?",
    "og:image:width": "TODO - Fill in the image width",
    "og:image:height": "TODO - Fill in the image height",
    "og:image:alt": "TODO - Fill in the image alt",
    "og:site_name": metaTitle,
    "twitter:card": "summary_large_image",
    "twitter:image":
      "TODO - Fill in the twitter image src - can be the same as Cloudinary",
    "twitter:title": metaTitle,
    "twitter:creator": "@IngvarMark",
    "twitter:description": metaDescription,
  };
};

export default function Dags() {
  return <h1>Dags</h1>;
}
