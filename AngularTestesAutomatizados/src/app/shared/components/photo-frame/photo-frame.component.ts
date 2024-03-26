import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy {
  @Output() public liked: EventEmitter<void> = new EventEmitter();
  @Input() description = '';
  @Input() src = '';
  @Input() likes = 0;

  private debounceSubject: Subject<void> = new Subject();
  private unsubscribre: Subject<void> = new Subject();

  constructor() { }

  ngOnInit() {
    this.debounceSubject.asObservable()
    .pipe(debounceTime(500))
    .pipe(takeUntil(this.unsubscribre))
    .subscribe(() => {
      this.liked.emit();
    })
  }

  ngOnDestroy(): void {
    this.unsubscribre.next();
    this,this.unsubscribre.complete();
  }

  public like(): void {
    //Time de 0,5s para cada click, chamando o Subject debounceTime
    this.debounceSubject.next();
  }

}
