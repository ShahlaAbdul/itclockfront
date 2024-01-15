import React from 'react'
import BestItSolution from '../../Component/BestItSolution/BestItSolution'
import ManagedId from "../../Component/ManagedId/ManagedId";
import Insights from '../../Component/Insights/Insights';
import OurStudyCase from '../../Component/OurcaseStudy/OurStudyCase';
import LetsWork from '../../Component/LetsWork/LetsWork';
function Home() {
  return (
    <div>
      <BestItSolution></BestItSolution>
      <ManagedId></ManagedId>
      <Insights></Insights>
      <OurStudyCase></OurStudyCase>
      <LetsWork></LetsWork>
    </div>
  )
}

export default Home