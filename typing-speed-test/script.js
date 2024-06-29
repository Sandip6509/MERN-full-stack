const typingText = document.querySelector('.typing-text p')
const input = document.querySelector('.wrapper .input-field')
const time = document.querySelector('.time span b')
const mistakes = document.querySelector('.mistake span')
const wpm = document.querySelector('.wpm span')
const cpm = document.querySelector('.cpm span')
const btn = document.querySelector('button')

/**
 * Set Value
 */
let timer
let maxTime = 60
let timeLeft = maxTime
let charIndex = 0
let mistake = 0
let isTyping = false

/**
 * Laod Paragraph
 */
function loadParagraph() {
  const paragraph = [
    "I found it necessary to get a loan.",
    "I hope that you will get well soon.",
    "Let's get together again next year.",
    "What grade did you get on the test?",
    "He will accept any money he can get.",
    "How can I get to the police station?",
    "How did you get to know that person?",
    "How do I get my dog to eat dog food?",
    "I should go home and get some sleep.",
    "I thought you had to get up by 7:30.",
    "Ken makes it a rule to get up early.",
    "When will you get through with work?",
    "I plan to get a job as soon as I can.",
    "She advised him to get more exercise.",
    "I think it's time for me to get a dog.",
    "I think it's time for me to get a job."
  ]

  const randomIndex = Math.floor(Math.random() * paragraph.length)

  typingText.innerHTML = ''

  for (const char of paragraph[randomIndex]) {
    typingText.innerHTML += `<span>${char}</span>`
  }
  typingText.querySelectorAll('span')[0].classList.add('active')
  document.addEventListener('keydown', () => input.focus())
  typingText.addEventListener('click', () => {
    input.focus()
  })
}

/**
 * Handle User Input
 */
function initTyping() {
  const char = typingText.querySelectorAll('span')
  const typedChar = input.value.charAt(charIndex)

  if (charIndex < char.length && timeLeft > 0) {
    if (!isTyping) {
      timer = setInterval(initTime, 1000)
      isTyping = true
    }

    if (char[charIndex].innerText === typedChar) {
      char[charIndex].classList.add('correct')
    } else {
      mistake++
      char[charIndex].classList.add('incorrect')
    }

    char[charIndex].classList.remove('active')
    charIndex++

    if (charIndex < char.length) {
      char[charIndex].classList.add('active')
    }
    mistakes.innerText = mistake
    cpm.innerText = charIndex - mistake
  } else {
    clearInterval(timer)
    input.value = ''
  }
}

/**
 * get Timer
 */
function initTime() {
  if (timeLeft > 0) {
    timeLeft--
    time.innerText = timeLeft
    let wpmVal = Math.round(
      ((charIndex - mistake) / 5) / (maxTime - timeLeft) * 60
    )
    wpm.innerText = wpmVal
  } else {
    clearInterval(timer)
  }
}

/**
 * Reset paragraph
 */
function reset() {
  loadParagraph()
  clearInterval(timer)
  timeLeft = maxTime
  charIndex = 0
  mistake = 0
  isTyping = false
  wpm.innerText = 0
  cpm.innerText = 0
  mistake.innerText = 0
}
input.addEventListener('input', initTyping)
btn.addEventListener('click', reset)
loadParagraph()
