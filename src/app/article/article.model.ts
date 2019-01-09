import {FormGroup, FormControl} from '@angular/forms';

export class ArticleData {
  

  title: string;
  tag: string;
  link: string;
  votes:number
 


  constructor(title: string,tag:string, link:string,  votes?:number) {
    this.title = title;
    this.tag = tag;
    this.link = link;
    this.votes = votes || 0;
  }
}