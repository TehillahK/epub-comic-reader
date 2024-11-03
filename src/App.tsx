
import EpubContainer from "./components/container/EpubContainer.tsx";
import "./index.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import sampleFile from "./samples/haven.epub"
import {useEffect, useRef, useState} from "react";
import Settings from "./components/settings/Settings.tsx";
import {createPortal} from "react-dom";
import Nav from "./components/navbar/Nav.tsx";
import Rendition from "./types/rendition.ts";
import {scrolledRendition, spreadRendition} from "./utils/renditions.ts";

function App({title = "Title", chapterNum = 0}: {title: string, chapterNum: number}) {
    const [showSettings, setShowSettings] = useState<boolean>(false);
    const [renderOption,setRenderOption] = useState<Rendition>(scrolledRendition);

    const [isSpread, setIsSpread] = useState<boolean>(false);


    const openSettings =()=>{
        setShowSettings(true);
    }

    const closeSettings =()=>{
        setShowSettings(false);
    }

    const changeReadPreference =(isSpread: boolean)=>{
        if(isSpread){
            setRenderOption(spreadRendition);
        }else{
            setRenderOption(scrolledRendition);
        }
        setIsSpread(isSpread);
    }

    const nextPage=()=>{

    }

    useEffect(() => {

    }, [renderOption]);

    return (
      <div style={{width:"100vw", height:"100vh"}}>
          <Nav
              title={title}
              chapterNum={chapterNum}
              changeReadPreference={changeReadPreference}
          />

          <EpubContainer
              fileUrl={sampleFile}
              renderOption={renderOption}
          />



      </div>

  )
}

export default App
