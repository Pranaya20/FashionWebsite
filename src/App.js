
import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import StoryPart from "./Components/StoryPart";

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div>
          <StoryPart />
        </div>
        <div className="mt-4">
          <ProductList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
