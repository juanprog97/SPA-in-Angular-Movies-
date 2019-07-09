import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TMDBApiServiceService {
  private baseURL = 'https://api.themoviedb.org/3'
  private key = '7f62276b73439fa13a5e91f31830334e'
  private language = 'en-US';
  constructor(private _http: HttpClient) { }
  getFromTMBD(search: string,page:number): Promise<any>{
    let url = `${this.baseURL}/${search}?api_key=${this.key}&language=${this.language}&page=${page}`
    console.log('url',url)
    return this._http.get(url).toPromise();
  }

  getFromTMBDSearch(search: string,name: string,page:number): Promise<any>{
    let url = `${this.baseURL}/${search}?api_key=${this.key}&language=${this.language}&query=${name}&page=${page}`
    console.log('url',url)
    return this._http.get(url).toPromise();
  }

  getPopularMovies(page):Promise<any>{
    return this.getFromTMBD('movie/popular',page);
  }

  getTopRatedMovies(page):Promise<any>{
    return this.getFromTMBD('movie/top_rated',page);
  }

  getCoomingSoonMovies(page):Promise<any>{
    return this.getFromTMBD('movie/upcoming',page);
  }

  getNowPlayingMovies(page):Promise<any>{
    return this.getFromTMBD('movie/upcoming',page);
  }

  searchMovie(name):Promise<any>{
    return this.getFromTMBDSearch('search/movie',name,1);
  }




  getPopularTv(page):Promise<any>{
    return this.getFromTMBD('tv/popular',page)
  }

  getPopularActor(page):Promise<any>{
    return this.getFromTMBD('person/popular',page)
  }
}
