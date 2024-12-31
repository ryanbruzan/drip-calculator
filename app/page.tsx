import ClientOnly from "@/components/ClientOnly";
import { Dashboard } from "@/components/Dashboard";

const Page = () => {
	return (
		<ClientOnly>
			<Dashboard />
		</ClientOnly>
	);
};

export default Page;
