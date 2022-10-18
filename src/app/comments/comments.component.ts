import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BugRegistrarService } from '../nav-bar/service/bug-registrar.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private bugService: BugRegistrarService) { }
  ngOnInit(): void {

  }

  setComment(comment: string){
    this.bugService.setComment(comment);
  }

  submit(){

    this.setComment('this.form.values.comment;')
  }

}
