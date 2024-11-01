import {useEffect, useRef} from "react";
import ePub from "epubjs";

const EpubContainer = ({fileUrl}:EpubPropType) => {

    const epubRef = useRef<HTMLDivElement|null>(null);



    useEffect(() => {
        const book = ePub(fileUrl);
        const rendition = book.renderTo(epubRef.current as HTMLDivElement , {
            manager: "continuous",
            flow: "scrolled",
            width: "100vw",
            height: "100%"
        });
       // epubRef.current?.querySelector("")
        console.log(rendition);
         //rendition.views()[2].display()
         rendition.display();

        return () => {
             rendition.destroy();
        }

    },[])

  return (
      <div ref={epubRef} style={{width: "100vw", height: "100vh", overflow: "auto",flexDirection:"column",justifyContent:"center"}}>


      </div>

  )
}


type EpubPropType ={
    fileUrl: string,
}

export default EpubContainer;