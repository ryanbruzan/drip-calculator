"use client";

import clsx from "clsx";
import styles from "./index.module.css";

type Props = {
	className?: string;
};

export const Chart = ({ className }: Props) => {
	return (
		<div className={clsx(styles.chart, className)}>
			{/* <p>Chart coming soon...</p> */}
		</div>
	);
};
