import {useEffect, useRef} from "react";
import ePub from "epubjs";


import Rendition from "../../types/rendition.ts";
import Controller from "./spread-controller/Controller.tsx";

const EpubContainer = ({fileUrl, renderOption}:EpubPropType) => {

    const epubRef = useRef<HTMLDivElement|null>(null);
    const prevPageRef = useRef<HTMLButtonElement | null>(null);
    const nextPageRef = useRef<HTMLButtonElement | null>(null);


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
                  width:"100vw !important",
                    'max-width': '100% !important',
                    willChange: "transform !important",
                  //  height:"100vh !important",
                 //   'max-height':'80% !important',
                    objectFit: "none !important",
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
                    padding:"auto",
                    margin:"0px !important",
                   // willChange: "transform !important",

                    height:"100vh !important",

                }
            }
        )


         //rendition.views()[2].display()
        rendition.display(1).then((r)=>r);

        const prevPage =()=>{
            rendition.prev().then(r=>r);
        }

        const nextPage =()=>{
            rendition.next().then(r=>r);;
        }

        prevPageRef?.current?.addEventListener("click", prevPage);


        nextPageRef?.current?.addEventListener("click", nextPage);



        return () => {
             rendition.destroy();
             prevPageRef?.current?.removeEventListener("click", prevPage);
             nextPageRef?.current?.removeEventListener("click", nextPage);
          }

    },[renderOption])

  return (

                    <>
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
                                padding: "0px !important",
                                margin: "0px !important",
                            }}

                        >
                            {
                                renderOption.flow !== "scrolled"?(
                                    <Controller nextPageRef={nextPageRef} prevPageRef={prevPageRef}  />
                                ):""
                            }

                        </div>


                    </>


  )
}


type EpubPropType = {
    fileUrl: string,
    renderOption: Rendition
}

export default EpubContainer;