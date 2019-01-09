import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter',
	pure: false
})
export class FilterPipe implements PipeTransform {
	transform(items: any[], searchText: string): any[] {
		if (!items) return [];
		if (!searchText) return items;
		searchText = searchText.toLowerCase();
		return items.filter((item) => {
			// The includes() method determines whether an array
			// includes a certain value among its entries, returning true or false as appropriate.
			return item.toLowerCase().includes(searchText);
		});
	}
}
