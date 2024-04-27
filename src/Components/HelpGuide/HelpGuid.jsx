import React from 'react';
import Cards from '../Cards/Cards';
import Coeur from "../../assets/heart.svg";
import Credit from "../../assets/credit-card.svg";
import DataProtection from "../../assets/DataProtection.svg";
import lightning from "../../assets/lightning.svg";
import postbox from "../../assets/post-box-usa.svg";
import search from "../../assets/search.svg";
import rocket from "../../assets/rocket.svg";
import desktop from "../../assets/Frame21.svg"
import "./HelpGuide.css";

export default function HelpGuid() {
  const data = [
    {
      "icon": "/assets/post-box-usa.svg",
      "title": "Account Setup",
      "description": "How to download our apps, manage your inbox, and add your email accounts."
    },
    {
      "icon": "/assets/credit-card.svg",
      "title": "Billing",
      "description": "Manage your subscription, create a team subscription, or update your payment method"
    },
    {
      "icon": "/assets/heart.svg",
      "title": "Support",
      "description": "Common questions and solutions"
    },
    {
      "icon": "/assets/lightning.svg",
      "title": "Features",
      "description": "Overviews of our most powerful and popular features "
    },
    {
      "icon": "/assets/search.svg",
      "title": "Integrations",
      "description": "How to integrate COGNICORE to your GED system"
    }
  ];

  const getImage = (icon) => {
    switch (icon) {
      case '/assets/heart.svg':
        return Coeur;
      case '/assets/credit-card.svg':
        return Credit;
      case '/assets/DataProtection.svg':
        return DataProtection;
      case '/assets/lightning.svg':
        return lightning;
      case '/assets/post-box-usa.svg':
        return postbox;
      case '/assets/search.svg':
        return search;
      default:
        return null;
    }
  };

  return (
    <div className='helpguide'>
        <h3 className='help'>Guide</h3>
        <div className='allguide'>
            <div className='leftside2'>
               <img src={rocket} alt="" className='rocket' />
               <div>
               <h4>Become COGNICORIAN</h4>
               <p>Learn to become a power user of COGNICOR in 15 minutes or less</p>
               </div>
            </div>
            <img src={desktop} alt="" className='desktop' />
        </div>
        <div className='helpsection'>
          <h3 className='help' >Help Articles</h3>
          <div className="card-grid">
            {data.map((card, index) => (
             <Cards
               key={index}
               icon={getImage(card.icon)} 
               title={card.title}
               description={card.description}
               className="cards"
             />
            ))}
         </div>
       </div>
    </div>
  );
}
