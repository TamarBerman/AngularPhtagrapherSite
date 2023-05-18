import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/Classes/review';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.scss']
})
export class CustomerReviewsComponent implements OnInit {

  reviews: Array<Review> = [];
  constructor(public blogSer: BlogService, public router: Router) { }

  ngOnInit(): void {
    // Get Reviews from api
    this.blogSer.GetReviews().subscribe((r: any) => {
      for (let index = 0; index < r.length; index++) {
        const element = r[index] as Review;
        this.reviews.push(element);
      }
    })
  }
// increase Like using put api
  increaseLike(reviewId: number): void {
    // בודק האם משתמש זה כבר לחץ על לייק נוכחי
    if (!this.blogSer.likeClicked[reviewId]) {
      this.blogSer.PutLike(reviewId).subscribe((x: any) => {
        // מעדכן שמשתמש זה לחץ כבר על הלייק
        this.blogSer.likeClicked[reviewId] = true;
        // מציג את הלייק ללא צורך בריענון
        this.reviews[reviewId].Like = x as number;
      });
    }
    else
    // אינו יכול להוסיף לייקים נוספים
    
      alert("you alraedy added a like to this review");
  }

}
