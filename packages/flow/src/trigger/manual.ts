import { z } from "zod";
import type { TriggerBase } from "../base";

const provider = "manual" as const;
export interface ManualTrigger extends TriggerBase {
	provider: typeof provider;
}

export const manualTrigger = {
	provider,
	id: "manual",
	label: "Manual trigger",
	payloads: z.object({
		Output: z.string(),
	}),
} as const satisfies ManualTrigger;

export const triggers = [manualTrigger] as const;
