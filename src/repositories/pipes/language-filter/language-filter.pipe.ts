import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageFilter'
})
export class LanguageFilterPipe implements PipeTransform {

  transform(array: any, language?: any): any {
    if (language) {
      return array.filter(item => item.language === language);
    } else {
      return array;
    }
  }

}
