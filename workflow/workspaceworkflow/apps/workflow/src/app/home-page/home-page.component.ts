import { Component, OnInit } from '@angular/core';
import { SearchService } from '@workspaceworkflow/lib-apis';

@Component({
  selector: 'workspaceworkflow-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  cidade: string;

  constructor(private serarchService: SearchService) { }

  ngOnInit(): void {
  }

  buscarCEP(cep: string){
    console.log('chamou ' + cep);
    this.serarchService.obterCep(cep).subscribe(data => {
      console.log(data);
      this.cidade = data.localidade;
    });
  }

  voltou(): void {
    alert('me disseram pra voltar');
  }

}
