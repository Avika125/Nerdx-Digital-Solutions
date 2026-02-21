import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import LandingPage from "./pages/LandingPage";
import WhoWeAreDetail from "./pages/WhoWeAreDetail";
import HowWeWorkDetail from "./pages/HowWeWorkDetail";
import WhatWeDoDetail from "./pages/WhatWeDoDetail";
import ServiceDetail from "./pages/ServiceDetail";
import StuffThatWorkedDetail from "./pages/StuffThatWorkedDetail";
import ContactDetail from "./pages/ContactDetail";
import Chatbot from "./components/Chatbot";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/who-we-are-detail" element={<WhoWeAreDetail />} />
          <Route path="/how-we-work-detail" element={<HowWeWorkDetail />} />
          <Route path="/what-we-do-detail" element={<WhatWeDoDetail />} />
          <Route path="/service/:slug" element={<ServiceDetail />} />
          <Route path="/stuff-that-worked" element={<StuffThatWorkedDetail />} />
          <Route path="/contact" element={<ContactDetail />} />
        </Routes>
        <Footer />
      </div>

      <Chatbot isOpen={isChatOpen} toggleChat={() => setIsChatOpen(!isChatOpen)} />
      <WhatsAppButton hide={isChatOpen} />
      <ButtonGradient />
    </>
  );
};

export default App;
