import React from 'react'
import fresh from "../assets/icons/fresh.png"
import authentic from "../assets/icons/authentic.png"
import pakistan from "../assets/icons/pakistan.png"

import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]


export const products_url = '/.netlify/functions/airtable'

export const single_product_url = `/.netlify/functions/airtable?id=`
