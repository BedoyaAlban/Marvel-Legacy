import React from "react";
import "./App.css";
import AgentZero from "./characters/AgentZero";
import CaptainAmerica from "./characters/CaptainAmerica";
import Cyclops from "./characters/Cyclpos";
import Daredevil from "./characters/Daredevil";
import Deadpool from "./characters/Deadpool";
import DoctorOctopus from "./characters/DoctorOctopus";
import Falcon from "./characters/Falcon";
import Fantastic4 from "./characters/Fantastic4";
import Gambit from "./characters/Gambit";
import Hawkeye from "./characters/Hawkeye";
import Hulk from "./characters/Hulk";
import HumanTorch from "./characters/HumanTorch";
import IronMan from "./characters/IronMan";
import Magneto from "./characters/MAgneto";
import Punisher from "./characters/Punisher";
import SpiderMan from "./characters/SpiderMan";
import Thor from "./characters/Thor";
import Ultron from "./characters/Ultron";
import Vison from "./characters/Vision";
import Wolverine from "./characters/Wolverine";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="marvel__characters">
        <AgentZero />
        <CaptainAmerica />
        <Cyclops />
        <Daredevil />
        <Deadpool />
        <DoctorOctopus />
        <Falcon />
        <Fantastic4 />
        <Gambit />
        <Hawkeye />
        <Hulk />
        <HumanTorch />
        <IronMan />
        <Magneto />
        <Punisher />
        <SpiderMan />
        <Thor />
        <Ultron />
        <Vison />
        <Wolverine />
      </div>
    </div>
  );
}

export default App;
