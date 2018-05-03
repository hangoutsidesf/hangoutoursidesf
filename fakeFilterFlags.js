module.exports = (data) => {
  // *******FAKE DATA GENERATOR************
  const random = () => Math.random() > 0.5;

  data.forEach((d) => {
    const node = d;
    node.wifi = random();
    node.food = random();
    node.open = random();
  });
  // remove above function once graphQL db is configured

  return data;
};
