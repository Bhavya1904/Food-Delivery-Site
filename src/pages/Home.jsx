import React, { useContext, useState } from 'react'
import Nav from '../component/Nav.jsx'
import { categories } from '../Categories.jsx'
import Card from '../component/Card.jsx'
import { food_items } from '../food.js'
import { dataContext } from '../context/UserContext.jsx'
import { RxCross2 } from "react-icons/rx"
import Card2 from '../component/Card2.jsx'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'


const Home = () => {
  let { cat, setCat, input, setInput, showCart, setShowCart } = useContext(dataContext)

  function filter(category) {
    if (category === "All") {
      setCat(food_items);
    } else {
      let newList = food_items.filter((item) => (item.food_category === category))
      setCat(newList)
    }
  }

  let items = useSelector(state => state.cart)

  let subTotal = items.reduce((total, item) => total + item.qty * item.price, 0);
  let deliveryFee = 20;
  let taxes = subTotal * 0.5 / 100;
  let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div className='bg-slate-200 w-full min-h-screen'>
      <Nav />
      {!input ? <div className='flex flex-wrap justify-center items-center gap-5 w-full'>
        {categories.map((item) => {
          return <div className='w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 justify-start text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200' onClick={() => filter(item.name)}>
            {item.image}
            {item.name}
          </div>
        })}
      </div> : null}

      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {cat.length > 1 ? cat.map((item) => (
          <Card name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        )) :
          <div className='text-3xl text-gray-500 font-semibold'>
            No dish found
          </div>}

      </div>

      <div className={` w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 flex flex-col items-center transition-all duration-400 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>
        <header className='w-full flex justify-between items-center'>
          <span className='text-green-400  text-2xl font-semibold'> Order Items</span>
          <RxCross2 className='w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600 ' onClick={() => {
            setShowCart(false)
          }} />
        </header>
        {items.length > 0 ? <>
          <div className='w-full mt-9 flex flex-col gap-7'>
            {items.map((item) => (
              <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
            ))}
          </div>
          <div className='w-full border-top-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
            <div className='w-full flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-bold'>Subtotal</span>
              <span className='text-green-400 font-semibold text-lg'>₹{subTotal}</span>
            </div>
            <div className='w-full flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-bold'>Delivery Fee</span>
              <span className='text-green-400 font-semibold text-lg'>₹{deliveryFee}</span>
            </div>
            <div className='w-full flex justify-between items-center'>
              <span className='text-lg text-gray-600 font-bold'>Taxes</span>
              <span className='text-green-400 font-semibold text-lg'>₹{taxes}</span>
            </div>
          </div>
          <div className='w-full flex justify-between items-center p-8'>
            <span className='text-2xl text-gray-600 font-bold'>Total</span>
            <span className='text-green-400 font-semibold text-2xl'>₹{total}</span>
          </div>
          <button className='w-[80%] p-3 bg-green-500 font-semibold rounded-lg text-white hover:bg-green-400 transition' onClick={() => {
            toast("Order Placed")
          }}>
            Place Order
          </button>
        </> :
          <div className='text-center text-2xl text-green-500 font-semibold pt-10'>
            Empty Cart
          </div>
        }

      </div>
      {/* last line  */}
      <div className='relative mt-16 py-12 bg-gradient-to-t from-slate-300 to-slate-200'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(34,197,94,0.05)_100%)]'></div>
        <div className='relative flex flex-col items-center justify-center space-y-4'>
          <div className='text-slate-600 text-xl font-light tracking-wide'>Designed & Developed by</div>
          <a
            href="https://github.com/Bhavya1904/"
            className='group relative text-5xl font-black text-slate-700 hover:text-green-600 transition-colors duration-300'
          >
            <span className='relative z-10'>Bhavya</span>
            <div className='absolute inset-0 bg-green-500/20 blur-xl scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full'></div>
          </a>
          <div className='flex space-x-1'>
            <div className='w-16 h-0.5 bg-green-500 rounded-full'></div>
            <div className='w-4 h-0.5 bg-green-400 rounded-full'></div>
            <div className='w-8 h-0.5 bg-green-300 rounded-full'></div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home