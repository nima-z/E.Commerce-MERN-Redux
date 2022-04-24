const products = [
  {
    title: "Jean 8",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque?",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 69.99,
    color: "Blue",
    size: ["S", "M", "L"],
    inStock: 5,

    tag: ["jeans", "pants", "blue", "women"],
  },
  {
    title: "Standard Jean ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque?",
    image:
      "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 54.99,
    color: "Blue",
    size: ["S", "M", "L", "XL"],
    inStock: 4,

    tag: ["jeans", "pants", "blue", "women", "men"],
  },
  {
    title: "Teens Jeans ",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque?  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque? ",
    image:
      "https://images.unsplash.com/photo-1582552938357-32b906df40cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    price: 59.99,
    color: "Blue",
    size: ["XS", "S", "M", "L"],
    inStock: 10,

    tag: ["jeans", "pants", "blue", "teens", "men"],
  },
  {
    title: "Bleu de Chanel - Perfume",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque?",
    image:
      "https://images.unsplash.com/photo-1523293182086-7651a899d37f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 109.99,
    color: "Blue",
    size: ["M"],
    inStock: 20,

    tag: ["perfumes", "blue", "men"],
  },
  {
    title: "N.5 Chanel - Perfume",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque?",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=704&q=80",
    price: 129.99,
    color: "Pink",
    size: ["M"],
    inStock: 14,

    tag: ["perfumes", "pink", "women"],
  },
  {
    title: "Je Malone - Perfume",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque?",
    image:
      "https://images.unsplash.com/photo-1519669011783-4eaa95fa1b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=679&q=80",
    price: 89.99,
    color: "Black",
    size: ["M"],
    inStock: 1,

    tag: ["perfumes", "black", "men"],
  },
  {
    title: "Nike Spirits",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque?",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 99.99,
    color: "Red",
    size: ["S", "M", "L"],
    inStock: 13,

    tag: ["shoes", "snickers", "red", "men", "women"],
  },
  {
    title: "Nike Rainbow",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, labore quas? Nisi beatae similique architecto! Provident similique, dolorem non, tenetur sapiente aliquam veniam minima dolorum voluptate quisquam quae quis atque?",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    price: 89.99,
    color: "White",
    size: ["M", "L"],
    inStock: 2,

    tag: ["shoes", "snickers", "men", "women", "rainbow"],
  },
  {
    title: "Nike Air",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ratione vitae commodi atque velit quod laboriosam praesentium alias dolores, reiciendis necessitatibus? Dignissimos, ea nemo unde corporis fuga officia esse at.",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
    price: 139.99,
    color: "Brown",
    size: ["S", "M"],
    inStock: 6,

    tag: ["shoes", "snickers", "brown", "men"],
  },
  {
    title: "Nike Classic Sneakers",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ratione vitae commodi atque velit quod laboriosam praesentium alias dolores, reiciendis necessitatibus? Dignissimos, ea nemo unde corporis fuga officia esse at.",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    price: 79.99,
    color: "Black",
    size: ["S", "M", "L", "XL"],
    inStock: 20,

    tag: ["shoes", "snickers", "black", "men", "women"],
  },
  {
    title: "Spring Snow",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ratione vitae commodi atque velit quod laboriosam praesentium alias dolores, reiciendis necessitatibus? Dignissimos, ea nemo unde corporis fuga officia esse at.",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    price: 39.99,
    color: "Blue",
    size: ["S"],
    inStock: 4,

    tag: ["shirts", "blue", "women"],
  },
  {
    title: "Classic Checkered",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ratione vitae commodi atque velit quod laboriosam praesentium alias dolores, reiciendis necessitatibus? Dignissimos, ea nemo unde corporis fuga officia esse at.",
    image:
      "https://images.unsplash.com/photo-1588795904317-2f4ab1a0a852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 44.99,
    color: "Red",
    size: ["S", "M", "L"],
    inStock: 10,

    tag: ["shirts", "red", "women", "men", "teens"],
  },
  {
    title: "Kiko Original",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ratione vitae commodi atque velit quod laboriosam praesentium alias dolores, reiciendis necessitatibus? Dignissimos, ea nemo unde corporis fuga officia esse at.",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    price: 19.99,
    color: "White",
    size: ["S", "M"],
    inStock: 6,

    tag: ["shirts", "white", "men"],
  },
  {
    title: "Short School Skirt",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ratione vitae commodi atque velit quod laboriosam praesentium alias dolores, reiciendis necessitatibus? Dignissimos, ea nemo unde corporis fuga officia esse at. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus ratione vitae commodi atque velit quod laboriosam praesentium alias dolores, reiciendis necessitatibus? Dignissimos, ea nemo unde corporis fuga officia esse at.",
    image:
      "https://images.unsplash.com/photo-1582142306909-195724d33ffc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 34.99,
    color: "White",
    size: ["S", "M"],
    inStock: 16,

    tag: ["skirts", "white", "women", "teens"],
  },
  {
    title: "Long Checkered Skirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nam at provident quisquam architecto ea iste, recusandae error eaque cupiditate esse? Necessitatibus sint a dolore repellendus recusandae molestiae, sit sequi?",
    image:
      "https://images.unsplash.com/photo-1509182469511-7f0b50bfa63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 29.99,
    color: "Yellow",
    size: ["M", "L"],
    inStock: 7,

    tag: ["skirts", "yellow", "women"],
  },
  {
    title: "Short Pink Skirt",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nam at provident quisquam architecto ea iste, recusandae error eaque cupiditate esse? Necessitatibus sint a dolore repellendus recusandae molestiae, sit sequi?",
    image:
      "https://images.unsplash.com/photo-1603205319065-6ffbe8f0e5af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 39.99,
    color: "Pink",
    size: ["S", "M"],
    inStock: 2,

    tag: ["skirts", "pink", "women", "teens"],
  },
  {
    title: "American Sheriff Hat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nam at provident quisquam architecto ea iste, recusandae error eaque cupiditate esse? Necessitatibus sint a dolore repellendus recusandae molestiae, sit sequi?",
    image:
      "https://images.unsplash.com/photo-1582791694770-cbdc9dda338f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 14.99,
    color: "Brown",
    size: ["M"],
    inStock: 3,

    tag: ["hats", "women", "brown"],
  },
  {
    title: "Classic English Hat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nam at provident quisquam architecto ea iste, recusandae error eaque cupiditate esse? Necessitatibus sint a dolore repellendus recusandae molestiae, sit sequi?",
    image:
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 19.99,
    color: "Blue",
    size: ["S", "M"],
    inStock: 6,

    tag: ["hats", "women", "blue"],
  },
  {
    title: "Handmade Hat",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nam at provident quisquam architecto ea iste, recusandae error eaque cupiditate esse? Necessitatibus sint a dolore repellendus recusandae molestiae, sit sequi?",
    image:
      "https://images.unsplash.com/photo-1569520254493-8edfdeaa8fae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    price: 29.99,
    color: "Brown",
    size: ["M"],
    inStock: 5,

    tag: ["hats", "women", "brown"],
  },
  {
    title: "Vintage Lady",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nam at provident quisquam architecto ea iste, recusandae error eaque cupiditate esse? Necessitatibus sint a dolore repellendus recusandae molestiae, sit sequi?",
    image:
      "https://images.unsplash.com/photo-1568308073315-dff9ed586308?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    price: 39.99,
    color: "Brown",
    size: ["M"],
    inStock: 12,

    tag: ["hats", "women", "brown"],
  },
];

module.exports = products;
