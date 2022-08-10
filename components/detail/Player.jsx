import React, { useEffect, useRef } from "react";

const Video = ({ src }) => {
  console.log("src: ", src);
  const iframeRef = useRef(null);
  useEffect(() => {
    const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
    iframeRef.current.setAttribute("height", height);
  }, [src]);

  return (
    <div className="video">
      <iframe
        src={src}
        frameBorder="0"
        allowFullScreen
        width="100%"
        title={src}
        ref={iframeRef}
      />
    </div>
  );
};

export default Video;
