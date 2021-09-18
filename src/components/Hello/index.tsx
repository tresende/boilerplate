import * as S from './styles'

export type HelloProps = {
  text: string
}

const Star = ({ text }: HelloProps) => <S.Container>{text}</S.Container>

export default Star
