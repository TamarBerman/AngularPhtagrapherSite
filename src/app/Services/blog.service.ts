import { Injectable } from '@angular/core';
import { Package } from '../Classes/package';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Review } from '../Classes/review';


@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // list of packages
  packages: Array<Package> = [];
  // keeps information if the user added like to a specific review
  likeClicked: Array<boolean> = [];

  // Behavior Subject
  giftSubject$: BehaviorSubject<string> = new BehaviorSubject(
    'after write a review you can get gift!'
  );
  setGiftSubject(header: string): void {
    this.giftSubject$.next(header);
  }
  getGiftSubject() {
    return this.giftSubject$;
  }

  constructor(private http: HttpClient) {
  }

  // API's
  public GetPackages(): Observable<Package> {
    const url = 'https://localhost:44323/api/PackageManagement/GetPackages';
    return this.http.get<Package>(url);
  }
  public GetOnePackage(Title: string): Observable<Package> {
    const url = `https://localhost:44323/api/PackageManagement/GetOnePackage/${Title}`;
    let queryParams = new HttpParams().append(Title, 1);
    return this.http.get<Package>(url, { params: queryParams });
  }
  public GetReviews(): Observable<Review> {
    const url = 'https://localhost:44323/api/ReviewManagement/GetReviews';
    return this.http.get<Review>(url);
  }
  public AddReview(review: Review): Observable<Review> {
    const url = 'https://localhost:44323/api/ReviewManagement/AddReview';
    return this.http.post<Review>(url, review);
  }
  public PutLike(reviewIdid: number): Observable<Review> {
    const url = 'https://localhost:44323/api/ReviewManagement/PutLike';
    return this.http.put<Review>(url, reviewIdid);
  }

}
