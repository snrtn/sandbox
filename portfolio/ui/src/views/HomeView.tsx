import { useEffect } from "react";
import {
  Jumbotron,
  About,
  Service,
  TechniqueIcon,
  Blog,
  Contact,
} from "../components";

const HomeView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Jumbotron />
      <About />
      <Service />
      <TechniqueIcon />
      <Blog />
      <Contact />
    </div>
  );
};

export default HomeView;
