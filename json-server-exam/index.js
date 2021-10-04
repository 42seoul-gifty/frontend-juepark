const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const product1 = {
  success: true,
  data: {
    id: 0,
    name: "coffee",
    description: "instant coffee stick",
    detail: "50ea",
    thumbnail: "",
    image_url: [""],
    price: 5,
  },
  message: "gift list",
};
const product2 = {
  success: true,
  data: {
    id: 1,
    name: "meat",
    description: "소고기",
    detail: "500g",
    thumbnail: "",
    image_url: [""],
    price: 5,
  },
  message: "gift list",
};

app.get("/products", (req, res) => {
  res.json({
    success: true,
    data: [
      {
        id: 1,
        name: "meat",
        description: "소고기",
        detail: "500g",
        thumbnail: "",
        image_url: [""],
        price: 5,
      },
      {
        id: 1,
        name: "meat",
        description: "소고기",
        detail: "500g",
        thumbnail: "",
        image_url: [""],
        price: 5,
      },
    ],
    message: "123",
  });
});

app.get("/products/:id", (req, res) => {
  res.json(product1);
});

app.get("/products/:id", (req, res) => {
  res.json(product1);
});

app.listen(9000, () => {
  console.log("listening 9000");
});
