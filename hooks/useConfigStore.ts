import { create } from "zustand";
import { persist } from "zustand/middleware";

// https://zustand.docs.pmnd.rs/integrations/persisting-store-data#usage-in-next.js

export type ConfigStore = {
	age: number;
	years: number;
	initialBalance: number;
	dailyContribution: number;
	dailyContributionGrowthPerYear: number;
	annualIncreasePercentage: number;
	annualDividendYieldPercentage: number;
	annualTaxRatePercentage: number;
	annualSalaryYieldPercentage: number;

	setAge: (input: number) => void;
	setYears: (input: number) => void;
	setInitialBalance: (input: number) => void;
	setDailyContribution: (input: number) => void;
	setDailyContributionGrowthPerYear: (input: number) => void;
	setAnnualIncreasePercentage: (input: number) => void;
	setAnnualDividendYieldPercentage: (input: number) => void;
	setAnnualTaxRatePercentage: (input: number) => void;
	setAnnualSalaryYieldPercentage: (input: number) => void;
};

export const useConfigStore = create<ConfigStore>()(
	persist(
		(set, get) => ({
			age: 25,
			years: 50,
			initialBalance: 5000,
			dailyContribution: 5,
			dailyContributionGrowthPerYear: 0,
			annualIncreasePercentage: 16,
			annualDividendYieldPercentage: 0.2,
			annualTaxRatePercentage: 15,
			annualSalaryYieldPercentage: 7.5,

			setAge: (v) => set({ age: v }),
			setYears: (v) => set({ years: v }),
			setInitialBalance: (v) => set({ initialBalance: v }),
			setDailyContribution: (v) => set({ dailyContribution: v }),
			setDailyContributionGrowthPerYear: (v) =>
				set({ dailyContributionGrowthPerYear: v }),
			setAnnualIncreasePercentage: (v) => set({ annualIncreasePercentage: v }),
			setAnnualDividendYieldPercentage: (v) =>
				set({ annualDividendYieldPercentage: v }),
			setAnnualTaxRatePercentage: (v) => set({ annualTaxRatePercentage: v }),
			setAnnualSalaryYieldPercentage: (v) =>
				set({ annualSalaryYieldPercentage: v }),
		}),
		{
			name: "config",
		},
	),
);
