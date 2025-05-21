import Banner from "./components/Banner";
import Header from "./components/Header";
import Home from "./pages/Home";
import Global from "./styles/global";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Home/>
      <Global />
    </div>
  );
}

export default App;
