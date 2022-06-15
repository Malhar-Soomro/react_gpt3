import './App.css';
import { Article, Brand, CTA, Feature, Navbar } from "./components"
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers"

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      Hey guys
    </div>
  );
}

export default App;
