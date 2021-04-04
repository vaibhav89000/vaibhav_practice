import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practice';


  form: FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  }


  submit(){
    console.log(this.form.value);
  }
}
