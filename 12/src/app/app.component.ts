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
      FirstName : ['',[Validators.required, Validators.pattern('[a-zA-Z]*') ]],
      LastName : ['',[Validators.required, Validators.pattern('[a-zA-Z]*') ]],
      Email : ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      telephone : ['',[Validators.required, Validators.pattern('^[7-9][0-9]{9}$') ]],
      city : ['',[Validators.required,Validators.minLength(4)]],
      state : ['',[Validators.required]],
      code : ['',[Validators.required,Validators.pattern("[0-9]{5}$")]],
      comments:['',[Validators.pattern("[a-zA-Z. ]{0,30}")]]
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
