import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import {Subject} from 'rxjs/subject';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import {ActivatedRoute, Router} from '@angular/router';
import {welcomeMap, navMap,PatientType} from './app.config';
import * as moment from 'moment';

@Injectable()
export class MsShareService {
  //Pratibha
  //newscore = new Subject<number>();
  //end
  //used to maintain a global object
  global : any = {};
  subject : Subject < any >;
  urlMaps : {};
  messages = {
    idNotMappedToUrl: 'Message id is not mapped to http url in config.ts file at application root',
    httpGetUnknownError: 'Unknown error encountered while making http request'
  };
  momentFunc: any;
  constructor(private http : Http, private activatedRoute : ActivatedRoute, private router : Router) {

    this.momentFunc = (moment as any).default ? (moment as any).default : moment;
    this.momentFunc.locale('en');


    this.subject = new Subject();
  
    this.set('navMap', navMap);
    let SearchParams = new URLSearchParams(top.location.search);
    let rawParams = SearchParams.rawParams;

    // (() => { values for answered are none, one, all let sampleUrl =
    // `http://localhost:4200?type=FP`; let sampleUrl = someParam;
    let urlArray = rawParams.slice(rawParams.indexOf('?') + 1).split('&');
    let urlObject = urlArray.reduce((prevValue, x, i) => {
      let elementArray = x && x.split('=');
      (elementArray.length > 0) && (prevValue[elementArray[0]] = elementArray[1]);
      return (prevValue);
    }, {});

    this.set('queryParams', urlObject);
    let welcome = this.get('queryParams')['type'] || 'none';
    PatientType.push(welcome);
    router.navigate([welcomeMap[welcome]]);
  }

  buildLocaleProvider(formatString:string) {
    alert('pk');
    return {
      formatDate: (date:any) => {
        alert('pk1');
        if (date) return this.momentFunc(date).format(formatString);
        else return null;
      },
      parseDate: (dateString:any)=> {
        if (dateString) {
          var m = this.momentFunc(dateString, formatString, true);
          return m.isValid() ? m.toDate() : new Date(NaN);
        } else return null;
      }
    };
  }

  get(id) {
    return (this.global[id]);
  }

  set(id, value) {
    this.global[id] = value;
  }

  emit(id : string, options?: any) {
    this
      .subject
      .next({id: id, data: options});
  };

  filterOn(id : string) : Observable < any > {
    return(this.subject.filter(d => (d.id === id)));
  };

  httpPost(id : string, body?: any) {
    let url = this.urlMaps[id];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this
      .http
      .post(url, body, {headers: headers})
      .map(response => response.json())
      .subscribe(d => {
        this
          .subject
          .next({id: id, data: d, body: body});
      }, err => {
        this
          .subject
          .next({
            id: id,
            data: {
              error: err
            }
          });
      });
  };

  httpGet(id : string, queryParams?: [any], headers?: [any], carryBag?: any) {
    try {
      let url = this.urlMaps[id];
      let myParams = new URLSearchParams();
      queryParams && (queryParams.map(x => myParams.append(x.name, x.value)));

      let myHeaders = new Headers();
      headers && (headers.map(x => myHeaders.append(x.name, x.value)));
      let options;
      (headers || queryParams) && (options = new RequestOptions({
        headers: headers
          ? myHeaders
          : null,
        params: queryParams
          ? myParams
          : null
      }));
      if (url) {
        this
          .http
          .get(url, options)
          .map(response => response.json())
          .subscribe(d => {
            this
              .subject
              .next({id: id, data: d, carryBag: carryBag});
          }, err => {
            this
              .subject
              .next({id: id, error: err});
          });
      } else {
        this
          .subject
          .next({id: id, error: this.messages.idNotMappedToUrl})
      }
    } catch (err) {
      this
        .subject
        .next({id: id, error: this.messages.httpGetUnknownError})
    }
  }

  httpPut(id : string, body?: any) {
    let url = this.urlMaps[id];
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this
      .http
      .put(url, body, {headers: headers})
      .map(response => response.json())
      .subscribe(d => this.subject.next({id: id, data: d, body: body}), err => this.subject.next({
        id: id,
        data: {
          error: err
        }
      }));
  };
}
