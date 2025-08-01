import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Router from "./routes/Router.jsx";
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store/store'; // Import the Redux store

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); 
});
gsap.ticker.lagSmoothing(0);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap the app with Provider */}
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>,
);
