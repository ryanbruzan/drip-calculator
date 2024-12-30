import { Chart } from "@/components/Chart";
import { Form } from "@/components/Form";
import { Table } from "@/components/Table";
import styles from "./index.module.css";

export const Dashboard = () => {
	return (
		<div className={styles.dashboard}>
			<Form className={styles.form} />
			<Chart className={styles.chart} />
			<Table className={styles.table} />
		</div>
	);
};
