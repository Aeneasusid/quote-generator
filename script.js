let apiQuotes = []

// get quotes from API
async function getQuotes() {
    console.log(111)

    const apiurl = 'https://type.fit/api/quotes'
    // const apiurl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiurl)
        apiQuotes = await response.json()

        console.log(apiQuotes)
    } catch (error) {
        // error

    }
}

getQuotes()