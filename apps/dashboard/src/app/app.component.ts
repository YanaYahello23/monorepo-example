import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'ng-mf-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'dashboard';
  arr = [64, 34, 25, 12, 22, 11, 90];


  /**
   * O(n 2 )
   * O(1)
   * @param arr
   */
  bubbleSortFun(arr: any[]) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] =
            [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  /**
   * O(n 2 )
   * @param arr
   */
  selectionSortFun(arr: any) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] =
          [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }

  /**
   *
   */
  insertionSortFun(arr: any[]) {
    const len = arr.length;
    // start from second element
    for (let i = 1; i < len; i++) {
      let current = arr[i];
      let j = i - 1;// need to compare current with unsorted

      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }


  /**
   * O(n log n)
   * O(n)
   * @param arr
   */
  mergeSortFun(arr: any[]) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left: any[] = this.mergeSortFun(arr.slice(0, mid));
    const right: any[] = this.mergeSortFun(arr.slice(mid));

    return this.merge(left, right);
  }

  merge(left:any[], right:any[]) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length &&
    rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }


  isValid(s: string): boolean {
    const matchingBrackets = {
      "}":"{",
      ")":"(",
      "]":"[",
    };
    const stack = [];
    let isValid = true;


    for (const char of s) {
      if (char in matchingBrackets) {
        const topElement = stack.pop();
        // @ts-ignore
        if (topElement !== matchingBrackets[char]) {
          return false;
        }
      } else {
        stack.push(char);
      }
    }

    return !stack.length;
  };





}
