import { error } from '@angular/compiler/src/util';
import { AnimaisService } from './../animais.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../animais';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-animal',
  templateUrl: './detalhes-animal.component.html',
  styleUrls: ['./detalhes-animal.component.css'],
})
export class DetalhesAnimalComponent implements OnInit {
  animalID!: number;
  animal$!: Observable<Animal>;

  constructor(
    private animalService: AnimaisService,
    private acticatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.animalID = this.acticatedRoute.snapshot.params.animalId;
    this.animal$ = this.animalService.buscarPorId(this.animalID);
  }

  curtir() {
    this.animalService.curtir(this.animalID).subscribe((curtida) => {
      this.animal$ = this.animalService.buscarPorId(this.animalID);
    });
  }

  excluir() {
    this.animalService.excluiAnimal(this.animalID).subscribe(
      () => {
        this.router.navigate(['/animais/']);
      },
      (error) => console.log(error)
    );
  }
}
