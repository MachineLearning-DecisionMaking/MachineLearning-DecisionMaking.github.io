import { useState } from "react";

import placeholderLogo from "./images/placeholder-logo.png";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Teaching from "./pages/Teaching";
import Publications from "./pages/Publications";
import Patents from "./pages/Patents";
import Code from "./pages/Code";

function App() {
  const [selectedPageName, setSelectedPageName] = useState("home");
  const selectedPage = (() => {
    switch (selectedPageName) {
      case "home":
        return <Home />;
      case "team":
        return <Team />;
      case "teaching":
        return <Teaching />;
      case "publications":
        return <Publications />;
      case "patents":
        return <Patents />;
      case "code":
        return <Code />;
    }
  })();

  return (
    <div className="App">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src={placeholderLogo} alt="Logo" />
            </a>
            <span class="navbar-burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-start">
              <a
                class={`navbar-item ${selectedPageName == "home" && "is-active"}`}
                onClick={() => setSelectedPageName("home")}
              >
                Home
              </a>
              <a
                class={`navbar-item ${selectedPageName == "team" && "is-active"}`}
                onClick={() => setSelectedPageName("team")}
              >
                Team
              </a>
              <a
                class={`navbar-item ${selectedPageName == "teaching" && "is-active"}`}
                onClick={() => setSelectedPageName("teaching")}
              >
                Teaching
              </a>
              <a
                class={`navbar-item ${selectedPageName == "publications" && "is-active"}`}
                onClick={() => setSelectedPageName("publications")}
              >
                Publications
              </a>
              <a
                class={`navbar-item ${selectedPageName == "patents" && "is-active"}`}
                onClick={() => setSelectedPageName("patents")}
              >
                Patents
              </a>
              <a
                class={`navbar-item ${selectedPageName == "code" && "is-active"}`}
                onClick={() => setSelectedPageName("code")}
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </nav>
      {selectedPage}
    </div>
  );
}

export default App;
