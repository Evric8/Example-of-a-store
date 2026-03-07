export const countBasket = (array) => {
  return array
    .map((i) =>
      //   {
      //   if (i.checked) return i.count;
      //   return null;
      // }
      i.checked ? i.count : 0
    )
    .reduce((acc, current) => acc + current, 0);
};

export const calculateBasketSummary = (basket) => {
  const sum = Number(
    basket
      .map((item) =>
        item.checked ? Number(item.price) * Number(item.count) : 0
      )
      .reduce((acc, curr) => acc + curr, 0)
      .toFixed(2)
  );

  const discount = Number((sum * 0.12).toFixed(2));
  const allSum = Number((sum - discount).toFixed(2));

  return { sum, discount, allSum};
};

export const calculateBasketSingle = (item) => {
  // console.log(item);
  // console.log(item.price);
  // console.log(item.count);
  const sumSingle =
  item?.checked
    ? Number(Number(item.price) * Number(item.count)).toFixed(2)
    : 0;
  return Number(sumSingle);
};
