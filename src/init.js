const wordsLengthSelector = document.getElementById('wordsLength')
const charactersLengthSelector = document.getElementById('charactersLength')
const facebookLengthSelector = document.getElementById('facebookLength')
const twitterLengthSelector = document.getElementById('twitterLength')
const googleLengthSelector = document.getElementById('googleLength')
const inputSelector = document.getElementById('input')
const mostUsedWordsSelector = document.getElementById('mostUsedWords')

inputSelector.addEventListener('input', e => {
  const value = e.target.value.toLowerCase()

  const wordsLength = value.match(/[\u00ff-\uffff]|\S+/g).length
  const charactersLength = value.length

  wordsLengthSelector.innerHTML = wordsLength
  charactersLengthSelector.innerHTML = charactersLength

  facebookLengthSelector.innerHTML = 250 - charactersLength
  twitterLengthSelector.innerHTML = 280 - charactersLength
  googleLengthSelector.innerHTML = 300 - charactersLength

  const mostUsedWords = {}
  const words = value.split(' ').filter(w => w !== '')
  for (const key in words) {
    const word = words[key].replace(/\./g, '')
    const count = value.split(word).length - 1
    mostUsedWords[word] = count
  }

  let mostUsedWordsString = ''
  for (const word in mostUsedWords) {
    const count = mostUsedWords[word]
    mostUsedWordsString += `<div class="word"><span>${word}</span><b>${count}</b></div>`
  }

  mostUsedWordsSelector.innerHTML = mostUsedWordsString
})
