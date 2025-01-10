"use client";

import { useAggregateData } from "@/hooks/useAggregateData";
import { formatMoney } from "@/utils/formatMoney";
import clsx from "clsx";
import styles from "./index.module.css";

type Props = {
	className?: string;
};

export const Table = ({ className }: Props) => {
	const { data } = useAggregateData();

	return (
		<div className={clsx(styles.container, className)}>
			<table>
				<thead>
					<tr>
						<th>Year</th>
						<th>Start Bal.</th>
						<th>Start Age</th>
						<th>Cont.</th>
						<th>Growth</th>
						<th>Growth Cum.</th>
						<th>Gross Div.</th>
						<th>Net Div.</th>
						<th>End Bal.</th>
						<th>End Age</th>
						<th>Salary</th>
					</tr>
				</thead>
				{data?.length > 0 && (
					<tbody>
						{data.map((d) => (
							<tr key={d.year}>
								<td>{d.year}</td>
								<td>{formatMoney(d.startBalance)}</td>
								<td>{d.age}</td>
								<td>{formatMoney(d.contributions)}</td>
								<td>{formatMoney(d.growth)}</td>
								<td>{formatMoney(d.growthCumulative)}</td>
								<td>{formatMoney(d.grossDiv)}</td>
								<td>{formatMoney(d.netDiv)}</td>
								<td>{formatMoney(d.endBalance)}</td>
								<td>{d.age + 1}</td>
								<td>{formatMoney(d.salary)}/yr</td>
							</tr>
						))}
					</tbody>
				)}
			</table>
		</div>
	);
};
