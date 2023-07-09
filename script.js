const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []

// show loading
function loading() {
    loader.hidden = false
    quoteContainer.hidden = true
}
// show loading
function loaded() {
    loader.hidden = true
    quoteContainer.hidden = false
}

// show new quote
function newQuote() {
    loading()
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    //
    if (quote.author) {
        authorText.textContent = quote.author
    } else {    // make unknown author showing as 'unknown'
        authorText.textContent = 'Unknown'
    }
    // make quote length to dynamic styling
    if (quoteText.length > 80) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text
    loaded()
}
// get quotes from API
async function getQuotes() {
    loading()
    const apiurl = 'https://type.fit/api/quotes'
    // const apiurl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiurl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        // error
    }
}

// Twitter quote
function twitterQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

// event listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', twitterQuote)

//
getQuotes()