import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  @HostListener('window:scroll', [])
  onScroll() {

    let img = document.getElementById('img');
    let intro = document.querySelector('.intro');
    let section_1 = document.querySelector('.section-1 .img-box');
    let logos:NodeListOf<HTMLElement> = document.querySelectorAll('.logos .row') as NodeListOf<HTMLElement>;
    let screenHeight = window.innerHeight;

    if (img) {
      let elementPosition = img.getBoundingClientRect().top;
      let startPoint = elementPosition - screenHeight;
      if(startPoint <= 0){
        img.classList.add('move-up');
      }
    }

    if (intro) {
      let elementPosition = intro.getBoundingClientRect().top;
      let startPoint = elementPosition - screenHeight;
      if (startPoint <= 0) {
        intro.classList.add('text-move')
      }
    }
    if (section_1) {
      let elementPosition = section_1.getBoundingClientRect().top;
      let startPoint = elementPosition - screenHeight;
      if (startPoint <= 0) {
        section_1.classList.add('text-move')
      }
    }

    // if all element moved up don't go to loop
    // if(!logos[logos.length - 1].classList.contains('move-up')){
    //   logos.forEach((element: HTMLElement) => {
    //     let elementPosition = element.getBoundingClientRect().top;
    //     let startPoint = elementPosition - screenHeight;

    //     if (startPoint <= 0) {
    //       element.classList.add('move-up');
    //     }
    //   });
  }




  counters = {
    reviews : {count: 0, target: 244982},
    downloads : {count: 0, target: 2488938},
    employees : {count: 0, target: 1335}
  };

  ngOnInit(): void {
    (Object.keys(this.counters) as (keyof typeof this.counters)[]) .forEach(counterType =>{
      this.startCounter(counterType);
    });
  }

  startCounter(counterType: keyof typeof this.counters){
    const {target} = this.counters[counterType];
    const duration = 4000;
    const incrementInterval = 50;
    const step = target / (duration/ incrementInterval);

    const intervalId = setInterval(()=> {
      this.counters[counterType].count += step;
      if (this.counters[counterType].count >= target) {
        this.counters[counterType].count = target;
        clearInterval(intervalId);
      }
    }, incrementInterval);
  }

}

