const isInCart = (state, id) => {
  const resault = !!state.find((item) => item.id === id);
  return resault;
};

export { isInCart };
