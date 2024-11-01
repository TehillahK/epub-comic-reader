
import EpubContainer from "./components/container/EpubContainer.tsx";
import "./index.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import sampleFile from "./samples/haven.epub"

function App() {


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

                  <a className="navbar-link" href="#">
                      Settings
                  </a>


          </nav>

          <EpubContainer fileUrl={sampleFile}/>


      </>

  )
}

export default App
