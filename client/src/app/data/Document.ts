import { Category } from "./Category";

export class Document {
  id!:number;
  name!: string;
  file!: string;
  category!:Category;
  visibility!:number;
}
