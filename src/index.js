import { css } from './styled-system/css'

const button = document.createElement('button')
button.textContent = 'Hello world'
button.className = css({
  _hover: { bg: 'slate.200' },
  _focus: { bg: 'slate.300' },
})
document.body.appendChild(button)
