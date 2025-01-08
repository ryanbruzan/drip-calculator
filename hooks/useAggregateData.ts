import { useConfigStore } from "@/hooks/useConfigStore";
import { useMemo } from "react";

export type AggregateYear = {
	year: number;
	age: number;
	startBalance: number;
	contributions: number;
	growth: number;
	growthCumulative: number;
	divYield: number;
	grossDiv: number;
	netDiv: number;
	endBalance: number;
	salary: number;
};

export const useAggregateData = () => {
	// Grab values from the persisted store
	const {
		age,
		initialBalance,
		dailyContribution,
		dailyContributionGrowthPerYear,
		annualIncreasePercentage,
		annualDividendYieldPercentage,
		annualTaxRatePercentage,
		annualSalaryYieldPercentage,
		years,
	} = useConfigStore((state) => state);

	// Parse the values into one aggregate array
	const data: AggregateYear[] = useMemo(() => {
		const array: AggregateYear[] = [];

		for (let i = 0; i < years; i++) {
			const previous = array[i - 1];
			const current: Partial<AggregateYear> = {};

			current.year = i + 1;
			current.age = previous?.age ? previous.age + 1 : age;
			current.startBalance = previous?.endBalance || initialBalance;
			current.contributions =
				dailyContribution * 252 + dailyContributionGrowthPerYear * i * 252;
			current.growth = current.startBalance * (annualIncreasePercentage / 100);
			current.growthCumulative = previous?.growth
				? previous.growthCumulative + current.growth
				: current.growth;
			current.grossDiv =
				current.startBalance * (annualDividendYieldPercentage / 100);
			current.netDiv = current.grossDiv * (1 - annualTaxRatePercentage / 100);
			current.endBalance =
				current.startBalance +
				current.contributions +
				current.growth +
				current.netDiv;
			current.salary =
				(current.endBalance -
					current.growthCumulative * (annualTaxRatePercentage / 100)) *
				(annualSalaryYieldPercentage / 100);

			array.push(current as AggregateYear);
		}

		return array;
	}, [
		age,
		initialBalance,
		dailyContribution,
		dailyContributionGrowthPerYear,
		annualIncreasePercentage,
		annualDividendYieldPercentage,
		annualTaxRatePercentage,
		annualSalaryYieldPercentage,
		years,
	]);

	// Return the necessary data
	return { data };
};
