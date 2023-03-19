import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostBuilder } from '../Models/Mocks/post.model';

import { PostService } from './post.service';
import { Config } from '../Models/config';

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the API URL from config', () => {
    const apiUrl = 'http://localhost:3000/posts';
    const config: Config = { postApiUrl: apiUrl };
    service.getApiUrl().subscribe(response => {
      expect(response.postApiUrl).toEqual(apiUrl);
    });
    const request = httpMock.expectOne('/assets/config.json');
    request.flush(config);
  });
  
  it('should return all posts', () => {
    const mockPosts = [
      new PostBuilder()
        .setId(1)
        .setTitle('Myszo Jeleń')
        .setContent('To Myszojeleń, król zwierząt na miarę naszych czasów')
        .setAuthor('Jan Kowalski')
        .setImages([
          'https://bi.im-g.pl/im/b0/3a/18/z25403824AMP,Wietnam--Naukowcy-odnalezli-kanczyla--czyli-tzw--m.jpg',
          'https://fera.pl/images/companies/1/kanczyl-srebrnogrzbiety.png?1666160861571',
          'https://static.polityka.pl/_resource/res/path/83/ce/83ce2f3f-b53e-43be-9f16-8fc33153ce0c_f1400x900'
        ])
        .build(),

      new PostBuilder()
        .setId(2)
        .setTitle('Szczupak')
        .setContent('To Szczupak, król polskich jezior')
        .setAuthor('Jan Kowalski')
        .setImages([
          'https://cdn.galleries.smcloud.net/t/galleries/gf-8ZLx-DBWi-Fp7m_szczupak-wartosc-odzywcza-zastosowanie-kulinarne-664x442-nocrop.jpg',
          'https://zasoby.ekologia.pl/artykulyNew/27384/xxl/shutterstock-1234109542_800x600.jpg'
        ])
        .build(),  
    ];

    service.getAllPosts().subscribe(posts => {
      expect(posts).toEqual(mockPosts);
    });



  });

  it('should retrieve a post by id', () => {
    const mockPost = new PostBuilder()
    .setId(1)
    .setTitle('Myszo Jeleń')
    .setContent('To Myszojeleń, król zwierząt na miarę naszych czasów')
    .setAuthor('Jan Kowalski')
    .setImages([
      'https://bi.im-g.pl/im/b0/3a/18/z25403824AMP,Wietnam--Naukowcy-odnalezli-kanczyla--czyli-tzw--m.jpg',
      'https://fera.pl/images/companies/1/kanczyl-srebrnogrzbiety.png?1666160861571',
      'https://static.polityka.pl/_resource/res/path/83/ce/83ce2f3f-b53e-43be-9f16-8fc33153ce0c_f1400x900'
    ])
    .build();

    service.getPostById(1).subscribe(post => {
      expect(post).toEqual(mockPost);
    });
  });

});
