import { Pipe, PipeTransform } from '@angular/core';
import { Data } from '@angular/router';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value1: Date): any {
      var startDate = new Date();
      var endDate = value1;
      var Time = endDate.getDate() - startDate.getDate();
      return Time / (1000 * 3600 * 24);
    }
  
  }

