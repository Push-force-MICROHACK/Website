import React from 'react'
import Description from '../../Components/Description/Description'
import Iframe from '../../Components/Iframe/Iframe'
import HelpGuid from '../../Components/HelpGuide/HelpGuid'
import WhyCongicore from '../../Components/WhyCognicore/WhyCognicore'
import Features from '../../Components/Features/Features'
import Subscription from '../../Components/Subscription/Subscription'
export default function Home() {
  return (
    <div>
     <div id="description" className="space-sections"><Description/></div>
      <div id="iframe" className="space-sections"><Iframe/></div>
      <div id="why-cognicore" className="space-sections"><WhyCongicore/></div>
      <div id="features" className="space-sections"><Features/></div>
      <div id="subscription" className="space-sections"><Subscription/></div>
      <div id="help-guide" className="space-sections"><HelpGuid/></div>
    </div>
  )
}
