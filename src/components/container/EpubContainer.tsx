import {useEffect, useRef} from "react";
import ePub from "epubjs";
import {TransformComponent, TransformWrapper} from "react-zoom-pan-pinch";

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
                    width:"90%",
                    'max-width': '100% !important',
                    willChange: "transform !important",
                },
                h1:{
                    display:"none",
                    padding:0,
                    margin:0,
                },
                nav: {
                    display: "none",
                },
                body:{
                   padding:0,
                    margin:0,
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
          <TransformWrapper>
              <TransformComponent>
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
              </TransformComponent>
          </TransformWrapper>



  )
}


type EpubPropType = {
    fileUrl: string,
}

export default EpubContainer;