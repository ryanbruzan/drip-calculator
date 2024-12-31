"use client";

// This allows Zustand to use the client-only values
// instead of showing default values pre-hydration

import { useIsClient } from "@uidotdev/usehooks";
import type { PropsWithChildren } from "react";

const ClientOnly: React.FC<PropsWithChildren> = ({ children }) => {
	const isClient = useIsClient();
	return isClient ? <>{children}</> : null;
};

export default ClientOnly;
