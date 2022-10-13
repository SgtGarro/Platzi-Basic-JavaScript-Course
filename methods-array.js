var articles = [
  {
    name: "Bike",
    cost: 3000,
  },
  {
    name: "TV",
    cost: 2500,
  },
  {
    name: "Book",
    cost: 320,
  },
  {
    name: "Phone",
    cost: 10000,
  },
  {
    name: "Laptop",
    cost: 20000,
  },
  {
    name: "Headphones",
    cost: 1700,
  },
];

var filtredArticles = articles.filter(function (article) {
  return article.cost <= 500;
});

var nameOfArticles = articles.map(function (article) {
  return article.name;
});

console.log(articles);
console.log(filtredArticles);
console.log(nameOfArticles);
