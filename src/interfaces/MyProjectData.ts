import { MyTechData } from '.';

export interface MyProjectData {
  [key: string]: string | MyTechData[];
  title: string;
  abstract: string;
  description: string;
  techs: MyTechData[];
  image: string;
}
