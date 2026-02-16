import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Blog from '@/components/sections/Blog';
import Playground from '@/components/sections/Playground';
import Contact from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Blog />
      <Playground />
      <Contact />
    </>
  );
}
