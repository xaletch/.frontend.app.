import type { ThemeSubject, ThemeType } from "@/entities/themes";
import type { Plan } from "./plan.type";

export interface PlanCreateRequest {
  name: string;
  type: ThemeType;
  subject: ThemeSubject;
  themes: string[];             // ids of themes
}

export type PlanCreateResponse = Plan;      // so far so