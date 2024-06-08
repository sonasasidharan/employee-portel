import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], args:any) {
    console.log(args)
    if(!value) return []
    if(!args) return value
    let key=args.toLowerCase()

    value=value.filter(item=>item.username.toLowerCase().includes(key))

    return value;
  }

}
