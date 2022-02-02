import React, { cloneElement, ReactElement } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const CloningElements = (props: { children: any }) => {
  return (
    <Wrapper>
      {React.Children.map(props.children, (child: ReactElement, index) => {
        return cloneElement(child, { key: index })
      })}
    </Wrapper>
  )
}

export default CloningElements
