const fakeFilterFlags = (data) => {
  // *******FAKE DATA GENERATOR************
  data.slice(0, Math.floor(data.length / 3)).forEach((d) => {
    const node = d;
    node.wifi = true;
    node.food = true;
    node.open = false;
  });
  data.slice(Math.floor(data.length / 3), Math.floor((data.length * 2) / 3)).forEach((d) => {
    const node = d;
    node.wifi = false;
    node.food = true;
    node.open = true;
  });
  data.slice(Math.floor((data.length * 2) / 3)).forEach((d) => {
    const node = d;
    node.wifi = true;
    node.food = false;
    node.open = true;
  });

  data[0].wifi = true;
  data[0].food = true;
  data[0].open = true;

  return data;
};

export default fakeFilterFlags;
