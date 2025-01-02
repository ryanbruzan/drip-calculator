import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import type {
	ChangeEventHandler,
	FocusEventHandler,
	HTMLProps,
	ReactNode,
} from "react";
import styles from "./index.module.css";

type Props = HTMLProps<HTMLInputElement> & {
	min?: number;
	max?: number;
	onValueChange?: (value: string) => void;
	PrefixIcon?: LucideIcon;
	prefixChildren?: ReactNode;
	SuffixIcon?: LucideIcon;
	suffixChildren?: ReactNode;
};

export const Textbox = ({
	min,
	max,
	onValueChange,
	PrefixIcon,
	prefixChildren,
	SuffixIcon,
	suffixChildren,
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
		<label className={clsx(styles.container, className)}>
			{(PrefixIcon || prefixChildren) && (
				<div className={styles.prefix}>
					{PrefixIcon && (
						<PrefixIcon size={20} color="var(--color-foreground-100)" />
					)}
					{prefixChildren}
				</div>
			)}
			<input
				{...rest}
				onBlur={handleBlur}
				onChange={handleChange}
				className={styles.textbox}
			/>
			{(SuffixIcon || suffixChildren) && (
				<div className={styles.suffix}>
					{SuffixIcon && (
						<SuffixIcon size={20} color="var(--color-foreground-100)" />
					)}
					{suffixChildren}
				</div>
			)}
		</label>
	);
};
