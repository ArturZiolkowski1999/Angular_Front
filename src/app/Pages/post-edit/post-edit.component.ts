import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Post } from 'src/app/Models/post.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {

    // timymce config
    editorConfig = {
      base_url: '/tinymce',
      suffix: '.min',
      plugins: 'lists link image table wordcount'
    }

  editPostForm!: FormGroup;
  title = new FormControl('');
  body = new FormControl('');
  post!: Post;  
  constructor() { }

  ngOnInit(): void {
  }

}
