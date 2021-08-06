import './style.css';
import imageInSrc from "./imageInSrc.png";

function App() {
  return (
    <>
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Soumaya Labbene</h1>
      <br></br>
      <div  style={{textAlign:'center'}}>
      <img src={imageInSrc} alt="paysage"></img>
      
        <br></br>
        <br></br>
        <img src="/imageInPublic.jpg"></img>
        </div>
      </div>
      <div  style={{textAlign:'center'}}>
      <video width="320" height="240" controls>
      <source src="myVideo.mp4" type="video/mp4" ></source>
        </video>
        </div>
        
      </>
  );
}

export default App;
