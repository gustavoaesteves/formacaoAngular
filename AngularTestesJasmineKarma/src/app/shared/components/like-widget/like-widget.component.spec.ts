import { TestBed, ComponentFixture } from '@angular/core/testing';
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name,  () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  let component: LikeWidgetComponent = null;

  beforeEach(async()  => {
    //Configurar modo de teste
    await TestBed.configureTestingModule({
      // Mais usado quando está criando testes antes mesmo do proprio component
      // declarations: [LikeWidgetComponent],
      // providers: [UniqueIdService],

      // Mais usado quando está criando funcoes antes mesmo do proprio test
      imports: [LikeWidgetModule ] // Utiliza mesmos modulos
    }).compileComponents; // Retorna uma promise, espera o component ser compilado para assim o teste rodar

    fixture = TestBed.createComponent(LikeWidgetComponent); // Retorna tudo aquilo para testar o component, instancia toda(Metodos, propriedades, etc)

    component = fixture.componentInstance; // Gerar de forma geral o component para todos os Its
  });

  it('Should create component', () => {

    expect(component).toBeTruthy(); // Check se criou o component
  });

  it('Should auto generate ID during ngOnInit when (@Input id) is not assigned', () => {
    // Dispara a primeira deteccao de mudancas
    fixture.detectChanges();

    expect(component.id).toBeTruthy();
  })

  it('Should not auto-generate ID during ngonInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();

    expect(component.id).toBe(someId);
  })

  // Testando output
  // Quando se nomeia um CallBack, o teste so e aceito depois de chamar o CallBack(done no exemplo), pois se torna assincrona
  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`, done => {
    fixture.detectChanges();

    // Como um output é um Observable, quando vc chama a funcao de Emit, pode se usar o subscribe para ver
    // se a funcao foi chamada na emissao correta
    component.liked.subscribe(() => {
      expect(true).toBeTrue();
      done();
    });

    component.like();
  })

  // Testando output
  // Quando se nomeia um CallBack, o teste so e aceito depois de chamar o CallBack(done no exemplo), pois se torna assincrona
  it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called (test two)`, () => {
    // spy é um espiao do Jasmine, feito para observar, passa o objeto para espionar e qual a funcao
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();

    // O Jasmine se junta com o codigo e verifica se o emit foi atiavado em algum momento pela funcao like()
    expect(component.liked.emit).toHaveBeenCalled();
  })

});
