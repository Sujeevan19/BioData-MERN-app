import Register from "./components/Register"
import Login from "./components/Login"
import BioForm from "./components/BioForm"
import BioList from "./components/BioList"


function App() {
  return (
    <div>
    <h1>MERN Bio Data App</h1>

    <Register/>
    <Login/>

    <BioForm/>
    <BioList/>
   </div>
  );
}

export default App;
