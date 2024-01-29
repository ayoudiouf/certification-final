
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, Validators} from '@angular/forms';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{
  ngOnInit(): void {

  }

  constructor(private userservice:UserService,  private formbuilder: FormBuilder) {

  }
  profileForm :FormGroup = this.formbuilder.group({
        email: ['', Validators.required,],
        password: ['', Validators.required,],

      });
//   profileForm = new FormGroup({
//     email: new FormControl(''),
//     password: new FormControl(''),
//   });
  connexion()

  {
this.userservice.login(this.profileForm.value).subscribe((connect:any)=>{
  console.log(connect);

})
  }
}
