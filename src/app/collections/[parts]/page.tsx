type pageProps = {
   params: {
      parts: string;
   };
};

export default function parts(params: pageProps) {
   return <p>{params.params.parts}</p>;
}
