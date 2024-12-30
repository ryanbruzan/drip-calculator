import clsx from "clsx";
import styles from "./index.module.css";

type Props = {
	className?: string;
};

export const Form = ({ className }: Props) => {
	return (
		<div className={clsx(styles.form, className)}>
			<p>Form</p>
		</div>
	);
};
