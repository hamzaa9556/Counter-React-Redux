import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/header";
import Body from "./components/body";
import Container from "./components/container";
import Controls from "./components/controls";
function App() {
  return (

    <div className="px-4 py-5 my-5 text-center">
      <Container>
      <Header></Header>
      <div className="col-lg-6 mx-auto">
       <Body></Body>
        <Controls></Controls>
      </div>
      </Container>
    </div>
  );
}

export default App;
