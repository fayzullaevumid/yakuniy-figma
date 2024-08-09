import React from 'react'
import './about.css'

import Footer from '../Footer/page'
import Header from '../Header/page'

const About = () => {
  return (
    <div>
      <Header/>
      <div className='container'>
        <img className='image2' src="about.jpg" alt="" />
        <div className='texts'>
        <h1 className='t2'>𝗔𝗯𝗼𝘂𝘁 𝗨𝘀</h1>
        <p className='t1'>Coffeeroasters began its journey of exotic discovery in 1999,<br /> 
          highlighting stories of coffee from around the world. We have <br />
           since been dedicated to bring the perfect cup - from bean to <br />
           brew - in every shipment.</p>
           </div>
      </div>
      <div className='container-2'>
        <div className='karobka'>
        <img className='cofe' src="cofe.png" alt="" />
        <div>
          <h1 className='t4'>𝗢𝘂𝗿 𝗰𝗼𝗺𝗺𝗶𝘁𝗺𝗲𝗻𝘁</h1>
          <p className='t3'>We’re built on a simple mission and a commitment to doing good along the <br />
           way. We want to make it easy for you to discover and brew the world’s best <br />
            coffee at home. It all starts at the source. To locate the specific lots we want <br />
             to purchase, we travel nearly 60 days a year trying to understand the <br />
              challenges and opportunities in each of these places. We collaborate with <br />
               exceptional coffee growers and empower a global community of farmers <br />
               through with well above fair-trade benchmarks. We also offer training, support <br />
                farm community initiatives, and invest in coffee plant science. Curating only <br />
                 the finest blends, we roast each lot to highlight tasting profiles distinctive to <br />
                  their native growing region.</p>
        </div>
        </div>
      </div>
     <div className='header'>
      <div className='head-nav'>
        <h1 className='t5'>𝗨𝗻𝗰𝗼𝗺𝗽𝗿𝗼𝗺𝗶𝘀𝗶𝗻𝗴 𝗾𝘂𝗮𝗹𝗶𝘁𝘆</h1>
        <p className='t6'>Although we work with growers who pay close attention to all stages of <br />
         harvest and processing, we employ, on our end, a rigorous quality control <br />
          program to avoid over-roasting or baking the coffee dry. Every bag of coffee is <br />
           tagged with a roast date and batch number. Our goal is to roast consistent,<br />
            user-friendly coffee, so that brewing is easy and enjoyable.</p>
      </div>
      <img className='abot' src="abot.png" alt="" />
     </div>
     <h2 className='m1'>𝗢𝘂𝗿 𝗵𝗲𝗮𝗱𝗾𝘂𝗮𝗿𝘁𝗲𝗿𝘀</h2>
     <div className='header-2'>
       <div className='card-header'>
        <img className='icon-header' src="usa.png" alt="" />
        <h1 className='text-header'>𝗨𝗻𝗶𝘁𝗲𝗱 𝗞𝗶𝗻𝗴𝗱𝗼𝗺</h1>
        <p className='text-header-2'>68  Asfordby Rd <br />
           Alcaston <br />
           SY6 1YA <br />
           +44 1241 918425</p>
       </div>
       <div className='card-header'>
        <img className='icon-header' src="canada.png" alt="" />
        <h1 className='text-header'>𝗖𝗮𝗻𝗮𝗱𝗮</h1>
        <p className='text-header-2'>1528  Eglinton Avenue <br />
           Toronto <br />
           Ontario M4P 1A6 <br />
           +1 416 485 2997</p>
       </div>
       <div className='card-header'>
        <img className='icon-header' src="australia.png" alt="" />
        <h1 className='text-header'>𝗔𝘂𝘀𝘁𝗿𝗮𝗹𝗶𝗮</h1>
        <p className='text-header-2'>36 Swanston Street <br />
           Kewell <br />
           Victoria <br />
           +61 4 9928 3629</p>
       </div>
     </div>
      <Footer/>
    </div>
  )
}

export default About;