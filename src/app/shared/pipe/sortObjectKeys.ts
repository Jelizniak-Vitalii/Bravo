import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'sortObjectKeys'
})

export class sortObjectKeys implements PipeTransform {
  value: string = ''
  keysChecked: string[] = []
  transform( value: {}, ...args: any[]): any {
    for(let [key, val] of Object.entries(value)) {
      if(val === true) {
        this.keysChecked.push(key)
        this.value = this.keysChecked.join(',')
      }
    }
    return this.value
  }
}
