import { Component, OnInit, WritableSignal, computed, effect,signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // firstName = signal('radhe');
  // lastName = signal('radhe');
  // fullName = computed(()=> `${this.firstName()} ${this.lastName()}`);

  // count  =signal(0);
  // count$ = toObservable(this.count);
  title = 'Angular16App';

  constructor(){
    //effect(()=> console.log('Name changed',this.fullName()));
  }

  ngOnInit(): void {
    //this.count$.subscribe((x) => console.log(x));
  }

  setName(newName : string){
    //this.firstName.set(newName);
  }
}


