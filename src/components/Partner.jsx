import React from 'react'
import './Partner.css'
import calle from '../assets/image 8.png'
import meem from '../assets/image 9.png'

const Partner = () => {
  return (
    <div className="partner-main">

      <div className="container-partner">
        
        <div className="content-partner">
            <h2 className="heading-partner">
                HOW PARTNERSHIP WORKS
            </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam et repellat eligendi, distinctio assumenda praesentium, quis aliquam beatae asperiores nemo suscipit delectus labore autem qui hic quasi ipsam odit quidem!
            Excepturi distinctio cupiditate delectus atque amet omnis modi, molestiae, nam repellendus aut ducimus tempora eveniet iure deserunt possimus magni adipisci, ex quam voluptatem ullam corrupti ea officiis placeat. Autem, laboriosam.
            Numquam nam nulla vel officiis eveniet, nisi doloremque magnam blanditiis illo sit debitis cupiditate repellat praesentium fuga, nesciunt facere saepe labore impedit id iste eligendi, quia necessitatibus. Similique, quibusdam reprehenderit.
            Laboriosam sunt saepe ad magni animi. Provident sapiente voluptate rerum dicta delectus voluptatibus. Excepturi exercitationem, reprehenderit placeat earum quisquam recusandae dolore nostrum iusto facere voluptas optio unde dolorem sapiente perferendis.
            Aliquid perferendis ipsa facilis eveniet soluta, natus, esse alias cumque, iste ducimus modi ab praesentium quod vel sint quam! Id, voluptatem repellat! Officiis eaque minima repellendus unde, sequi nihil maxime?
            Nemo numquam fuga aspernatur rerum doloremque rem quos molestias voluptate temporibus sint officiis laudantium hic perferendis dignissimos dicta sed, voluptatem impedit quo modi odit facere. Deleniti ad deserunt praesentium vel!
            Nihil quisquam maxime veniam nisi, rerum recusandae, excepturi ad blanditiis voluptatem debitis tempore eveniet, harum sint repellat perferendis quia nam officia eaque. Eius saepe consequatur itaque, quae sunt sapiente quasi.
            Placeat fugiat quam repellendus facilis quas at repudiandae nam illum, perspiciatis perferendis laudantium quidem earum natus, officiis inventore debitis accusantium vel tempora praesentium deleniti eius quis? Deleniti vitae repellendus quae?</p>
        </div>
        <img src="" alt="Partner Image" className='image-partner' />
      </div>
    
    <div className="people-partner-main">

      <div className="people-partner">
        <div className="producer-partner">
            <img className = 'pro-image' src="" alt="Production Image" />
            <p>Film Makers/ Producers</p>
        </div>

        <div className="ott-partner">
            <img className = 'pro-image' src="" alt="Ott platform" />
            <p>Distributors / OTT / Buyers</p>
        </div>
      </div>
    </div>

    <div className="our-partners-main">
      <div className="our-partners">
        <h2 className="heading-partner">
            OUR PARTNER
        </h2>
        <div className="partner-info">
            <div className='partner'>
                <img className="p-images" src={calle} alt="calle vapor" />
                <h3>Calle Vapor</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam officia recusandae perferendis fugiat quae nihil quos, magnam explicabo ipsam accusantium voluptate eos quod deserunt, harum officiis qui dolore tempora?</p>
            </div>

            <div className="partner">
                <img className="p-images" src="" alt="DINESH NARRA" />
                <h3>Dinesh Narra Photography</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam officia recusandae perferendis fugiat quae nihil quos, magnam explicabo ipsam accusantium voluptate eos quod deserunt, harum officiis qui dolore tempora?</p>
            </div>

            <div className="partner">
                <img className="p-images" src = {meem} alt="Mee Meemulu" />
                <h3>Mee Meemulu</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quam officia recusandae perferendis fugiat quae nihil quos, magnam explicabo ipsam accusantium voluptate eos quod deserunt, harum officiis qui dolore tempora?</p>
            </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default Partner
