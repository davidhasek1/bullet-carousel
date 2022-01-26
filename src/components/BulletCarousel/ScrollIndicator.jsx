import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Bullets = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  border: 1px solid #797979;
  background-color: ${(props) => props.active && '#797979'};
`

const ScrollIndicator = ({ target, count }) => {
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollListener = () => {
    if (!target.current) {
      return
    }
    const element = target.current
    const windowScroll = element.scrollLeft // Vzdálenost zleva 0 doprava 100
    //scrollWidth - celková délka jako součet velikostí itemů vedle sebe
    //clientWidth - šířka display zařízení
    const totalWidth = element.scrollWidth - element.clientWidth // celková délka - délka obrazovky = celková délka kam se ještě dá scrollovat

    if (windowScroll === 0) {
      return setScrollProgress(0)
    }
    if (windowScroll > totalWidth) {
      return setScrollProgress(100)
    }

    setScrollProgress((windowScroll / totalWidth) * 100) //percentage value - progress through whole scrollabel area
  }

  useEffect(() => {
    target.current.addEventListener('touchmove', scrollListener)
    return () =>
      target.current &&
      target.current.removeEventListener('touchmove', scrollListener)
  })

  const renderDots = () => {
    const selectedDotValue = (scrollProgress * count) / 100
    return [...Array(count).keys()].map((index) => (
      <Dot
        key={index}
        active={selectedDotValue >= index && selectedDotValue <= index + 1}
      />
    ))
  }

  return <Bullets>{renderDots()}</Bullets>
}

export default ScrollIndicator
