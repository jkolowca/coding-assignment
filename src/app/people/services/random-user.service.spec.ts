import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RandomUserService } from './random-user.service';
import { RandomUserResponse } from '../interfaces/random-user-interface';

describe('RandomUserService', () => {
  let service: RandomUserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RandomUserService]
    });
    service = TestBed.inject(RandomUserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch a random user', () => {
    const mockResponse: RandomUserResponse = {
      results: [
        {
          picture: {
            large: 'test_picture_large',
            medium: 'test_picture_medium',
            thumbnail: 'test_picture_thumbnail'
          },
          name: {
            title: 'Mr.',
            first: 'John',
            last: 'Doe'
          }
        }
      ]
    };

    service.fetchUser();
    
    const req = httpTestingController.expectOne('https://randomuser.me/api?inc=picture,%20name&results=1');
    expect(req.request.method).toBe('GET');
    
    req.flush(mockResponse);

    const randomUser = service.randomUser();
    expect(randomUser).toBeDefined();
    expect(randomUser?.name.first).toEqual('John');
    expect(randomUser?.name.last).toEqual('Doe');
    expect(randomUser?.picture.large).toEqual('test_picture_large');
    expect(randomUser?.picture.medium).toEqual('test_picture_medium');
    expect(randomUser?.picture.thumbnail).toEqual('test_picture_thumbnail');
  });
});