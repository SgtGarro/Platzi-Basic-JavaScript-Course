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
var findArticle = articles.find(function (article) {
  return article.name == "Laptop";
});

articles.forEach(function (article) {
  console.log(article.name);
});

var cheapArticles = articles.some(function (article) {
  return article.cost <= 700;
});

console.log(findArticle);
console.log(cheapArticles);
