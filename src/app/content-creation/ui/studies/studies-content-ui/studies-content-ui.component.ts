import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TextStudyUiComponent } from '../study-types/text-study-ui/text-study-ui.component';
import { VideoStudyUiComponent } from '../study-types/video-study-ui/video-study-ui.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-studies-content-ui',
  standalone: true,
  imports: [
    CommonModule,
    TextStudyUiComponent,
    VideoStudyUiComponent,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './studies-content-ui.component.html',
  styleUrl: './studies-content-ui.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudiesContentUiComponent {
  constructor(){}

  @Input() study:any | undefined

  @Output() openDial = new EventEmitter<boolean>()

  studyType:number = 0

  chooseType(){
    this.openDial.emit(true)
  }
}
