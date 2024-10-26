import "./App.css";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <h1>App main page.</h1>
      <Products />
      <Footer/>
    </>
  );
}

export default App;
