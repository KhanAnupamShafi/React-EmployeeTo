import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContainerMain from "./component/ContainerMain/ContainerMain";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ContainerMain></ContainerMain>
    </div>
  );
}

export default App;
