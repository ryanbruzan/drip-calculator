"use client";

import { useConfigStore } from "@/hooks/useConfigStore";
import clsx from "clsx";
import styles from "./index.module.css";

type Props = {
	className?: string;
};

export const Form = ({ className }: Props) => {
	const age = useConfigStore((state) => state.age);
	const setAge = useConfigStore((state) => state.setAge);

	return (
		<div className={clsx(styles.form, className)}>
			<p>Form</p>
			<p>Age: {age}</p>
			<button type="button" onClick={() => setAge(26)}>
				Hi
			</button>
		</div>
	);
};
