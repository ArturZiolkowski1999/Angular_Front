import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from 'src/app/Models/post.model';
import { ActivatedRoute, convertToParamMap, ParamMap } from '@angular/router';


import { PostComponent } from './post.component';
import { PostService } from 'src/app/Services/post.service';
import { PostBuilder } from 'src/app/Models/Mocks/post.model';

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let postService: jasmine.SpyObj<PostService>;

  beforeEach(async () => {
    // Create a spy object for the PostService
    const spy = jasmine.createSpyObj('PostService', ['getPostById']);
    
    await TestBed.configureTestingModule({
      declarations: [ PostComponent ],
      providers: [
        // Provide a mocked version of the ActivatedRoute dependency
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: 1 }) },
          },
        },
        { provide: PostService, useValue: spy },
      ],
    })
    .compileComponents();

    postService = TestBed.inject(PostService) as jasmine.SpyObj<PostService>;

    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;

    // Create a mock post object and set it as the input value
    // const mockPost: Post = { id: 1, title: 'Post title', content: 'Post content', author: 'Post author', images: [] };
    // component.post = mockPost;
    
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get post by id', () => {
  //   const expectedPost: Post = new PostBuilder()
  //   .setId(1)
  //   .setTitle('Myszo Jeleń')
  //   .setContent('To Myszojeleń, król zwierząt na miarę naszych czasów')
  //   .setAuthor('Jan Kowalski')
  //   .setImages([
  //     'https://bi.im-g.pl/im/b0/3a/18/z25403824AMP,Wietnam--Naukowcy-odnalezli-kanczyla--czyli-tzw--m.jpg',
  //     'https://fera.pl/images/companies/1/kanczyl-srebrnogrzbiety.png?1666160861571',
  //     'https://static.polityka.pl/_resource/res/path/83/ce/83ce2f3f-b53e-43be-9f16-8fc33153ce0c_f1400x900'
  //   ])
  //   .build();

  //   // Set up the spy object to return the expected post
  //   postService.getPostById(1);

  //   // Call ngOnInit to get the post by id
  //   component.ngOnInit();

  //   // Check that the post was set correctly
  //   expect(component.post).toEqual(expectedPost);
  // });

});
