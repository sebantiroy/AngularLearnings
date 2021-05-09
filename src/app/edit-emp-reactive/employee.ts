import { Skills } from "../view-emp/skills";
import { Department } from "./departments";

export class Employees {
      constructor(
        public id: number,
        public name: string,
        public salary:number,
        public permanent:boolean ,
        public department:Department,
        public skills:Skills[] ,
        public today:Date)
        { }
        
    }