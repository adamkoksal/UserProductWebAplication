import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Directive({
  selector: '[uniqueUsername]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidatorDirective, multi: true }]
})
export class UniqueUsernameValidatorDirective implements AsyncValidator {

  constructor(private userService: UserService) { }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.userService.getUserByUsername(c.value).pipe(
      map(users => {
        return users && users.length > 0 ? { 'uniqueUsername': true } : null;
      })
    );
  }

}
