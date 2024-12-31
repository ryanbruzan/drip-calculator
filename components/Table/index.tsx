"use client";

import clsx from "clsx";
import styles from "./index.module.css";

type Props = {
	className?: string;
};

export const Table = ({ className }: Props) => {
	return (
		<div className={clsx(styles.table, className)}>
			<p>Table</p>
		</div>
	);
};
