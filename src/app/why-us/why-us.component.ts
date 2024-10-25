import { Component } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.css'
})
export class WhyUsComponent {
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
