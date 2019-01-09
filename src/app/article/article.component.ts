import { Component, OnInit, HostBinding, Input, ChangeDetectionStrategy } from '@angular/core';
import { ArticleData } from './article.model';

import { NodeService } from '../node.service';

@Component({
	selector: 'app-articleC',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './article.component.html',
	styleUrls: [ './article.component.css' ]

})
export class ArticleComponent implements OnInit {
	@HostBinding('attr.class') cssCalss = 'row';

	@Input() article: ArticleData;

	whatsGonnaBe(vid: ArticleData) {
		console.log(JSON.stringify(vid));
	}

	public links: any;


	constructor(private nodeService: NodeService) {}

	voteUp(): boolean {
		this.article.votes += 1;
		console.log(this.article.votes);
		return false;
	}

	voteDown(): boolean {
		this.article.votes -= 1;
		console.log(this.article.votes);
		return false;
	}

	domain(): string {
		const domainAndPath: string = this.article.link;

		try {
			if (domainAndPath.indexOf('//') > -1) {
				let dAP = domainAndPath.split('//')[1];
				console.log(dAP);
				dAP = dAP.split('/')[0];
				return dAP;
			}
			console.log(domainAndPath.split('/')[0]);
			let dAPs = domainAndPath.split('/')[0];
			return dAPs;
		} catch (err) {
			return null;
		}
	}

	ngOnInit() {

	}
}
