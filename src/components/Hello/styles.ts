import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-right: ${theme.spacings.small};
  `}
`
