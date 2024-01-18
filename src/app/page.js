"Use Client";

import { About } from "./components/About";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Technologies } from "./components/Technologies";
import { Projects } from "./components/Projects";

export default function Page() {
  return (
    <div className="h-screen mx-auto">
      <Header />
      <Home />
      <About />
      <Technologies />
      <Projects />
    </div>
  );
}
