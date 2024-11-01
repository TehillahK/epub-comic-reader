
import EpubContainer from "./components/container/EpubContainer.tsx";
import "./index.css"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import sampleFile from "./samples/haven.epub"

function App() {


  return (
      <div>
        <div style={{display: "flex", flexFlow: "row", alignItems: "center"}}>
             Menu
        </div>

           <EpubContainer fileUrl={sampleFile} />


      </div>

  )
}

export default App
