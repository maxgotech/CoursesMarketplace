import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-text-study-ui',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './text-study-ui.component.html',
  styleUrl: './text-study-ui.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextStudyUiComponent { }
