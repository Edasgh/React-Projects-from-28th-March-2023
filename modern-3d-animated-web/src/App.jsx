import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
import { useRef } from "react";

function App() {
 const webGiViewerRef=useRef()
 const contentRef=useRef()
 const handlePreview=()=>{
webGiViewerRef.current.triggerPreview();
 }
  return (
    <div className="App">
      <Loader/>
      <div id="content" ref={contentRef}  >
      <Navbar/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer contentRef={contentRef}  ref={webGiViewerRef} />
    </div>
  );
}

export default App;
