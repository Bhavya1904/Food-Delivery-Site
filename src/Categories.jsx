import {TiThSmallOutline} from 'react-icons/ti'
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from 'react-icons/md'
import { TbSoup } from 'react-icons/tb'
import { CiBowlNoodles } from 'react-icons/ci'
import { GiFullPizza, GiHamburger } from 'react-icons/gi'

export const categories = [
    {
        id: 1,
        name: "All",
        image: <TiThSmallOutline className='w-[60px] h-[60px] text-green-600'/>
    },
    {
        id: 2,
        name: "breakfast", // Changed from "BreakFast" to "breakfast"
        image: <MdOutlineFreeBreakfast className='w-[60px] h-[60px] text-green-600'/>
    },
    {
        id: 3,
        name: "soups", // Changed from "Soups" to "soups"
        image: <TbSoup className='w-[60px] h-[60px] text-green-600'/>
    },
    {
        id: 4,
        name: "pasta", // Changed from "Pasta" to "pasta"
        image: <CiBowlNoodles className='w-[60px] h-[60px] text-green-600'/>
    },
    {
        id: 5,
        name: "main_course", // Changed from "Main Course" to "main_course"
        image: <MdOutlineFoodBank className='w-[60px] h-[60px] text-green-600'/>
    },
    {
        id: 6,
        name: "pizza", // Changed from "Pizza" to "pizza"
        image: <GiFullPizza className='w-[60px] h-[60px] text-green-600'/>
    },
    {
        id: 7,
        name: "burger", // Changed from "Burger" to "burger"
        image: <GiHamburger className='w-[60px] h-[60px] text-green-600'/>
    }  
]