import React, { useRef } from 'react'
import styled from 'styled-components'
import ScrollIndicator from './ScrollIndicator'

const MainWrapper = styled.div``
const CarouselContainer = styled.div`
  gap: ${(props) => (props.gap ? `${props.gap}px` : 0)};
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`
const BulletCarousel = ({ count, gap, children }) => {
  const target = useRef()

  return (
    <MainWrapper>
      <CarouselContainer ref={target} gap={gap}>
        {children}
      </CarouselContainer>
      <ScrollIndicator count={count} target={target} />
    </MainWrapper>
  )
}

export default BulletCarousel
