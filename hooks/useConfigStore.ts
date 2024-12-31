import { create } from "zustand";
import { persist } from "zustand/middleware";

// https://zustand.docs.pmnd.rs/integrations/persisting-store-data#usage-in-next.js

export type ConfigStore = {
	age: number;
	initialBalance: number;
	dailyContribution: number;
	dailyContributionGrowthPerYear: number;
	annualIncreasePercentage: number;
	annualDividendYieldPercentage: number;
	taxRatePercentage: number;
	years: number;
	annualSalaryYield: number;

	setAge: (input: number) => void;
	setInitialBalance: (input: number) => void;
	setDailyContribution: (input: number) => void;
	setDailyContributionGrowthPerYear: (input: number) => void;
	setAnnualIncreasePercentage: (input: number) => void;
	setAnnualDividendYieldPercentage: (input: number) => void;
	setTaxRatePercentage: (input: number) => void;
	setYears: (input: number) => void;
	setAnnualSalaryYield: (input: number) => void;
};

export const useConfigStore = create<ConfigStore>()(
	persist(
		(set, get) => ({
			age: 25,
			initialBalance: 5000,
			dailyContribution: 5,
			dailyContributionGrowthPerYear: 0,
			annualIncreasePercentage: 16,
			annualDividendYieldPercentage: 0.2,
			taxRatePercentage: 15,
			years: 25,
			annualSalaryYield: 7.5,

			setAge: (v) => set({ age: v }),
			setInitialBalance: (v) => set({ initialBalance: v }),
			setDailyContribution: (v) => set({ dailyContribution: v }),
			setDailyContributionGrowthPerYear: (v) =>
				set({ dailyContributionGrowthPerYear: v }),
			setAnnualIncreasePercentage: (v) => set({ annualIncreasePercentage: v }),
			setAnnualDividendYieldPercentage: (v) =>
				set({ annualDividendYieldPercentage: v }),
			setTaxRatePercentage: (v) => set({ taxRatePercentage: v }),
			setYears: (v) => set({ years: v }),
			setAnnualSalaryYield: (v) => set({ annualSalaryYield: v }),
		}),
		{
			name: "config",
		},
	),
);
