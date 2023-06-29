import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./components/Themes";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

//Components
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";
import SoundBar from "./subComponents/SoundBar";
import TransitionEffect from "./components/TransitionEffect";
import Trajectory from "./components/Trajectory";

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <TransitionEffect />
        <SoundBar />
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location} >
          
            <Route path="/" element={
              <>
                <TransitionEffect />
                <Main />
              </>
            } />
            <Route path="/about" element={
              <>
                <TransitionEffect />
                <AboutPage />
              </>
            } />
            <Route path="/blog" element={
              <>
                <TransitionEffect />
                <BlogPage />
              </>
            } />
            <Route path="/work" element={
              <>
                <TransitionEffect />
                <WorkPage />
              </>
            } />
            <Route path="/skills" element={
              <>
                <TransitionEffect />
                <MySkillsPage />
              </>
            } />
            <Route path="/trajectory" element={
              <>
                <TransitionEffect />
                <Trajectory />
              </>
            } />
            <Route path="*" element={
              <>
                <TransitionEffect />
                <Main />
              </>
            } />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;