import { Post } from '../post.model';
import { PostBuilder } from './post.model';

describe('Post', () => {
  it('should create an instance', () => {
    expect(new PostBuilder().build()).toBeTruthy();
  });

  it('should set the id of the post', () => {
    const post: Post = new PostBuilder().setId(1).build();
    expect(post.id).toBe(1);
  });

  it('should set the title of the post', () => {
    const post: Post = new PostBuilder().setTitle('Title').build();
    expect(post.title).toBe('Title');
  });

  it('should set the content of the post', () => {
    const post: Post = new PostBuilder().setContent('Content').build();
    expect(post.content).toBe('Content');
  });

  it('should set the author of the post', () => {
    const post: Post = new PostBuilder().setAuthor('Author').build();
    expect(post.author).toBe('Author');
  });

  it('should set the images of the post', () => {
    const images: string[] = ['image1.jpg', 'image2.jpg'];
    const post: Post = new PostBuilder().setImages(images).build();
    expect(post.images).toEqual(images);
  });
});
