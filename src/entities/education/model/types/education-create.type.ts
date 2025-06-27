import type { Education, EducationSubject, EducationType } from "./education.type";

export interface EducationCreateRequest {
  name: string;
  type: EducationType;
  subject: EducationSubject;
  themes: string[];             // ids of themes
}

export type EducationCreateResponse = Education;      // so far so