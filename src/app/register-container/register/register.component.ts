import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {registerUserAction, UserPayload} from '../../store/actions/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user =  new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  @Output() emitRegisterUser = new EventEmitter<UserPayload>();


  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.emitRegisterUser.emit(this.user.value);
  }
}
