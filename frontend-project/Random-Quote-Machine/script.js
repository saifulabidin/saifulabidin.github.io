// Quotes data array
const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      text: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      text: "In the end, it's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      text: "The purpose of our lives is to be happy.",
      author: "Dalai Lama"
    },
    {
      text: "You only live once, but if you do it right, once is enough.",
      author: "Mae West"
    },
    {
      text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
      author: "Thomas A. Edison"
    },
    {
      text: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      text: "If you want to live a happy life, tie it to a goal, not to people or things.",
      author: "Albert Einstein"
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      text: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
      author: "Benjamin Franklin"
    },
    {
      text: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      text: "Our lives begin to end the day we become silent about things that matter.",
      author: "Martin Luther King Jr."
    }
  ];
  
  // Color array for background and button transitions
  const colors = [
    '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', 
    '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', 
    '#77B1A9', '#73A857', '#8e44ad', '#3498db', '#d35400'
  ];
  
  // DOM elements
  const quoteText = document.getElementById('text');
  const quoteAuthor = document.getElementById('author');
  const newQuoteBtn = document.getElementById('new-quote');
  const tweetQuoteBtn = document.getElementById('tweet-quote');
  const body = document.body;
  
  // Keep track of current quote
  let currentQuote = '';
  let currentAuthor = '';
  
  // Function to get random quote
  function getRandomQuote() {
    let randomIndex;
    let newQuote;
    
    // Make sure we don't get the same quote twice in a row
    do {
      randomIndex = Math.floor(Math.random() * quotes.length);
      newQuote = quotes[randomIndex];
    } while (newQuote.text === currentQuote && quotes.length > 1);
    
    currentQuote = newQuote.text;
    currentAuthor = newQuote.author;
    
    return newQuote;
  }
  
  // Function to get random color
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }
  
  // Function to update quote
  function updateQuote() {
    const quote = getRandomQuote();
    const color = getRandomColor();
    
    // Fade out text briefly before changing it
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;
    
    setTimeout(() => {
      quoteText.textContent = quote.text;
      quoteAuthor.textContent = `- ${quote.author}`;
      
      // Update colors
      body.style.backgroundColor = color;
      quoteText.style.color = color;
      quoteAuthor.style.color = color;
      newQuoteBtn.style.backgroundColor = color;
      tweetQuoteBtn.style.backgroundColor = color;
      
      // Update tweet link
      tweetQuoteBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${quote.text}" - ${quote.author}`
      )}`;
      
      // Fade text back in
      quoteText.style.opacity = 1;
      quoteAuthor.style.opacity = 1;
    }, 300);
  }
  
  // Event listener for new quote button
  newQuoteBtn.addEventListener('click', updateQuote);
  
  // Initial quote on page load
  window.addEventListener('load', updateQuote);