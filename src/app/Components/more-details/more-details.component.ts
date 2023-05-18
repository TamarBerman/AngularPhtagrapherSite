import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Package } from 'src/app/Classes/package';
import { BlogService } from 'src/app/Services/blog.service';

@Component({
  selector: 'app-more-details',
  templateUrl: './more-details.component.html',
  styleUrls: ['./more-details.component.scss']
})
export class MoreDetailsComponent implements OnInit {

  checked: boolean = false;
  closeResult?: string;
  myServiceFromRoute: Package = {};
  show: boolean = true;
  routeTitle: string = "";
  myPackage: Package = {};
  dismissReasonString?: string;


  constructor(public blogSer: BlogService, private modalService: NgbModal, public route: ActivatedRoute, public router: Router,) { }
  ngOnInit(): void {
    // שולף title
    this.route.params.subscribe((p) => {
      this.routeTitle = p["title"];
    })
    // בודק
    this.blogSer.GetPackages().subscribe((x: any) => {
      for (let index = 0; index < x.length; index++) {
        this.myPackage = x[index] as Package;
        if (this.routeTitle == this.myPackage.Title) {
          this.checked = true;
        }
      }
    })
    // מביא חבילה מapi
    this.blogSer.GetOnePackage(this.routeTitle.trim()).subscribe((p: Package) => {
      this.myServiceFromRoute = p as Package;
    });
  }

  open(content: any) {
    debugger
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    this.show = false;
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      debugger
      this.navigateToReviews();
      this.dismissReasonString = 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.dismissReasonString = 'by clicking on a backdrop';
    } else {
      this.dismissReasonString = `with: ${reason}`;
    }
    this.navigateToReviews();
    return this.dismissReasonString;
  }

  showing(): void {
    this.show = true;
  }

  navigateToReviews(): void {
    this.router.navigate(['/my-services']);
  }

}

