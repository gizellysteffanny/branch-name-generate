import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-name',
  templateUrl: './generate-name.component.html',
  styleUrls: ['./generate-name.component.scss']
})
export class GenerateNameComponent implements OnInit {
  typeBranch = 'feature';
  title = '';
  branchName = '';

  constructor() { }

  ngOnInit(): void {
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
    let copyText = document.getElementById("branchName") as HTMLInputElement;
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
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
