var maxProfit = function (prices) {
  let profit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i + 1] === undefined) {
      break;
    }
    if (prices[i] > prices[i + 1]) {
      profit = prices[i] - min;
      min = prices[i + 1];
    }
  }
  console.log(profit);
};

maxProfit([7, 1, 5, 5, 6, 4]);
