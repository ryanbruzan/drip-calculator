"use client";

import clsx from "clsx";
import type { HTMLAttributes } from "react";
import styles from "./index.module.css";

type Props = HTMLAttributes<HTMLInputElement> & {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	showSteps?: boolean;
	className?: string;
};

export const RangeSlider = ({
	min = 0,
	max = 100,
	step = 1,
	value = 0,
	showSteps = true,
	className,
	...rest
}: Props) => {
	const stepCSSVariable = {
		"--step": `${(step / (max - min)) * 100}%`,
	} as React.CSSProperties;

	return (
		<div className={clsx(styles.container, className)}>
			<input
				{...rest}
				type="range"
				min={min.toString()}
				max={max.toString()}
				step={step.toString()}
				value={value.toString()}
				className={styles.input}
				style={showSteps ? stepCSSVariable : undefined}
			/>
		</div>
	);
};
