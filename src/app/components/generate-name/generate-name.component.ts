import { Component, OnInit, OnDestroy } from '@angular/core';

import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-generate-name',
  templateUrl: './generate-name.component.html',
  styleUrls: ['./generate-name.component.scss']
})
export class GenerateNameComponent implements OnInit, OnDestroy {
  typeBranch = 'feature';
  title = '';
  branchName = '';

  copied = false;
  subscription: Subscription

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  generate(): void {
    const title = this.getTextFormatted();

    if (this.title.length <= 0) {
      this.branchName = '';
    } else {
      this.branchName = `${this.typeBranch}/${title}`;
    }
  }

  copy() {
    if (this.title.length > 0) {
      let copyText = document.getElementById("branchName") as HTMLInputElement;
      copyText.select();
      copyText.setSelectionRange(0, 99999)
      document.execCommand("copy");

      this.copied = true;

      this.subscription = timer(2000).subscribe(() => this.copied = false);
    }
  }

  private getTextFormatted() {
    const text = this.title.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[(\,|\.|\;|\:)]/gi, '')
      .toLowerCase().trim();
    let title = text.replace(/ +/g, ' ').replace(/\s/g, '-');

    return title;
  }

}
