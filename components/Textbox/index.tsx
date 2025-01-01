import clsx from "clsx";
import type { ChangeEventHandler, FocusEventHandler, HTMLProps } from "react";
import styles from "./index.module.css";

type Props = HTMLProps<HTMLInputElement> & {
	fill?: boolean;
	min?: number;
	max?: number;
	onValueChange?: (value: string) => void;
};

export const Textbox = ({
	fill,
	min,
	max,
	onValueChange,
	className,
	...rest
}: Props) => {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const value = e.currentTarget.value;
		onValueChange?.(value);
	};

	const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
		let value = e.currentTarget.value;

		// Apply min and max if needed
		if (min) {
			const parsedValue = Number.parseInt(value);
			value = Math.max(parsedValue, min).toString();
		}
		if (max) {
			const parsedValue = Number.parseInt(value);
			value = Math.min(parsedValue, max).toString();
		}

		// Fire the parent change
		onValueChange?.(value);
	};

	return (
		<div className={clsx(styles.container, { [styles.fill]: fill }, className)}>
			<input
				{...rest}
				onBlur={handleBlur}
				onChange={handleChange}
				className={styles.textbox}
			/>
			<span className={clsx(styles.textbox, styles.sizer)}>{rest.value}</span>
		</div>
	);
};
