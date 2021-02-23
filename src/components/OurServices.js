import React from "react"
import styled from "styled-components"
import Title from "./Title"
import ourServices from "../utils/ourServices"

const OurServices = () => {
    return (
        <Wrapper className="section">
    
          <Title title="Our Services" />
          <div className="section-center">
            {ourServices.map(({ id, icon, label, text }) => {
              return (
                <article key={id}>
                  <span>{icon}</span>
                  <h4>{label}</h4>
                  <p>{text}</p>
                </article>
              )
            })}
          </div>
        </Wrapper>
      )
    }
    const Wrapper = styled.section`
      .section-center {
        margin-top: 4rem;
        display: grid;
        gap: 2rem;
        /* safari workaround */
        grid-gap: 12rem;
        .icon {
          font-size: 4rem;
          color: var(--clr-primary-5);
          margin-bottom: 1rem;
          width: 70%;
        }
        h4 {
          text-transform: uppercase;
          font-weight: 500;
        }
        p {
          color: var(--clr-grey-3);
          max-width: 35em;
        }
        @media (min-width: 100px) {
          grid-template-columns: repeat(1, 1fr 1fr 1fr);
          width: 100%;
          grid-gap: 1rem;
        }
        @media (min-width: 768px) {
          grid-template-columns: repeat(1, 1fr 1fr 1fr);
          width: 70%;
        }
        @media (min-width: 992px) {
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 10rem;
        }
        @media (min-width: 1200px) {
          grid-template-columns: repeat(1fr);
        }
      }
    `
export default OurServices
