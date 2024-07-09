type pageProps = {
   params: {
      slug: string;
   };
};

export default function Page(slug: pageProps) {
   return <div>Page: {slug.params.slug}</div>;
}
