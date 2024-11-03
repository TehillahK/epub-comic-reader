import {useEffect, useRef} from "react";
import ePub from "epubjs";


import Rendition from "../../types/rendition.ts";

const EpubContainer = ({fileUrl, renderOption}:EpubPropType) => {

    const epubRef = useRef<HTMLDivElement|null>(null);







    useEffect(() => {
        const book = ePub(fileUrl);
        const rendition = book.renderTo(
            epubRef.current as HTMLDivElement ,
            renderOption
        );
       // epubRef.current?.querySelector("")
   //     console.log(rendition);
        rendition.themes.default(
            {
                img:{
                    width:"65% !important",
                    'max-width': '100% !important',
                    willChange: "transform !important",
                },
                h1:{
                    display:"none",
                    padding:"0px",
                    margin:"0px",
                },
                nav: {
                    display: "none !important",
                },
                body:{
                    padding:"2px !important",
                    margin:"0px !important",
                   // willChange: "transform !important",
                }
            }
        )


         //rendition.views()[2].display()
         rendition.display().then((r)=>r);

        return () => {
             rendition.destroy();
        }

    },[renderOption])

  return (


                  <div
                      className={"comic-page"}
                       ref={epubRef}
                       style={{
                            width: "100vw",
                            height: "100vh",
                            overflow: "auto",
                            flexDirection: "column",
                            justifyContent: "center",
                           willChange: "transform",
                       }}

                  >

                  </div>





  )
}


type EpubPropType = {
    fileUrl: string,
    renderOption: Rendition;
}

export default EpubContainer;