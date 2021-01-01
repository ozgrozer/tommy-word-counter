const wordsLengthSelector = document.getElementById('wordsLength')
const charactersLengthSelector = document.getElementById('charactersLength')
const facebookLengthSelector = document.getElementById('facebookLength')
const twitterLengthSelector = document.getElementById('twitterLength')
const googleLengthSelector = document.getElementById('googleLength')
const inputSelector = document.getElementById('input')

inputSelector.addEventListener('input', e => {
  const value = e.target.value

  const wordsLength = value.split(/[^\s*]\s+[^\s*]/).length
  const charactersLength = value.length

  wordsLengthSelector.innerHTML = wordsLength
  charactersLengthSelector.innerHTML = charactersLength

  facebookLengthSelector.innerHTML = 250 - charactersLength
  twitterLengthSelector.innerHTML = 280 - charactersLength
  googleLengthSelector.innerHTML = 300 - charactersLength
})
