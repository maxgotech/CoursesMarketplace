import { IUser } from "src/app/shared/data-access/user/dto/IUser"

export interface ICourse {
  id: number
  name: string
  price: number | null
  translit: string
  image_path: string
  published: boolean
  user:IUser
}