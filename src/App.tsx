import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // 捲動到視窗內時才淡入（.reveal → .reveal.in）
  useEffect(() => {
    const show = (el: Element) => el.classList.add('in');
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    const observe = (root: ParentNode) => {
      root.querySelectorAll('.reveal:not(.in)').forEach((el) => io.observe(el));
    };
    observe(document);
    // 專案分頁切換等重新渲染出來的 .reveal 元素也要納入觀察，否則會停在 opacity:0
    const mo = new MutationObserver((muts) => {
      muts.forEach((m) => {
        m.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.classList.contains('reveal')) io.observe(n);
          observe(n);
        });
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => { io.disconnect(); mo.disconnect(); };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
