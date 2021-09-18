import { render } from 'utils/test-utils'
import Home from '.'

describe('<Home />', () => {
  it('should open modal', () => {
    const { container } = render(<Home />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
