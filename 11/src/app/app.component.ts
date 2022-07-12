import { Component } from '@angular/core';
import { FormControl,FormBuilder, Validators,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public value :any;
  public flag : boolean = false
  public State:any = ['Maharashtra','Gujarat','UttarPradesh'];

  constructor(public fobj:FormBuilder)
  {}
  
  MarvellousForm = this.fobj.group(
    {
      FirstName : [''],
      LastName : ['',],
      Email : [''],
      telephone : [''],
      city : [''],
      state : [''],
      code : [''],
      comments:['']
    }
  )

  
  public get state()
  {
    return this.MarvellousForm.get('Address.state')
  }

  changestate(e:any)
  {
    this.state?.setValue(e.target.value,{onself:true})
  }
  

  public submit()
  {
   this.flag = true
   this.value = this.MarvellousForm.value
  }


  
}
