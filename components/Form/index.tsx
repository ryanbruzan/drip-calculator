"use client";

import { RangeSlider } from "@/components/RangeSlider";
import { Textbox } from "@/components/Textbox";
import { useConfigStore } from "@/hooks/useConfigStore";
import clsx from "clsx";
import { DollarSignIcon, PercentIcon } from "lucide-react";
import styles from "./index.module.css";

type Props = {
	className?: string;
};

export const Form = ({ className }: Props) => {
	// Grab data from Zustand
	const age = useConfigStore((state) => state.age);
	const setAge = useConfigStore((state) => state.setAge);
	const years = useConfigStore((state) => state.years);
	const setYears = useConfigStore((state) => state.setYears);
	const initialBalance = useConfigStore((state) => state.initialBalance);
	const setInitialBalance = useConfigStore((state) => state.setInitialBalance);
	const dailyContribution = useConfigStore((state) => state.dailyContribution);
	const setDailyContribution = useConfigStore(
		(state) => state.setDailyContribution,
	);
	const dailyContributionGrowthPerYear = useConfigStore(
		(state) => state.dailyContributionGrowthPerYear,
	);
	const setDailyContributionGrowthPerYear = useConfigStore(
		(state) => state.setDailyContributionGrowthPerYear,
	);
	const annualIncreasePercentage = useConfigStore(
		(state) => state.annualIncreasePercentage,
	);
	const setAnnualIncreasePercentage = useConfigStore(
		(state) => state.setAnnualIncreasePercentage,
	);
	const annualDividendYieldPercentage = useConfigStore(
		(state) => state.annualDividendYieldPercentage,
	);
	const setAnnualDividendYieldPercentage = useConfigStore(
		(state) => state.setAnnualDividendYieldPercentage,
	);
	const annualTaxRatePercentage = useConfigStore(
		(state) => state.annualTaxRatePercentage,
	);
	const setAnnualTaxRatePercentage = useConfigStore(
		(state) => state.setAnnualTaxRatePercentage,
	);
	const annualSalaryYieldPercentage = useConfigStore(
		(state) => state.annualSalaryYieldPercentage,
	);
	const setAnnualSalaryYieldPercentage = useConfigStore(
		(state) => state.setAnnualSalaryYieldPercentage,
	);

	return (
		<div className={clsx(styles.form, className)}>
			{/* Age */}
			<div className={styles.row}>
				<div className={styles.label}>
					<div className={styles.labelTitle}>Age</div>
					<div className={styles.labelSubtitle}>Your current age in years</div>
				</div>
				<div className={styles.input}>
					<RangeSlider
						min={18}
						max={75}
						value={age}
						showSteps={false}
						onValueChange={setAge}
					/>
					<Textbox
						type="number"
						min={18}
						max={99}
						maxLength={2}
						value={age}
						onValueChange={(v) => setAge(Number.parseInt(v) || 0)}
						className={styles.smallTextbox}
						suffixChildren="y/o"
					/>
				</div>
			</div>

			{/* Years */}
			<div className={styles.row}>
				<div className={styles.label}>
					<div className={styles.labelTitle}>Years in the Future</div>
					<div className={styles.labelSubtitle}>
						Investing till you're {age + years}
					</div>
				</div>
				<div className={styles.input}>
					<RangeSlider
						min={1}
						max={75}
						value={years}
						showSteps={false}
						onValueChange={setYears}
					/>
					<Textbox
						type="number"
						min={1}
						maxLength={3}
						value={years}
						onValueChange={(v) => setYears(Number.parseInt(v) || 0)}
						className={styles.smallTextbox}
						suffixChildren="yrs"
					/>
				</div>
			</div>

			{/* Initial Balance */}
			<div className={styles.row}>
				<div className={styles.label}>
					<div className={styles.labelTitle}>Initial Balance</div>
					<div className={styles.labelSubtitle}>
						Starting at {age} year{age === 1 ? "" : "s"} old
					</div>
				</div>
				<div className={styles.input}>
					<Textbox
						type="number"
						min={1}
						maxLength={9}
						value={initialBalance}
						onValueChange={(v) => setInitialBalance(Number.parseInt(v) || 0)}
						className={styles.largeTextbox}
						PrefixIcon={DollarSignIcon}
					/>
				</div>
			</div>

			{/* Daily Contributions */}
			<div className={styles.row}>
				<div className={styles.label}>
					<div className={styles.labelTitle}>Daily Contributions</div>
					<div className={styles.labelSubtitle}>
						Starting at {age} year{age === 1 ? "" : "s"} old
					</div>
				</div>
				<div className={styles.input}>
					<Textbox
						type="number"
						min={0}
						maxLength={5}
						value={dailyContribution}
						onValueChange={(v) =>
							setDailyContribution(Number.parseFloat(v) || 0)
						}
						className={styles.largeTextbox}
						PrefixIcon={DollarSignIcon}
						suffixChildren="/day"
					/>
					+
					<Textbox
						type="number"
						min={0}
						maxLength={5}
						value={dailyContributionGrowthPerYear}
						onValueChange={(v) =>
							setDailyContributionGrowthPerYear(Number.parseFloat(v) || 0)
						}
						className={styles.largeTextbox}
						PrefixIcon={DollarSignIcon}
						suffixChildren="/year"
					/>
				</div>
			</div>

			{/* Stock Price Increase */}
			<div className={styles.row}>
				<div className={styles.label}>
					<div className={styles.labelTitle}>Stock Price Increase</div>
					<div className={styles.labelSubtitle}>Average annual increase</div>
				</div>
				<div className={styles.input}>
					<RangeSlider
						min={0}
						max={100}
						value={annualIncreasePercentage}
						showSteps={false}
						onValueChange={setAnnualIncreasePercentage}
					/>
					<Textbox
						type="number"
						min={0}
						maxLength={3}
						value={annualIncreasePercentage}
						onValueChange={(v) =>
							setAnnualIncreasePercentage(Number.parseFloat(v) || 0)
						}
						className={styles.smallTextbox}
						SuffixIcon={PercentIcon}
					/>
				</div>
			</div>

			{/* Dividend Yield */}
			<div className={styles.row}>
				<div className={styles.label}>
					<div className={styles.labelTitle}>Dividend Yield</div>
					<div className={styles.labelSubtitle}>
						Average annualized dividend
					</div>
				</div>
				<div className={styles.input}>
					<RangeSlider
						min={0}
						max={100}
						value={annualDividendYieldPercentage}
						showSteps={false}
						onValueChange={setAnnualDividendYieldPercentage}
					/>
					<Textbox
						type="number"
						min={0}
						maxLength={3}
						value={annualDividendYieldPercentage}
						onValueChange={(v) =>
							setAnnualDividendYieldPercentage(Number.parseFloat(v) || 0)
						}
						className={styles.smallTextbox}
						SuffixIcon={PercentIcon}
					/>
				</div>
			</div>

			{/* Tax Rate */}
			<div className={styles.row}>
				<div className={styles.label}>
					<div className={styles.labelTitle}>Tax Rate</div>
					<div className={styles.labelSubtitle}>Average annual taxes</div>
				</div>
				<div className={styles.input}>
					<RangeSlider
						min={0}
						max={100}
						value={annualTaxRatePercentage}
						showSteps={false}
						onValueChange={setAnnualTaxRatePercentage}
					/>
					<Textbox
						type="number"
						min={0}
						maxLength={3}
						value={annualTaxRatePercentage}
						onValueChange={(v) =>
							setAnnualTaxRatePercentage(Number.parseFloat(v) || 0)
						}
						className={styles.smallTextbox}
						SuffixIcon={PercentIcon}
					/>
				</div>
			</div>

			{/* Salary Yield */}
			<div className={styles.row}>
				<div className={styles.label}>
					<div className={styles.labelTitle}>Salary Yield</div>
					<div className={styles.labelSubtitle}>% received long-term</div>
				</div>
				<div className={styles.input}>
					<RangeSlider
						min={0}
						max={100}
						value={annualSalaryYieldPercentage}
						showSteps={false}
						onValueChange={setAnnualSalaryYieldPercentage}
					/>
					<Textbox
						type="number"
						min={0}
						maxLength={3}
						value={annualSalaryYieldPercentage}
						onValueChange={(v) =>
							setAnnualSalaryYieldPercentage(Number.parseFloat(v) || 0)
						}
						className={styles.smallTextbox}
						SuffixIcon={PercentIcon}
					/>
				</div>
			</div>
		</div>
	);
};
