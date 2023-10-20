import { Routes, Route } from "react-router-dom";
import { Footer, Header, ModalForm, Navbar } from "./components";
import {
  AboutMoreInfo,
  Home,
  NewsMoreInfo,
  Products,
  ServicesMoreInfo,
} from "./pages";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  return (
    <>
      <div className="bg-zinc-200">
      <Header />
      <Navbar />
     </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMoreInfo />} />
        <Route path="/news" element={<NewsMoreInfo />} />
        <Route path="/services" element={<ServicesMoreInfo />} />
        <Route path="/products" element={<Products />} />
        <Route path="/modal" element={<ModalForm />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
