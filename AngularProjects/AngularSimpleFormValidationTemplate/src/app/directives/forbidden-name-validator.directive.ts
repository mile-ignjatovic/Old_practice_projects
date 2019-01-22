import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appForbiddenNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true}]
})
export class ForbiddenNameValidatorDirective implements Validator {
  @Input('appForbiddenNameValidator') appForbiddenNameValidator: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.appForbiddenNameValidator ? forbiddenNameValidator(new RegExp(this.appForbiddenNameValidator, 'i'))(control)
                              : null;
  }
  constructor() { }

}
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}
