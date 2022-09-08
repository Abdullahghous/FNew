import { Component, HostListener, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Folder';

  public getScreenWidth: any;
  public getScreenHeight: any;

  public showInBigScreen: any = true;
  public showInSmallScreen: any = false;

  abc: any = "let data of oddImgs";

  @HostListener('window:resize', ['$event'])

  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
  

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
    
    if(this.getScreenWidth < 640) {
      console.log(this.getScreenWidth, 'inside if');
      // this.showInBigScreen = false;
      // this.showInSmallScreen = true;
      this.index = '1 / 30';
      // this.hideDivSmallerScreen = true;
      // this.showDivInSmallerScreen = false

    }
}

  public firstDiv = 1;

  @ViewChild('zoomBox') public zoomBox!: TemplateRef<unknown>;
  @ViewChild('zoomLeft') public zoomLeft!: TemplateRef<unknown>;

  public evenImgs: any[] = [
    {
      img: '../assets/a2.jpg',
      index: 2
    }
  ];
  public oddImgs: any[] = [
    {
      img: '../assets/a1.jpg',
      index: 1
    }
  ];

  public showDoubleImg: any;
  showIndexFirst: any = 1;
  index: any = '0 - 1 / 30';
  nextbtn1 = true;
  nextbtn2 = false;

  prebtn1 = true;
  prebtn2 = false;

  data:any;

  // ngAfterViewInit(): void {
  //   // this.goTo();
  //   // console.log(this.zoomBox, 'ffff');
  // }

  public onloadeddata(e:any, data:any): void {
    this.data = data;
    const zoomScreen = e.path[0];
    let zoom = 1;
    const zoomingSpeed = 0.1;
    document.addEventListener("wheel", (e)=> {
      if (e.deltaY > 0) {
          zoomScreen.style.transform = `scale(${(zoom += zoomingSpeed)})`;
      }
      else {
        zoomScreen.style.transform = `scale(${(zoom -= zoomingSpeed)})`;
    }
  })
  }

  public zoomLeftImg(e:any): void {
    console.log(e, 'ffffff');
    const zoomScreen = e.path[0];
    let zoom = 1;
    const zoomingSpeed = 0.1;
    document.addEventListener("wheel", (e)=> {
      if (e.deltaY > 0) {
          zoomScreen.style.transform = `scale(${(zoom += zoomingSpeed)})`;
      }
      else {
        zoomScreen.style.transform = `scale(${(zoom -= zoomingSpeed)})`;
    }
  })
  }
  

  next() {
    this.showIndexFirst = 0;
    this.showDoubleImg = 2;
    this.firstDiv = 0;

    this.evenImgs = [];
    this.oddImgs = [];

    const id = this.data.index;

    const newImgIndexEven = id + 1;
    const newImgIndexOdd = newImgIndexEven + 1;

    if(newImgIndexEven === 32) {
      this.nextbtn1 = false;
      this.nextbtn2 = true;
    }

    // if(this.showInSmallScreen){
    // }
    // else {
    //   this.index = `${newImgIndexEven} - ${newImgIndexEven === 30 ? 0 : newImgIndexOdd}`;
    // }

    if(this.getScreenWidth < 640) {
      // this.showInBigScreen = false;
      // this.showInSmallScreen = true;
      this.index = `${newImgIndexEven}`;
      // this.hideDivSmallerScreen = true;
      // this.showDivInSmallerScreen = false
    }
    else {
      this.index = `${newImgIndexEven} - ${newImgIndexEven === 30 ? 0 : newImgIndexOdd}`;
    }

    this.allImages.forEach((even) => {
      if(even.index == newImgIndexEven) {
        this.evenImgs.push(even)
      }
    })

    this.allImages.forEach((odd) => {
      if(odd.index == newImgIndexOdd) {
        this.oddImgs.push(odd)
      }
    })
  }

  pre() {
    this.showIndexFirst = 0;
    this.showDoubleImg = 2;

    this.evenImgs = [];
    this.oddImgs = [];

    const id = this.data.index;

    const newImgIndexEven = id - 1;
    const newImgIndexOdd = newImgIndexEven - 1;

    if(newImgIndexEven === 2) {
      console.log('ddddqwqwqwq');
      this.index = '0 - 1 / 30';
      this.prebtn1 = false;
      this.prebtn2 = true;
      this.firstDiv = 1;
      this.showDoubleImg = 1;
      this.showIndexFirst = 1;
    }
    else {
      this.prebtn1 = true;
      this.prebtn2 = false;
    }

    if(this.getScreenWidth < 640) {
      // this.showInBigScreen = false;
      // this.showInSmallScreen = true;
      this.index = `${newImgIndexOdd}`;
      // this.hideDivSmallerScreen = true;
      // this.showDivInSmallerScreen = false
    }
    else {
      this.index = `${newImgIndexEven} - ${newImgIndexEven === 30 ? 0 : newImgIndexOdd}`;
    }




    this.allImages.forEach((even) => {
      if(even.index == newImgIndexEven) {
        this.evenImgs.push(even)
      }
    })

    this.allImages.forEach((odd) => {
      if(odd.index == newImgIndexOdd) {
        this.oddImgs.push(odd)
      }
    })

  }

  public allImages = [
    {
      img: '../assets/a1.jpg',
      index: 1
    },
    {
      img: '../assets/a2.jpg',
      index: 2
    },
    {
      img: '../assets/a3.jpg',
      index: 3
    },
    {
      img: '../assets/a4.jpg',
      index: 4
    },
    {
      img: '../assets/a5.jpg',
      index: 5
    },
    {
      img: '../assets/a6.jpg',
      index: 6
    },
    {
      img: '../assets/a7.jpg',
      index: 7
    },
    {
      img:'../assets/a8.jpg',
      index: 8
    },
    {
      img:'../assets/a9.jpg',
      index: 9
    },
    {
      img: '../assets/a10.jpg',
      index: 10
    },
    {
      img: '../assets/a11.jpg',
      index: 11
    },
    {
      img: '../assets/a12.jpg',
      index: 12
    },
    {
      img: '../assets/a13.jpg',
      index: 13
    },
    {
      img: '../assets/a14.jpg',
      index: 14
    },
    {
      img: '../assets/a15.jpg',
      index: 15
    },
    {
      img: '../assets/a16.jpg',
      index: 16
    },
    {
      img: '../assets/a17.jpg',
      index: 17
    },
    {
      img: '../assets/a18.jpg',
      index: 18
    },
    {
      img: '../assets/a19.jpg',
      index: 19
    },
    {
      img: '../assets/a20.jpg',
      index: 20
    },
    {
      img: '../assets/a21.jpg',
      index: 21
    },
    {
      img: '../assets/a22.jpg',
      index: 22
    },
    {
      img: '../assets/a23.jpg',
      index: 23
    },
    {
      img: '../assets/a24.jpg',
      index: 24
    },
    {
      img: '../assets/a25.jpg',
      index: 25
    },
    {
      img: '../assets/a26.jpg',
      index: 26
    },
    {
      img: '../assets/a27.jpg',
      index: 27
    },
    {
      img: '../assets/a28.jpg',
      index: 28
    },
    {
      img: '../assets/a29.jpg',
      index: 29
    },
    {
      img: '../assets/a30.jpg',
      index: 30
    }
  ]

}
