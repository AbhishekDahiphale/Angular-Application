
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class MarvellousChkPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown 
  {
    var flag:string="";
    if(args[0] == "Prime")
    {
      var i=0;
      for(i=2;i<value/2;i++)
      {
        if((value%i)==0)
        {
          flag= "It is Not Prime"
        }
        else
        {
          flag = "It is Prime"
        }
      }
    }

    if(args[0] == "Perfect")
    {
      var i=0;
      var tmp = 0;
      for(i=1;i<value/2;i++)
      {
        if((value%i)==0)
        {
          tmp = tmp + i
        }
      }
      if(tmp==value)
      {
        flag= "It is Perfect"
      }
      else
      {
        flag= "It is Not Perfect"
      }

    }

    if(args[0]=="Even")
    {
      if((value%2)==0)
      {
        flag="It is Even"
      }
      else
      {
        flag = "It is Not even"
      }
    }

    if(args[0]=="Odd")
    {
      if((value%2)!=0)
      {
        flag="It is Odd"
      }
      else
      {
        flag = "It is not Odd"
      }
    }

    return flag;
  }

}
