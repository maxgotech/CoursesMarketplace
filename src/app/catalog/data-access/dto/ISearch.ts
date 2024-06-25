import { ICourse } from "src/app/course/data-access/dto/course"

export interface ISearch {
  search:string
  courses:ICourse[]
}