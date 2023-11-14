import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../../data-access/auth/auth.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.less']
})
export class RegComponent {
  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }
  public showPassword: boolean = false;
  public show2Password: boolean = false;
  done: boolean = false

  public togglePasswordVisibility(): void { //иконка пароля
    this.showPassword = !this.showPassword;
  }

  public toggle2PasswordVisibility(): void { //иконка проверки пароля
    this.show2Password = !this.show2Password;
  }

  @Input() formError = '';


  ngOnInit(): void { }

  RegForm = this.formBuilder.group({
    mail: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required]),
    secondpass: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    secondname: new FormControl('', [Validators.required])
  });


  async reg() {
    const data = this.authService.register(
      this.RegForm.value.name!,
      this.RegForm.value.secondname!,
      this.RegForm.value.mail!,
      this.RegForm.value.pass!
    )
    const response = await lastValueFrom(data)
    this.done = true //добавить вывод об успешной регистрации
    window.location.reload()
  }

}
