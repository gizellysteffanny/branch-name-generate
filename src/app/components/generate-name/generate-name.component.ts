import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-name',
  templateUrl: './generate-name.component.html',
  styleUrls: ['./generate-name.component.scss']
})
export class GenerateNameComponent implements OnInit {
  typeBranch: string;
  title: string;

  branchName = '';
  firstMessageCommit = '';

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  generate(): void {
    const { title, message } = this.getTextFormatted();

    this.branchName = `${this.typeBranch}/${title}`;
    this.firstMessageCommit = `${this.typeBranch}/${message}`;
    this.submitted = true;
  }

  tryAgain(): void {
    this.typeBranch = '';
    this.title = '';
    this.submitted = false;
  }

  private getTextFormatted() {
    const text = this.title.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[(\,|\.|\;|\:)]/gi, '')
      .toLowerCase().trim();
    let title = text.replace(/ +/g, ' ').replace(/\s/g, '-');
    let message = text.replace(/ +/g, ' ').replace(/\s/g, ' ');

    return {title, message};
  }

}
