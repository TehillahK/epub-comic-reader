import {useEffect, useRef, useState} from "react";
import ePub from "epubjs";


import Rendition from "../../types/rendition.ts";
import Controller from "./spread-controller/Controller.tsx";
import {scrollTheme, spreadTheme} from "./utils/themes/themes.ts";

const EpubContainer = ({fileUrl, renderOption}:EpubPropType) => {

    const epubRef = useRef<HTMLDivElement|null>(null);
    const prevPageRef = useRef<HTMLButtonElement | null>(null);
    const nextPageRef = useRef<HTMLButtonElement | null>(null);
    const [pageNum, setPageNum] = useState<number>(0);
    const [totalPages, setTotalPages] = useState<number>(0);


    useEffect(() => {
        const book = ePub(fileUrl);
        const rendition = book.renderTo(
            epubRef.current as HTMLDivElement ,
            renderOption
        );

        rendition.themes.default(
            renderOption.flow === "scrolled"? scrollTheme: spreadTheme,
        )
        if(!pageNum){
            setTotalPages(book.locations.length());
        }


         //rendition.views()[2].display()
        rendition.display(1).then((r)=>r);

        const prevPage =()=>{
            rendition.prev().then(r=>r);
            setPageNum(rendition.currentLocation().index);
        }

        const nextPage =()=>{
            rendition.next().then(r=>r);
            setPageNum(rendition.currentLocation().index);
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
                                    <Controller
                                        pageNum={pageNum}
                                        totalPages={totalPages}
                                        nextPageRef={nextPageRef}
                                        prevPageRef={prevPageRef}
                                    />
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