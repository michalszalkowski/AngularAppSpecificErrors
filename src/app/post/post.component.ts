import {Component, OnInit} from '@angular/core';
import {PostService} from "./post.service";
import {AppError} from "../core/app-error";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {

  private posts: any[];

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (response) => {
        this.posts = response;
      }, (error: AppError) => {
        console.log(error.code, error.message);
      });
  }

}
