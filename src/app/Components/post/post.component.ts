import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/Models/post.model';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post | undefined;
  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const postId = this.route.snapshot.params['id'];
    if(postId){
      this.postService.getPostById(postId).subscribe( post => {
        this.post = post;
      })
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
