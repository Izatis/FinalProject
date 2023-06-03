export interface ICourse {
  id: number;
  name: string;
  description: string;
  created: string;
  price: number;
  language: string;
  author: string;
  imageName: string;
  imageUrl: string;
  duration: number;
}

export interface ICourseState {
  courses: ICourse[];
  course: any;
  myCourse: ICourse[];
  courseIdBackend: any;
  isLoading: boolean;
  error: string;
}

// ---------------------------------------------------------------------------------------------------------------------------------
// Params

export interface IGettingAllCoursesParams {
  parsedToken: string;
}

export interface IReceiveCoursesByCategoryParams {
  categoryId: number;
  parsedToken: string;
}

export interface IGettingACourseParams {
  courseId: number;
  parsedToken: string;
}

export interface ICourseCreation {
  name: string;
  description: string;
  price: string;
  language: string;
}

export interface ICourseCreationParams {
  categoryId: number;
  value: ICourseCreation;
  parsedToken: string;
}

export interface IPriceFilteringParams {
  option: string;
  parsedToken: string;
}

export interface ILanguageFilteringParams {
  language: string;
  parsedToken: string;
}
