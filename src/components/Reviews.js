
import styled from 'styled-components'
import { PageHero } from '../components'
import hero2 from '../assets/hero2.png'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const url = '/.netlify/functions/reviews'
const AboutPage = () => {



  const [products, setProducts] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url)
      setProducts(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  // const { fields } = product
  // const { name, quote, stars} = fields
return (

  <div className='products'>
  {products.map((product) => {
    const { id, name, quote, stars } = product
    return (
      <h2>{name}</h2>
      // {name}
      // <Link to={`/${id}`} className='product' key={id}>
      //   <img src={url} alt={name} />
      //   <div className='info'>
      //     <h5>{name}</h5>
      //     <h5 className='price'>${price}</h5>
      //   </div>
      // </Link>
    )
  })}
</div>

)

  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={hero2} alt='nice desk' />
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </article>
      </Wrapper>
    </main>
  )
}
const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
