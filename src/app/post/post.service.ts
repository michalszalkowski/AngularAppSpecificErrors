import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';
import {CrazyShitError, NotFoundError, ServerError} from "../core/app-error";

@Injectable()
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) {
  }

  getPosts(): any {
    return this.http.get(this.url)
      .catch((error: Response) => {

        if (error.status === 404) {
          return Observable.throw(new NotFoundError(error));
        }

        if (error.status === 500) {
          return Observable.throw(new ServerError(error));
        }

        return Observable.throw(new NotFoundError(error));

      });
  }
}
