import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Package } from 'src/app/Classes/package';
import { BlogService } from 'src/app/Services/blog.service';


@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit {

  packages: Array<Package> = [];
  constructor(public blogSer: BlogService, public route: Router) {

    // Get Packages from api
    this.blogSer.GetPackages().subscribe((x: any) => {
      for (let index = 0; index < x.length; index++) {
        this.packages?.push(x[index] as Package);
      }
    });
  }

  ngOnInit(): void {
  }

  more(myPackage: any) {
    this.route.navigate(['/more-details/' + myPackage])
  }
}
