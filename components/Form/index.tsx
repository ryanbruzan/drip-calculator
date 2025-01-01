"use client";

import { RangeSlider } from "@/components/RangeSlider";
import { useConfigStore } from "@/hooks/useConfigStore";
import clsx from "clsx";
import styles from "./index.module.css";

type Props = {
	className?: string;
};

export const Form = ({ className }: Props) => {
	const { age, setAge, initialBalance, setInitialBalance } = useConfigStore(
		(state) => state,
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
						onChange={(e) => setAge(Number.parseInt(e.currentTarget.value))}
					/>
					<div className={styles.value}>{age.toLocaleString()}</div>
				</div>
			</div>

			{/* Initial Balance */}
			<div className={styles.row}>
				<div className={styles.label}>
					<div className={styles.labelTitle}>Initial Balance</div>
					<div className={styles.labelSubtitle}>
						Starting at {age} years old
					</div>
				</div>
				<div className={styles.input}>
					<RangeSlider
						min={0}
						max={10000}
						step={100}
						value={initialBalance}
						showSteps={false}
						onChange={(e) =>
							setInitialBalance(Number.parseInt(e.currentTarget.value))
						}
					/>
				</div>
			</div>
		</div>
	);
};
