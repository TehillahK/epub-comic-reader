import ePub from "epubjs";

import {useEffect, useRef, useState} from "react";

function App() {
  const epubRef = useRef<HTMLDivElement|null>(null);



  useEffect(() => {
    const book = ePub("https://zfzqwolxrejrzidhmsai.supabase.co/storage/v1/object/public/pages/books/GROOTSLANG_BEMBA.epub")
    const rendition = book.renderTo(epubRef.current as HTMLDivElement, {width: 600, height: 900});
    rendition.display();
  },[])

  return (
    <div ref={epubRef}>


    </div>
  )
}

export default App
