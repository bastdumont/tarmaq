import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('Tarmak App', () => {
  test('renders hero and 4 pills', () => {
    const { container } = render(<App />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
    const pills = container.querySelectorAll('.pill')
    expect(pills.length).toBe(4)
  })

  test('mobile menu opens and closes via backdrop and Esc', async () => {
    const user = userEvent.setup()
    const { container } = render(<App />)

    // open
    const burger = container.querySelector('.burger')
    await user.click(burger)
    const mobileMenu = container.querySelector('#mobileMenu')
    expect(mobileMenu.classList.contains('open')).toBe(true)

    // close via backdrop
    const backdrop = container.querySelector('.backdrop')
    await user.click(backdrop)
    expect(container.querySelector('#mobileMenu').classList.contains('open')).toBe(false)

    // reopen and close via Escape
    await user.click(burger)
    expect(container.querySelector('#mobileMenu').classList.contains('open')).toBe(true)
    await user.keyboard('{Escape}')
    expect(container.querySelector('#mobileMenu').classList.contains('open')).toBe(false)
  })
})
