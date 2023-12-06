import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { VideoStudyUiComponent } from '../study-types/video-study-ui/video-study-ui.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { StudyContentTextComponent } from 'src/app/content-creation/features/studies/study-content-types/study-content-text/study-content-text.component';

@Component({
  selector: 'app-studies-content-ui',
  standalone: true,
  imports: [
    CommonModule,
    VideoStudyUiComponent,
    MatDialogModule,
    MatButtonModule,
    StudyContentTextComponent
  ],
  templateUrl: './studies-content-ui.component.html',
  styleUrl: './studies-content-ui.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudiesContentUiComponent {
  constructor(){}

  @Input() study:any | undefined

  @Output() openDial = new EventEmitter<boolean>()

  @Output() updateStudy = new EventEmitter<boolean>()

  studyType:number = 0

  studyUpdate(flag:boolean){
    this.updateStudy.emit(flag)
  }

  chooseType(){
    this.openDial.emit(true)
  }
}
