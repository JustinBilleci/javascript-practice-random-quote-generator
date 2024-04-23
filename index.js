const quotes = [
    "It's not about how hard you hit, it's about hard you can get hit and keep going.",
    "You miss every shot you don't take.",
    "The best things in life are earned not given.", 
    "Justin is a super rad guy you should hire. ~someone really wise",
    "Don't worry about a thing because every little thing is going to be alright.",
    "Meaning is a sweater that you have to knit for yourself",
    "Home is where the heart is."
] // array is an ordered collection of elements

// a set is a unique collection of elements, you can only have unique values inside of a set. does not keep track of order or quantity, just tells you if it is there or not.
const usedIndexes = new Set() 
const quoteElement = document.getElementById("quote")

function generateQuote() { 
    
    if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear() // restarts our code after all quotes are used.
}

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length) // picks a random quote. Math.floor rounds down because lengths of quotes is one index beyond what we can access. Math.ceil rounds up.

        if (usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote; //innerHTML puts value inside the opening and closing tags.
        usedIndexes.add(randomIdx)
        break
    } 
   
}