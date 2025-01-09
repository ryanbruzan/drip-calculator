"use client";

import { ChartTooltip } from "@/components/ChartTooltip";
import { useAggregateData } from "@/hooks/useAggregateData";
import clsx from "clsx";
import {
	Area,
	ComposedChart,
	Line,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import styles from "./index.module.css";

type Props = {
	className?: string;
};

export const Chart = ({ className }: Props) => {
	const { data } = useAggregateData();
	console.log("data", data);

	return (
		<div className={clsx(styles.container, className)}>
			<div className={styles.responsiveContainer}>
				<ResponsiveContainer width="100%" height="100%">
					<ComposedChart
						data={data}
						margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
					>
						{/* End Balance */}
						<Line
							dot={false}
							type="monotone"
							dataKey="endBalance"
							stroke="var(--color-foreground-100)"
							strokeWidth={1}
							animationDuration={0}
						/>
						<Area
							type="monotone"
							dataKey="endBalance"
							strokeWidth={0}
							fill="url(#gradient)"
							animationDuration={0}
						/>

						{/* Start Balance */}
						<Line
							dot={false}
							type="monotone"
							dataKey="startBalance"
							stroke="var(--color-foreground-20)"
							strokeWidth={1}
							animationDuration={0}
						/>
						<Area
							type="monotone"
							dataKey="startBalance"
							strokeWidth={0}
							fill="url(#gradient)"
							animationDuration={0}
						/>

						{/* Salary */}
						<Line
							dot={false}
							type="monotone"
							dataKey="salary"
							stroke="var(--color-foreground-20)"
							strokeWidth={1}
							animationDuration={0}
						/>
						<Area
							type="monotone"
							dataKey="salary"
							strokeWidth={0}
							fill="url(#gradient)"
							animationDuration={0}
						/>

						{/* X */}
						{/* <XAxis dataKey="year" stroke="var(--color-foreground-20)" /> */}

						{/* Custom Tooltip */}
						<Tooltip
							active={true}
							defaultIndex={data.length - 1}
							cursor={{ stroke: "var(--color-foreground-100)" }}
							position={{ x: 0, y: 0 }}
							content={ChartTooltip}
						/>

						{/* Gradient */}
						<defs>
							<linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stopColor="#fff" stopOpacity={0.2} />
								<stop offset="100%" stopColor="#fff" stopOpacity={0} />
							</linearGradient>
						</defs>
					</ComposedChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};
