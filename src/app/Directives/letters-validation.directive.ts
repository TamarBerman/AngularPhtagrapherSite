import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appLettersValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: LettersValidationDirective,
    multi: true
  }]
})
export class LettersValidationDirective {

  validate(control: AbstractControl): { [key: string]: any } | null {
    var reg =/^[a-z\u0590-\u05fe]+$/i;
    if (control.value && !reg.test(control.value))
      return { "onlyLettersInValid": true }
    return null
  }
  constructor() { }

}
