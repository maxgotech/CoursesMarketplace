import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-study-video-type-ui',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './study-video-type-ui.component.html',
  styleUrl: './study-video-type-ui.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyVideoTypeUiComponent { 
  constructor(private sanitizer: DomSanitizer){}

  @Input() path:string | undefined
  
  iframeSrc: SafeUrl | undefined

  videoURL(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.path!);
  }

}
