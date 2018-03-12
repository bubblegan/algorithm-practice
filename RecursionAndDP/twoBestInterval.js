function maxProfit(prices) {
	if (prices == null || prices.length < 2) {
		return 0;
	}
 
	//highest profit in 0 ... i
	let left = new Array(prices.length);
	let right = new Array(prices.length);
 
	// DP from left to right
	left[0] = 0; 
	let min = prices[0];
	for (let i = 1; i < prices.length; i++) {
		min = Math.min(min, prices[i]);
		left[i] = Math.max(left[i - 1], prices[i] - min);
	}
 
	// DP from right to left
	right[prices.length - 1] = 0;
	let max = prices[prices.length - 1];
	for (let i = prices.length - 2; i >= 0; i--) {
		max = Math.max(max, prices[i]);
		right[i] = Math.max(right[i + 1], max - prices[i]);
	}
 
	let profit = 0;
	for (let i = 0; i < prices.length; i++) {
		profit = Math.max(profit, left[i] + right[i]);
	}
 
	return profit;
}

let priceArray = [1,4,5,7,6,3,2,9];
console.log(maxProfit(priceArray));