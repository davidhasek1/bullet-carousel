import styled from 'styled-components'
import img2 from '../../images/turistika.jpeg'
import img3 from '../../images/sauna.jpeg'
import img4 from '../../images/ski-restaurant.jpeg'
import img5 from '../../images/wellness.jpeg'

import BulletCarousel from '../BulletCarousel'

const Wrapper = styled.div`
  background-color: #112436;
`
const Image = styled.img`
  width: 200px;
  height: 200px;
`
const Example = () => {
  const items = [
    { id: 0, img: img2 },
    { id: 1, img: img2 },
    { id: 2, img: img3 },
    { id: 3, img: img4 },
    { id: 4, img: img5 },
  ]
  return (
    <Wrapper>
      <BulletCarousel count={items.length}>
        {items.map((item, i) => {
          return (
            <div key={i}>
              <Image src={item.img} alt={i} />
            </div>
          )
        })}
      </BulletCarousel>
    </Wrapper>
  )
}

export default Example
