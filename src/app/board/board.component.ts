import { Component, OnInit } from '@angular/core';
import { Board } from '../board';

@Component({
  selector: 'app-board',//组件选择器名称
  templateUrl: './board.component.html', //模板文件路径
  styleUrls: ['./board.component.css']//样式文件路径
})
export class BoardComponent implements OnInit {

  constructor() { }

  board: Board = {
    id: 1,
    name: 'Webhook verbinden mit Dialogflow'
  };

  ngOnInit() {
  }

}
