export type EducationType = "ed_type";
export type EducationSubject = "ed_subject";

export interface Education {
  id: string;
  name: string;
  type: EducationType;
  subject: EducationSubject;
  themes_length: number;    // add theme_length to the backend
}