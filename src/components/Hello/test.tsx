import { render } from 'utils/test-utils'
import Component from '.'

describe('<Component />', () => {
  it('should render component correctly', () => {
    const { container } = render(<Component text="Hello!" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
