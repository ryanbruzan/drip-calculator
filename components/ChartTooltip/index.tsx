import type { AggregateYear } from "@/hooks/useAggregateData";
import { formatMoney } from "@/utils/formatMoney";
import type { TooltipProps } from "recharts";
import styles from "./index.module.css";

type Props = TooltipProps<AggregateYear["startBalance"], string>;

export const ChartTooltip = ({ active, payload }: Props) => {
	if (!payload || !payload.length) return null;

	const point: AggregateYear =
		active && payload && payload.length
			? payload[0].payload
			: payload[0].payload;

	return (
		<div className={styles.tooltip}>
			<div className={styles.line}>
				<div className={styles.label}>Y{point.year} Start Balance</div>
				<div className={styles.value}>
					{formatMoney(point.startBalance)} &bull; {point.age}yo
				</div>
			</div>
			<div className={styles.line}>
				<div className={styles.label}>Y{point.year} End Balance</div>
				<div className={styles.value}>
					{formatMoney(point.endBalance)} &bull; {point.age + 1}yo
				</div>
			</div>
			<div className={styles.line}>
				<div className={styles.label}>Y{point.year} Salary</div>
				<div className={styles.value}>{formatMoney(point.salary)}/yr</div>
			</div>
		</div>
	);
};
