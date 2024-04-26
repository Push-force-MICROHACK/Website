import React from 'react';
import "./Iframe.css"
export default function Iframe() {
  return (
    <div className='iframesection'>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SrdkyYHStbg?si=8YLVa2jIUTk1oUBC"
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
