"use client";

import { RangeSlider } from "@/components/RangeSlider";
import { Textbox } from "@/components/Textbox";
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
						onValueChange={setAge}
					/>
					<Textbox
						maxLength={2}
						min={18}
						max={99}
						value={age}
						onValueChange={(v) => setAge(Number.parseInt(v))}
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
						fill
						maxLength={16}
						min={1}
						value={initialBalance}
						onValueChange={(v) => setInitialBalance(Number.parseInt(v))}
					/>
				</div>
			</div>
		</div>
	);
};
