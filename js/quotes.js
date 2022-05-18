const quotes = [
  {
    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    author: "토머스 에디슨",
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "토머스 에디슨",
  },
  {
    quote: "What would life be if we had no courage to attempt anything?",
    author: "빈센트 반 고흐",
  },
  {
    quote: "It is hard to fail, but it is worse never to have tried to succeed.",
    author: "시어도어 루스벨트",
  },
  {
    quote: "Success is the ability to go from failure to failure without losing your enthusiasm.",
    author: "윈스턴 처칠",
  },
  {
    quote: "You are what you repeatedly do. Excellence is not an event it is a habit.",
    author: "아리스토텔레스",
  },
  {
    quote: "Wherever we look upon this earth, the opportunities take shape within the problems.",
    author: "넬슨 록펠러",
  },
  {
    quote: "Each player must accept the cards life deals him or her: but once they are in hand, he or she alone must decide how to play the cards in order to win the game.",
    author: "볼테르",
  },
  {
    quote: "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.",
    author: "나폴레온 힐",
  },
  {
    quote: "Pain is temporary. Quitting lasts forever.",
    author: "랜스 암스트롱",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;