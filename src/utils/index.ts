import type { FormatPriceFunction, Price } from './schema';

export const formatPrice: FormatPriceFunction = (price: Price): string => {
	return price.toFixed(2).replace(".", ",");
};