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
						max={99}
						value={age}
						showSteps={false}
						onValueChange={setAge}
					/>
					<Textbox
						align="center"
						min={18}
						max={99}
						maxLength={2}
						value={age}
						onValueChange={(v) => setAge(Number.parseInt(v) || 0)}
						className={styles.smallTextbox}
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
						min={0}
						maxLength={5}
						value={dailyContribution}
						onValueChange={(v) => setDailyContribution(Number.parseInt(v) || 0)}
						className={styles.largeTextbox}
						PrefixIcon={DollarSignIcon}
						suffixChildren="/day"
					/>
					+
					<Textbox
						min={0}
						maxLength={5}
						value={dailyContributionGrowthPerYear}
						onValueChange={(v) =>
							setDailyContributionGrowthPerYear(Number.parseInt(v) || 0)
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
					<div className={styles.labelSubtitle}>Average % increase YoY</div>
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
						min={0}
						maxLength={3}
						value={annualIncreasePercentage}
						onValueChange={(v) =>
							setAnnualIncreasePercentage(Number.parseInt(v) || 0)
						}
						className={styles.smallTextbox}
						SuffixIcon={PercentIcon}
					/>
				</div>
			</div>
		</div>
	);
};
