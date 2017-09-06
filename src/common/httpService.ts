/**
 * Created by zhangs on 2017/2/22.
 */
import {Injectable} from '@angular/core';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs';
import './server-config'

import 'rxjs/add/operator/map';
import {APP_URL, IM_URL} from "./server-config";

@Injectable()
export class HttpService {
  private HEADER = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private http: Http) {
  };

  /**
   * APP 数据 POST
   * @param data
   * @returns {Observable<R>}
   */
  appPost(data: any): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('jsonstr', JSON.stringify(data));
    return this.http.post( APP_URL ,params, {headers: this.HEADER})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * APP 数据 GET
   * @param data
   * @returns {Observable<R>}
   */
  appGet(data: any): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('jsonstr', JSON.stringify(data));
    return this.http.get(APP_URL, {headers: this.HEADER,search:params})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * IM 数据 POST
   * @param data
   * @returns {Observable<R>}
   * @constructor
   */
  IMPost(data: any): Observable<any> {
    return this.http.post( IM_URL , data, {headers: this.HEADER})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * IM 数据 GET
   * @param data
   * @returns {Observable<R>}
   * @constructor
   */
  IMGet(data: any): Observable<any> {


    return this.http.get(IM_URL , {headers: this.HEADER})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * 对返回的数据进行拆分处理，这里返回的就是数据中的data
   * @param res
   * @returns {Response}
   */
  private extractData(res: Response) {
    console.info(res);
    let body = res.json();
    return body ;
  }

  /**
   * 错误拆分处理
   * @param error
   * @returns {any}
   */
  private handleError (error: any) {
   // console.error(error);
    return Observable.throw(error);
  }
}
