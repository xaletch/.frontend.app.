import type { ThemeSubject, ThemeType } from "@/entities/themes";

export interface Plan {
  id: string;
  name: string;
  type: ThemeType;
  subject: ThemeSubject;
  plan_themes: [];
}

export interface PlanList {
  id: string;
  name: string;
  type: ThemeType;
  subject: ThemeSubject;
  themes_length: number;    // add theme_length to the backend
}