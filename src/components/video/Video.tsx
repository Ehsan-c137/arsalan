"use client";

import { memo, useEffect, useState } from "react";

export default function Video({ src }: { src: string }) {
   return (
      <video
         style={{
            width: "100%",
            height: "100%",
            zIndex: 40,
            objectFit: "cover",
         }}
         poster="/images/black-screen.webp"
         loop
         muted
         autoPlay
         playsInline
      >
         <source src={src} type="video/mp4" />
         Your browser does not support the video tag.
      </video>
   );
}
