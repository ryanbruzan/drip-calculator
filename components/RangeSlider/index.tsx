"use client";

import clsx from "clsx";
import type { ChangeEventHandler, HTMLProps } from "react";
import styles from "./index.module.css";

type Props = HTMLProps<HTMLInputElement> & {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	showSteps?: boolean;
	onValueChange?: (value: number) => void;
	className?: string;
};

export const RangeSlider = ({
	min = 0,
	max = 100,
	step = 1,
	value = 0,
	showSteps = true,
	onValueChange,
	className,
	...rest
}: Props) => {
	const stepCSSVariable = {
		"--step": `${(step / (max - min)) * 100}%`,
	} as React.CSSProperties;

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = Number.parseInt(e.currentTarget.value);
		onValueChange?.(value);
	};

	return (
		<label className={clsx(styles.container, className)}>
			<input
				{...rest}
				type="range"
				min={min.toString()}
				max={max.toString()}
				step={step.toString()}
				value={value.toString()}
				onChange={handleChange}
				className={styles.input}
				style={showSteps ? stepCSSVariable : undefined}
			/>
		</label>
	);
};
