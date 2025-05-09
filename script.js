const quotes = [
  {
      text: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
  },
  {
      text: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
  },
  {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
  },
  {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
  },
  {
      text: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  document.getElementById('quoteText').textContent = `"${selectedQuote.text}"`;
  document.getElementById('quoteAuthor').textContent = `– ${selectedQuote.author}`;
}
