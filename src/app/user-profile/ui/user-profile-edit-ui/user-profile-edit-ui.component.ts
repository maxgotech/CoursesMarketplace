import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/shared/data-access/user/dto/IUser';


@Component({
  selector: 'app-user-profile-edit-ui',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-profile-edit-ui.component.html',
  styleUrl: './user-profile-edit-ui.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileEditUiComponent implements OnChanges {
  constructor(private cdr: ChangeDetectorRef){

  }

  @Input() user:IUser | undefined

  @Output() onSave = new EventEmitter<FileList>()

  onSaveButton(files:FileList){
    this.onSave.emit(files)
  }

  initpfp(){
    this.pfp = "http://localhost:3000/user/images" + this.user?.pfp_path;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user'].currentValue != undefined) { // данные получены
      this.initpfp()
    }
  }

  pfp: string | null| ArrayBuffer = '';

  async onFileSelected(files: FileList | null) { // при выбранном изображении
    if (files) {
      var reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = (event:Event) => {
        let fileReader = event.target as FileReader
        this.pfp = fileReader.result;
        this.cdr.detectChanges()
      }
    }
  }
}
