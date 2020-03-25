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
    this.branchName = `${this.typeBranch}/${this.getTitle()}`;
    this.firstMessageCommit = `${this.typeBranch}/${this.getMessageCommit()}`;
    this.submitted = true;
  }

  tryAgain(): void {
    this.typeBranch = '';
    this.title = '';
    this.submitted = false;
  }

  private getTitle(): string {
    let title = this.title.toLowerCase().trim();
    title = title.split(" ").join("-");
    title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return title;
  }

  private getMessageCommit(): string {
    let message = this.title.toLowerCase().trim();
    message = message.split(" ").join(" ");
    message = message.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return message;
  }

}
