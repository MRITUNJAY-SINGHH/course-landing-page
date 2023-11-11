import React, { useEffect } from 'react';
import {
   Navbar,
   Hero,
   Companies,
   Courses,
   Achievement,
   Categories,
   Feedback,
   CTA,
   Footer,
} from './components';
import { animateScroll as scroll } from 'react-scroll';
import './App.css';
import Price from './components/Price';

const App = () => {
   useEffect(() => {
      // Smooth scroll to top when the component mounts
      scroll.scrollToTop();
   }, []);

   return (
      <div>
         <Navbar />
         <Hero />
         <Companies />
         <Courses />
         <Achievement />
         <Price />
         <Categories />
         <Feedback />
         <CTA />
         <Footer />
      </div>
   );
};

export default App;
