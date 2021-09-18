import Hello from 'components/Hello'

import * as S from './styles'

const Home = () => (
  <S.Container>
    <S.Header>
      <Hello text="Hello!" />
    </S.Header>
  </S.Container>
)

export default Home
