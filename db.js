module.exports = {
  hashtags: [
    {
      id: 1,
      text: "#power_puff_girls",
    },
    {
      id: 2,
      text: "#batman",
    },
  ],
  brands: [
    { id: 1, name: "Cartoon Network" },
    { id: 2, name: "DC Comics" },
  ],
  drops: [
    { id: 1, name: "Power Puff Girls", brand_id: 1 },
    { id: 2, name: "Batman", brand_id: 2 },
  ],
  collectibles: [
    {
      id: 1,
      name: "Blossom",
      drop_id: 1,
      views: 254,
      editions: 10,
      price: 25,
      user_id: 123,
    },
    {
      id: 2,
      name: "Bubbles",
      drop_id: 1,
      views: 65,
      editions: 10,
      price: 30,
    },
    {
      id: 1,
      name: "Batman",
      drop_id: 2,
      views: 254,
      editions: 10,
      price: 25,
    },
    {
      id: 2,
      name: "Joker",
      drop_id: 2,
      views: 65,
      editions: 10,
      price: 30,
    },
  ],
  users: [
    { id: 123, username: "John Doe" },
    { id: 456, username: "Jane Doe" },
  ],
};
