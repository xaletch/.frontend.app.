export type ThemeType = "ed_type";
export type ThemeSubject = "ed_subject";

export interface Theme {
  id: string;
  title: string;
  type: ThemeType;
  subject: ThemeSubject;
}