import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-catalog-ui',
  templateUrl: './catalog-ui.component.html',
  styleUrls: ['./catalog-ui.component.less']
})
export class CatalogUiComponent implements  OnInit {

  @Input() courses:any
  @Input() showmessage:string = ''

  ngOnInit(): void {
    
  }

}
