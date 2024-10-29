import ePub from "epubjs";

import {useEffect, useRef, useState} from "react";

function App() {
  const epubRef = useRef<HTMLDivElement|null>(null);



  useEffect(() => {
    const book = ePub("https://zfzqwolxrejrzidhmsai.supabase.co/storage/v1/object/public/pages/books/GROOTSLANG_BEMBA.epub")
    const rendition = book.renderTo(epubRef.current as HTMLDivElement , {
      manager: "continuous",
      flow: "scrolled",
      width: "100%",
      height: "100%"
    });
    rendition.display();
  },[])

  return (
    <div ref={epubRef} style={{ width:"100vw",height: "100vh",overflow: "auto" }}>


    </div>
  )
}

export default App
