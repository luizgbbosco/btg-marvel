import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = '';
  @Input() url: string = '';
  @Output() onClick = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton(event: MouseEvent): void {
    this.onClick.emit(event);
  }

}