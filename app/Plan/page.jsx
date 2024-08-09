import React from 'react'
import './plan.css'
import Footer from '../Footer/page'
import Header from '../Header/page'

const Plan = () => {
  return (
    <div>
      <Header/>
        <div className='responsive-container'>
            <img className='responsive-image' src="plan.png" alt="" />
            <div className='text-overlay'>
                <h1 className='text-h1'>𝗚𝗿𝗲𝗮𝘁 𝗰𝗼𝗳𝗳𝗲𝗲 <br />
                 𝗺𝗮𝗱𝗲 𝘀𝗶𝗺𝗽𝗹𝗲.</h1>
                 <p className='text-p'>Start your mornings with the world’s best coffees. Try our <br />
                  expertly curated artisan coffees from our best roasters <br />
                   delivered directly to your door, at your schedule.</p>
                   <button className='button-1'>𝗖𝗿𝗲𝗮𝘁𝗲 𝘆𝗼𝘂𝗿 𝗽𝗹𝗮𝗻</button>
            </div>
        </div>
        <div className='responsive-2'>
          <div className='responsive-card'>
            <img className='img-card' src="espresso.png" alt="" />
            <h2 className='text-card'>𝑮𝒓𝒂𝒏 𝑬𝒔𝒑𝒓𝒆𝒔𝒔𝒐</h2>
            <p className='text-card1'>Light and flavorful blend with cocoa <br />
             and black pepper for an intense <br />
              experience.</p>
          </div>
          <div className='responsive-card'>
            <img className='img-card' src="planato.png" alt="" />
            <h2 className='text-card'>𝑷𝒍𝒂𝒏𝒂𝒍𝒕𝒐</h2>
            <p className='text-card1'>Brazilian dark roast with rich and <br />
             velvety body, and hints of fruits and <br />
              nuts.</p>
          </div>
          <div className='responsive-card'>
            <img className='img-card' src="pikollo.png" alt="" />
            <h2 className='text-card'>𝑷𝒊𝒄𝒄𝒐𝒍𝒍𝒐</h2>
            <p className='text-card1'>Mild and smooth blend featuring <br />
             notes of toasted almond and dried <br />
              cherry.</p>
          </div>
          <div className='responsive-card'>
            <img className='img-card' src="danche.png" alt="" />
            <h2 className='text-card'>𝑫𝒂𝒏𝒄𝒉𝒆</h2>
            <p className='text-card1'>Ethiopian hand-harvested blend <br />
             densely packed with vibrant fruit <br />
              notes.</p>
          </div>
        </div>
        <div className='responsive-3'>
          <h1 className='g1'>𝑾𝒉𝒚 𝒄𝒉𝒐𝒐𝒔𝒆 𝒖𝒔?</h1>
          <p className='g2'>A large part of our role is choosing which particular coffees will be featured <br />
            in our range. This means working closely with the best coffee growers to give <br />
            you a more impactful experience on every level.</p>
            <div className='responsive-4'>
              <div className='card6'>
                <img className='shape' src="shape.png" alt="" />
                <div className='shape-div'>
                <h2 className='shape-text'>𝑩𝒆𝒔𝒕 𝒒𝒖𝒂𝒍𝒊𝒕𝒚</h2>
                <p className='shape-text1'>Discover an endless variety of the <br />
                 world’s best artisan coffee from each <br />
                  of our roasters.</p>
                  </div>
              </div>
              <div className='card6'>
                <img className='shape' src="shape1.png" alt="" />
                <div className='shape-div'>
                <h2 className='shape-text'>𝑬𝒙𝒄𝒍𝒖𝒔𝒊𝒗𝒆 𝒃𝒆𝒏𝒆𝒇𝒊𝒕𝒔</h2>
                <p className='shape-text1'>Special offers and swag when <br />
                 you subscribe, including 30% <br />
                  off your first shipment.</p>
                  </div>
              </div>
              <div className='card6'>
                <img className='shape' src="shape2.png" alt="" />
                <div className='shape-div'>
                <h2 className='shape-text'>𝑭𝒓𝒆𝒆 𝒔𝒉𝒊𝒑𝒑𝒊𝒏𝒈</h2>
                <p className='shape-text1'>We cover the cost and coffee <br />
                 is delivered fast. Peak <br />
                  freshness: guaranteed.</p>
                  </div>
              </div>
            </div>
        </div>
       
        <div className='responsive-5'>
          <div className='card5'>
            <h1 className='s1'>01</h1>
            <h1 className='s2'>𝑷𝒊𝒄𝒌 𝒚𝒐𝒖𝒓 <br />
             𝒄𝒐𝒇𝒇𝒆𝒆</h1>
             <p className='s3'>Select from our evolving range of artisan <br />
               coffees. Our beans are ethically sourced <br />
                and we pay fair prices for them. There are <br />
                 new coffees in all profiles every month <br />
                  for you to try out.</p>
          </div>
          <div className='card5'>
            <h1 className='s1'>02</h1>
            <h1 className='s2'>𝑪𝒉𝒐𝒐𝒔𝒆 𝒕𝒉𝒆 <br />
             𝒇𝒓𝒆𝒒𝒖𝒆𝒏𝒄𝒚</h1>
             <p className='s3'>Customize your order frequency, <br />
              quantity, even your roast style and grind <br />
               type. Pause, skip or cancel your <br />
                subscription with no commitment <br />
                 through our online portal.</p>
          </div>
          <div className='card5'>
            <h1 className='s1'>03</h1>
            <h1 className='s2'>𝑹𝒆𝒄𝒆𝒊𝒗𝒆 𝒂𝒏𝒅 <br /> 𝒆𝒏𝒋𝒐𝒚!</h1>
             <p className='s3'>We ship your package within 48 hours, <br />
              freshly roasted. Sit back and enjoy <br />
               award-winning world-class coffees <br />
                curated to provide a distinct tasting <br />
                 experience.</p>
          </div>
        </div>
        <button className='button-2'>𝗖𝗿𝗲𝗮𝘁𝗲 𝘆𝗼𝘂𝗿 𝗽𝗹𝗮𝗻</button>

        <Footer/>
    </div>
  )
}

export default Plan