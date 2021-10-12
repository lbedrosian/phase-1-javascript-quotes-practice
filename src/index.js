//Fetch
fetch("http://localhost:3000/quotes?_embed=likes")
.then(res => res.json())
.then((data) => {
    data.forEach((quoteObj) => {
        htmlQut(quoteObj);
    })
})
newQuoteForm.addEventListener("submit", (e) => {
e.preventDefault()
let author = e.target["author"].value
let qutContent = e.target["new-quote"].value
//POST
fetch(" http://localhost:3000/quotes", {
method: "POST",
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
author: author,
quote: qutContent
})
})
.then (res => res.json())
.then((newQuote) => {
newQuote.likes = []
htmlQut(newQuote);
})
})