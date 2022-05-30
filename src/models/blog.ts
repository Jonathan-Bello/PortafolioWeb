import Author from "./author";
import Tag from "./tag";
import Tech from "./tech";

export default interface Blog {
  id: number;
  title: string;
  body: string;
  description : string;
  image: string;
  url : string;
  type: number,
  favorite: boolean,
  tag : Tag,
  techs : Tech[],
  authors: Author[],
  created_at: Date,
  updated_at: string
}