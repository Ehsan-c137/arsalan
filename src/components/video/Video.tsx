export function Video({ src }: { src: string }) {
   return (
      <video
         loop
         style={{
            width: "100%",
            height: "100%",
            zIndex: 40,
            objectFit: "cover",
         }}
         autoPlay
         muted
         preload="none"
      >
         <source src={src} type="video/mp4" />
         Your browser does not support the video tag.
      </video>
   );
}
