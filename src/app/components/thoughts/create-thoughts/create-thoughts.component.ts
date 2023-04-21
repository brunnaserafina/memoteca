import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thoughts',
  templateUrl: './create-thoughts.component.html',
  styleUrls: ['./create-thoughts.component.css'],
})
export class CreateThoughtsComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Novo pensamento criado!');
  }

  cancelarPensamento() {
    alert('Pensamento cancelado!');
  }
}
