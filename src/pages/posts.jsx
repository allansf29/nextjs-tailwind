import React from 'react'
import Layout from '../components/Layout'
import CartIcon from '@/components/icons/CartIcon'
import ImgHamb from '../../public/assets/images/hamb-1.png'
import { Description } from '@mui/icons-material'

const productItems = [
  {
    name: "Hamburguer Smash",
    Description: "Pão levinho de fermentação natural da trigou, burger 160g, queijo prato e maionese da casa.",
    price: "18.90",
    img: '',
  },
  

]

const posts = () => {
  return (
    <Layout>
      <section>
        <h2 className='text-2x1 md:text-3x1 font-bold text-center mt-9 mb-6'>Conheça nosso menu</h2>
        <div id="menu">
          {productItems.map((item, index) => (
            <main key={index} className='grid grid-cols-1'>
              <div className='flex gap-2'>
                <img
                  src={item.img}
                  alt="Hamburguer Smash"
                  className='w-28 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300'
                />

                <div className='text-gray-600 dark:text-orange-300'>
                  <p className='font-bold'>{item.name}</p>
                  <p>Pão levinho de fermentação natural da trigou, burger 160g, queijo prato e maionese da casa.</p>

                  <div className='flex items-center gap-2 justify-between mt-3'>
                    <p className='font-bold text-lg'>R$ 18.90</p>
                    <button
                      className='bg-gray-900 px-5 rounded add-to-cart-btn'
                      data-name="Hamburguer Smash"
                      data-price="18.90"
                    >
                      <CartIcon />
                    </button>
                  </div>

                </div>

              </div>
            </main>
          ))}
        </div>
      </section>
    </Layout >
  )
}

export default posts