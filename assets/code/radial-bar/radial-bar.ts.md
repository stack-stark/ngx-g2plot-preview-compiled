``` js 
import { Component} from '@angular/core';

@Component({
  selector: 'app-radial-bar',
  templateUrl: './radial-bar.component.html',
  styleUrls: ['./radial-bar.component.less']
})
export class RadialBarComponent {

  constructor() { }

  data = [
    { name: 'X6', star: 297 },
    { name: 'G', star: 506 },
    { name: 'AVA', star: 805 },
    { name: 'G2Plot', star: 1478 },
    { name: 'L7', star: 2029 },
    { name: 'G6', star: 7100 },
    { name: 'F2', star: 7346 },
    { name: 'G2', star: 10178 },
  ];

  options = {
    width: 400,
    height: 300,
    data: this.data,
    xField: 'name',
    yField: 'star',
    // maxAngle: 90, //最大旋转角度,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: (datum) => {
        return { name: 'star数', value: datum.star };
      },
    },
  };
}

```