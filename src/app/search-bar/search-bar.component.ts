import { Component, OnInit, Input } from '@angular/core';
import { Observable  } from 'rxjs';
import { ArticleData } from '../article/article.model';
import { NodeService } from '../node.service';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';



@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  providers: [],
})


export class SearchBarComponent implements OnInit {

  public links: Observable<ArticleData[]>;
  public tags: string[];
  // @Input () tags: string

    ngOnInit() {
      this.links = this.nodeService.getLinks();
      console.log("this.links",this.links )
     
    
    // this.data = this.nodeService.getTags().subscribe(data => console.log(data));
    this.nodeService.getTags().subscribe(data => this.tags = data);
    





   
  



    
     

      
  
    }

  
   
  
  filteredName = '';
  searchText = '';

  name = 'Angular';
  characters = [
      'Finn the human',
      'Jake the dog',
      'Princess bubblegum',
      'Lumpy Space Princess',
      'Beemo1',
      'Beemo2'
    ]
 

  constructor( public nodeService:NodeService

)  {
    

   }


}



  




