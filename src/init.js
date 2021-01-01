const wordsLengthSelector = document.getElementById('wordsLength')
const charactersLengthSelector = document.getElementById('charactersLength')
const facebookLengthSelector = document.getElementById('facebookLength')
const twitterLengthSelector = document.getElementById('twitterLength')
const googleLengthSelector = document.getElementById('googleLength')
const inputSelector = document.getElementById('input')
const mostUsedWordsSelector = document.getElementById('mostUsedWords')

const countOccurences = (words, word) => {
  let count = 0
  for (const key in words) {
    const wordItem = words[key]
    if (wordItem === word) count++
  }
  return count
}

inputSelector.addEventListener('input', e => {
  const value = e.target.value.toLowerCase()

  const wordsLength = value ? value.match(/[\u00ff-\uffff]|\S+/g).length : 0
  const charactersLength = value.length

  wordsLengthSelector.innerHTML = wordsLength
  charactersLengthSelector.innerHTML = charactersLength

  facebookLengthSelector.innerHTML = 250 - charactersLength
  twitterLengthSelector.innerHTML = 280 - charactersLength
  googleLengthSelector.innerHTML = 300 - charactersLength

  const words = value.split(' ').filter(w => w !== '')

  const allWords = []
  const mostUsedWords = {}
  for (const key in words) {
    const word = words[key].replace(/\./g, '')
    allWords.push(word)
    mostUsedWords[word] = 0
  }

  const mostUsedWordsArray = []
  for (const word in mostUsedWords) {
    const count = countOccurences(allWords, word)
    mostUsedWordsArray.push({ word, count })
  }

  mostUsedWordsArray.sort((a, b) => {
    return b.count - a.count
  })

  let mostUsedWordsString = ''
  for (const key in mostUsedWordsArray) {
    const wordItem = mostUsedWordsArray[key]
    const word = wordItem.word
    const count = wordItem.count
    mostUsedWordsString += `<div class="word"><span>${word}</span><b>${count}</b></div>`
  }

  mostUsedWordsSelector.innerHTML = mostUsedWordsString
})
