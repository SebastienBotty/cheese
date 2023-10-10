import React from 'react'
import "./Home.css"

export default function Home() {
  return (
    <div className='Home'>
      <div className='imgBieres'>
        <img src='bieres.png'/>
      </div>

      <div className='Services'>
        <h1>Nos Services</h1>
        Tous nos services se font à domicile.<br/>
        Nous nous basons sur la qualité des produits et des accords<br/>
        Tous les produits transformés sont faits maison.
        <div className='services wrapper'>
          <div className='animation'>
            <img src='animation.png'/>
            <h2>Animation-25€/personne</h2>
            5 bières - fromages <br/>
            Découvrir des produits<br/>
            Apprendre à déguster une bière<br/>
            Découvrir le beerpairing<br/>
            -<br/>
            A partir de 12 peronnes<br/>
            <button className='bouttonReserver'>Réserver</button>

          </div>
          <div className='repas'>
            <img src='repas.png'/>
           <h2> Repas - 50€/ personnes</h2>
           Croquette Cheese & Beer et sa bière<br/>
           3 ardoises de fromages et leur(s) bières<br/>
           Mousse au chocolat et sa bière<br/>
           Plaisir, gourmandise,originalité<br/>
           -<br/>
           A partir de 8 personnes <br/>
           <button className='bouttonReserver'>Réserver</button>
          </div>
        </div>
      </div>
      <div className='cheeseAndBeers'>
        <h1> Les croquettes Cheese & Beers</h1>
        <div className='croquetteWrapper'>
            
          <div className='croquetteImg'/>
            <div className='imgG'>
              <img src="croquetteGauche.png"/>
            </div>
            <div className='imgD'>
              <img src='croquetteDroit.png'/>
            </div>

          <div className='croquetteTxt'>
            Nos croquettes Cheese & Beers sont 
            réalisées directement à la ferme de 
            Thoricourt avec le lait et le fromage de 
            celle-ci. La bière utilisée est la Blaca, un 
            Stout bio de la brasserie Superfood Beers,
            à Mons.<br/>
            Envie d'en déguster ou d'en savoir plus ?<br/>

            <button className='rdv'> Rendez-vous ici</button>
          </div>
        </div>
      </div>
    </div>
  )
}
