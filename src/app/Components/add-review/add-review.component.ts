import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Review } from 'src/app/Classes/review';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  reviewForm!: FormGroup;
  dataToSave?: Review;
  showModal: boolean = false;
  closeResult: string = '';

  constructor(public blogSer: BlogService, public route: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    // reactive form
    this.reviewForm = new FormGroup({
      UserName: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(28)]),
      Email: new FormControl("", [Validators.email]),
      PhoneNumber: new FormControl("", [Validators.minLength(7), Validators.maxLength(10)]),
      Date: new FormControl(),
      Like: new FormControl(),
      ReviewContent: new FormControl("", [Validators.required, Validators.nullValidator]),
      ProfileSrc: new FormControl(),
    })
  }
  // submit Review Form
  submitReviewForm(): void {
    this.dataToSave = this.reviewForm.value as Review;
    this.blogSer.AddReview(this.dataToSave).subscribe((response: any) => {
    });
    // subject listeners
    this.blogSer.setGiftSubject("Tank you for review, the gift is waiting for you!...🎁🎁")
  }

  navigateToReviews(): void {
    this.route.navigate(['/customer-reviews'])
  }

  // modal
  open(content: any) {
    debugger
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
