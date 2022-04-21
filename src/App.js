import './App.css';
import { useEffect, useState } from "react";
import Header from './components/Header';
import PostList from './components/PostList'
import Footer from './components/Footer';

function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  return (
  <>
    <div className="App">
      <Header />
      <PostList />
      <Footer />
    </div>

    {showButton && (
      <button onClick={scrollToTop} className="back-to-top">
        &#8679;
      </button>
    )}
  </>
  );
}

export default App;
