import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/layouts/footer";
import Header from "./components/layouts/Header";

import CallToAction from "./features/landing/CallToAction";
import CourseExplorer from "./features/landing/CourseExplorer";
import FeaturesSection from "./features/landing/FeatureSection";
import HeroSection from "./features/landing/HeroSection";
import TestimonialSection from "./features/landing/TestimonialSection";

import RegisterPage from "./features/auth/RegisterPage";
import SignInPage from "./features/auth/SignInPage";

// Landing Page
function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroSection />
        <FeaturesSection />
        <CourseExplorer />
        <TestimonialSection />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;