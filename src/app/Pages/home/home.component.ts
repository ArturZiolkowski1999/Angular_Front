import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts:Array<Post> | undefined = [];
  appendPosts:Array<Post> | undefined = [];
  postSubscription: Subscription | undefined;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts():any {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
    return this.posts;
  }
  onScroll(): void {
    this.postService.getAllPosts().subscribe(posts => {
      this.posts?.push(...posts);
    });   
  }

}
