import { AbstractControl, ValidatorFn } from '@angular/forms';
 
export function validateTag(control: AbstractControl) :{[key: string]: boolean} {
	//if (!control.value.includes ('#')) {
	let tag = control.value;
	if (tag.indexOf('#') != -1) {
	//, if the validation passes, we simply return null.
	
		return null;
	}
	//f our validation fails, we return an object with a key for the error name and a value of true.
	return {mismatch:true};
};


