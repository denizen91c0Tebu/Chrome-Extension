const apiKey = "FzM7Vl8acHYrgRoPgirMgA==Tmjp7HrMXhAmF6OM";
const category = document.getElementById("category");
const quoteGen = document.getElementById("GenerateQuote");
const quoteContainer = document.getElementById("quoteContainer");
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiBaseUrl = "https://api.api-ninjas.com/v1/quotes?category=";

async function randQuotes() {
    const selectedCategory = category.value;
    const apiURL = apiBaseUrl + selectedCategory;
    // trying to capture the date and seeing if there are quotes to populate
    // the innerhtml with, if not the else statement activates
    try {
        const response = await fetch(apiURL, options);
        const responseData = await response.json();

        
        const firstQuote = responseData[0];

        if (firstQuote) {
            const quoteText = firstQuote.quote;
            const quoteAuthor = firstQuote.author;

            quoteContainer.innerHTML = `<p><strong>${quoteText}</strong></p>
                                         <p>${quoteAuthor}</p>`;
        } else {
            quoteContainer.innerHTML = "No quotes found for the selected category.";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
//tells the computer when clicked to run the function.
quoteGen.addEventListener("click", randQuotes);
