import styled from 'styled-components'
//@ts-ignore
import img2 from '../../images/restaurant.jpeg'
//@ts-ignore
import img3 from '../../images/sauna.jpeg'
//@ts-ignore
import img4 from '../../images/ski-restaurant.jpeg'
//@ts-ignore
import img5 from '../../images/wellness.jpeg'

import BulletCarousel from '.'
import CloningElements from '../Cloner'

const Wrapper = styled.div`
  background-color: #112436;
`
const Image = styled.img`
  width: 200px;
  height: 200px;
`
const Example = () => {
  const items: any[] = [
    { id: 1, img: img2 },
    { id: 2, img: img3 },
    { id: 3, img: img4 },
    { id: 4, img: img5 },
  ]
  return (
    <Wrapper>
      <BulletCarousel count={items.length} gap={0}>
        <CloningElements>
          {items.map((item, i) => {
            return (
              <div key={i}>
                <Image src={item.img} alt={i} />
              </div>
            )
          })}
        </CloningElements>
      </BulletCarousel>
    </Wrapper>
  )
}

export default Example
