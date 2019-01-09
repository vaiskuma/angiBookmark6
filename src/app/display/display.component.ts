import { Component, OnInit, Input } from '@angular/core';
import { ArticleData } from '../article/article.model';
import { Observable } from 'rxjs';
import { NodeService } from '../node.service';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-display',
	templateUrl: './display.component.html',
	styleUrls: [ './display.component.scss' ]
})
export class DisplayComponent implements OnInit {
	@Input() articleData: ArticleData;
	//public Links: Observable<ArticleData[]>;
	public Links: Observable<ArticleData[]>;

	constructor(public nodeService: NodeService) {}

	ngOnInit() {
		this.Links = this.nodeService.getLinks();
	}


	// deleteEntity(l: ArticleData): void {
		// this.articleData = this.articleData.filter(h => h !== articleData);
		// this.nodeService.deleteTag(l.id).subscribe();
		/*
		// oops ... subscribe() is missintg so nothing happens
		this.heroesService.deleteHero(hero.id);
		*/
	//   }
	deleteEntity(id: number) {
		console.log('id', id);
		this.nodeService.deleteTag(id).subscribe(() =>{



			// newsService.deleteNewsAsync(news.id).then(
			// 	function (data) {
			// 		// force table refresh - NO WAY
			// 		var index = vm.newsCollection.indexOf(news);
			// 		if (index !== -1) {
			// 			vm.newsCollection.splice(index, 1);
			// 		}
			// 	},
		// 	 comments => {
		// 	// Emit list event
		// 	EmitterService.get(this.id).emit(comments);
		// },
			
			
			
			 console.log(' Deleted')
		
		 } );
	// 	//   this.notifyDelete.emit(id);
	// 	}
}
}
