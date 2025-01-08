const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0,
});

export const formatMoney = (input: number) => {
	return formatter.format(input);
};
