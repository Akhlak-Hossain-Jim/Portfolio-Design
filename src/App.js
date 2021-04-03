import React from "react";
import { Helmet } from "react-helmet";
import "./Assets/sass/base/base.scss";
import "./Assets/sass/base/var.scss";
import Nav from "./Assets/Components/Nav";
import Home from "./Assets/Components/Home";

function App() {
  return (
    <>
      <Helmet>
        <meta name="author" content="Akhlak Hossain Jim" />
        <meta
          name="keywords"
          content="Akhlak Hossain Jim, Web Developer, Developer, Front-end Developer"
        />
        <meta
          name="description"
          content="Akhlak Hossain Jim | Front-end Web Developer and It Support Specialist, Loves Travelling, passionate to learn things, spacially in IT field"
        />
        <link rel="canonical" href="https://ah-jim.web.app/" />

        <meta
          property="og:title"
          content="Akhlak Hossain Jim :: Front-end+IT Support+Travelling+Curious Soul"
        />
        <meta
          property="og:description"
          content="Akhlak Hossain Jim | Front-end Web Developer and It Support Specialist, Loves Travelling, passionate to learn things, spacially in IT field"
        />
        <meta
          property="og:image"
          content="https://ah-jim.web.app/static/media/Akhlak%20Hossain%20Jim%20480.2f170d4f.jpg"
        />
        <meta property="og:url" content="https://ah-jim.web.app/" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="Akhlak Hossain Jim :: Front-end+IT Support+Travelling+Curious Soul"
        />
        <meta
          name="twitter:description"
          content="Akhlak Hossain Jim | Front-end Web Developer and It Support Specialist, Loves Travelling, passionate to learn things, spacially in IT field"
        />
        <meta
          name="twitter:image"
          content="https://ah-jim.web.app/static/media/Akhlak%20Hossain%20Jim%20480.2f170d4f.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ahossainjim" />
        <meta name="twitter:site" content="@ahossainjim" />
        <title>
          Akhlak Hossain Jim :: Front-end+IT Support+Travelling+Curious Soul
        </title>
      </Helmet>

      <Nav />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
