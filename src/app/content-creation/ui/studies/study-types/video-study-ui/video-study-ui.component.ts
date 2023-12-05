import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-video-study-ui',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './video-study-ui.component.html',
  styleUrl: './video-study-ui.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VideoStudyUiComponent { }
