import { Component, HostBinding, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { ArticleData } from '../article/article.model';
import { Observable } from 'rxjs/Observable';

import { FormGroup, FormControl, FormBuilder, Validators, NgModel } from '@angular/forms';

import { UserService } from '../core/user.service';
import { NodeService } from '../node.service';
import { validateTag } from './validateTag.validator';

@Component({
	selector: 'create-link-root',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: 'create-link.component.html',
	styleUrls: [ 'create-link.component.scss' ],
	providers: []
})
export class CreateLinkComponent {
	@Input() articleData: ArticleData;
	public linksForm: FormGroup; // our model driven form
	public submitted: boolean = false; // keep track on whether form is submitted
	public events: any[] = []; // use later to display form changes

	title: string = '';
	tag: string = '';
	link: string = '';
	

	items: Observable<any>[];

	nothing: ArticleData[] = [];


	filteredName = '';
	searchText = '';
	toDoListArray: any[];

	characters = [ 'Finn the human', 'Jake the dog', 'Princess bubblegum', 'Lumpy Space Princess', 'Beemo1', 'Beemo2' ];

	constructor(
		
		private fb: FormBuilder,
		public userService: UserService,
		public nodeService: NodeService,
		
	) {}

	ngOnInit(): void {
		this.createForm();
		
	}

	createForm() {
		this.linksForm = this.fb.group({
			title: [ '' ],
			tag: [ '', [Validators.required, validateTag] ],
			link: [ '', Validators.required ]
		});
		this.submitted = true;
	}

	get f() { return this.linksForm.controls; }


	onSubmitAddArticle(linksForm): boolean {
		this.title = linksForm.title;
		this.tag = linksForm.tag;
		this.link = linksForm.link;
		
		// var user = firebase.auth().currentUser;
		

	

		console.log('Adding article title:' + this.title + ' tag value: ' + this.tag + 'with a link: ' + this.link);
		this.nothing.push(new ArticleData(this.title, this.tag, this.link, 0));
		console.log('form value', this.linksForm.value);
		console.log(this.articleData);
		this.nodeService.addLink(new ArticleData(this.title, this.tag, this.link)).subscribe(console.log);

		linksForm.title = null;
		linksForm.link = null;
		linksForm.tag = null;

		return false;
	}

	compareNumbers(a, b) {
		return a - b;
	}

	sortedArticles(): ArticleData[] {
		return this.nothing.sort((a: ArticleData, b: ArticleData) => b.votes - a.votes);
	}
}
