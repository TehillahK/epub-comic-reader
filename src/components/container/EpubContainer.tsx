import {useEffect, useRef} from "react";
import ePub from "epubjs";

import {Space} from "zoomable-div";

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

    },[])

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
}

export default EpubContainer;