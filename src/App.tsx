
import EpubContainer from "./components/container/EpubContainer.tsx";
import "./index.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import sampleFile from "./samples/haven.epub"
import {useState} from "react";
import Settings from "./components/settings/Settings.tsx";
import {createPortal} from "react-dom";

function App() {
    const [showSettings, setShowSettings] = useState<boolean>(false);

    const openSettings =()=>{
        setShowSettings(true);
    }

    const closeSettings =()=>{
        setShowSettings(false);
    }

    return (
      <>
          <nav className="navbar">
              <div className="navbar-brand">

                 <img
                     src={"https://zfzqwolxrejrzidhmsai.supabase.co/storage/v1/object/public/pages/cover/HavenSun,20Oct202417:59:40GMTcover.png"}
                    alt={"logo"}
                     className="navbar-logo"

                 />

              </div>

                  <a
                      className="navbar-link"
                      href="#"
                      onClick={openSettings}

                  >
                      Settings
                  </a>


          </nav>

          <EpubContainer fileUrl={sampleFile}/>

          {showSettings &&createPortal(<Settings onClose={closeSettings} />,document.body)}


      </>

  )
}

export default App
