import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { CommentService } from '../../services/comment/comment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Comment } from '../../models/comment';
import { fadeInAnimation } from '../../animations';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  animations: [fadeInAnimation]
})
export class CommentComponent implements OnInit {

  @Input() user         : User;

  private comments      : Array<Comment>;
  private commentForm   : FormGroup;
  private commentModal  : NgbModalRef;
  private commentError  : boolean;
  private loading       : boolean;

  constructor(
    private commentService: CommentService,
    private fb						: FormBuilder,
    private modalService  : NgbModal) {

    this.comments = new Array<Comment>();
    this.commentModal = null;
    this.commentError = false;
    this.loading = false;
    this.commentForm = this.fb.group({
      'comment' : ['', [Validators.required, Validators.maxLength(150)]],
    });
  }

  ngOnInit() {
    this.loadComments();
  }

  loadComments() {
    this.loading = true;
    this.commentService.findAll().subscribe(
      (comments) => { 
        setTimeout(() => {
            this.comments = comments
            this.loading = false;
        }, 2000);
      },
      (err) => { 
        this.comments = new Array<Comment>();
        this.loading = false;
      }
    );
  }

  addComment(commentModal) {
    this.commentModal = this.modalService.open(commentModal);
  }

  submitCommentForm() {
    if(!this.commentForm.valid) this.commentForm.markAsTouched();
    else {
      let comment = new Comment();
      comment.user = this.user;
      comment.comment = this.commentForm.get('comment').value;
      this.saveComment(comment);
    }
  }

  saveComment(comment) {
    this.loading = true;
    this.commentService.save(comment).subscribe(
      (comment) => {
        setTimeout(() => {
          comment = comment;
          comment.user = this.user;
          this.comments.splice(0, 0, comment);
          this.commentModal.close();
          this.loading = false;
        }, 2000);
      },
      (err) => { 
        this.commentError = true;
        this.loading = false;
      }
    );
  }

}
