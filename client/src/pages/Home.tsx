/**
 * Home Page
 * 
 * Design Philosophy: Modern Minimalist with Asymmetric Grid
 * - Clean, professional aesthetics
 * - Asymmetric layouts that feel contemporary
 * - Teal accent color for visual interest
 * - Typography-driven design
 * - Smooth, subtle interactions
 */

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
