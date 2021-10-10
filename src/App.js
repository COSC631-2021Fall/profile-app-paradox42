import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Navigation from "./Components/Navigation";
import { Switch, Route} from "react-router-dom";

function App() {
  const [resumeData, setResumeData] = useState({});

  const getResumeData = () => {
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  };

  useEffect(getResumeData, []);

  return (
    <main>
      <Navigation />
      <Switch>
        <Route path="/about">
          <About data={resumeData.main} />
        </Route>
        <Route path="/resume">
          <Resume data={resumeData.resume} />
        </Route>
        <Route path="/">
          <Header data={resumeData.main} />
        </Route>
      </Switch>
      <Footer data={resumeData.main} />
    </main>
  );
}

export default App;
