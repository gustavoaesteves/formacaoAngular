import { element } from 'protractor';
import { ComponentFixture, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { PhotoFrameComponent } from './photo-frame.component';
import { PhotoFrameModule } from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent = null;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent)
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  })

  it(`#${PhotoFrameComponent.prototype.like.name} should trigger (@Output liked)
    once called multiple times within debounceTime`, fakeAsync(() => {
      fixture.detectChanges();
      let times = 0;

      component.liked.subscribe(() => {
        times++;
      });

      component.like();
      component.like();

      // Esperar o time de 0.5s por conta do fakeAsync, parando o codigo por esse tempo desejado
      tick(500);

      expect(times).toBe(1);
  }))

  it(`#${PhotoFrameComponent.prototype.like.name} should trigger (@Output liked)
    two times called outside debounceTime`, fakeAsync(() => {
      fixture.detectChanges();
      let times = 0;

      component.liked.subscribe(() => {
        times++;
      });

      component.like();
      tick(500);
      component.like();
      // Esperar o time de 0.5s por conta do fakeAsync, parando o codigo por esse tempo desejado
      tick(500);

      expect(times).toBe(2);
  }));

  it('Should display number of likes when (@Input likes) is incremented', () => {
    fixture.detectChanges();

    component.likes++;

    fixture.detectChanges();

    // Elemento do DOM que possui o counter(likes)
    const element = fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent.trim()).toBe('1');

  });

})
