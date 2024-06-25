import { ICourse } from "src/app/course/data-access/dto/course"

export interface ITagSearch {
  courses: ICourse[]
  primarytag: primary_tag
  secondarytag? : secondary_tag
}

interface primary_tag {
  id: number
  name: string
  translation: string
}

interface secondary_tag extends primary_tag {}