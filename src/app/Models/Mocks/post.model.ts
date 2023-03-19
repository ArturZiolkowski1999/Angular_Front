import { Post } from "../post.model";

export class PostBuilder {

  private _data: Post = {
    id: 1,
    title: "",
    content: "",
    author: "",
    images: []
  }

  setId(id: number): PostBuilder {
    this._data.id = id;
    return this;
  }

  setTitle(title: string): PostBuilder {
    this._data.title = title;
    return this;
  }

  setContent(content: string): PostBuilder {
    this._data.content = content;
    return this;
  }

  setAuthor(author: string): PostBuilder {
    this._data.author = author;
    return this;
  }

  setImages(images: string[]): PostBuilder {
    this._data.images = images;
    return this;
  }

  build(): Post {
    return this._data;
  }
}
