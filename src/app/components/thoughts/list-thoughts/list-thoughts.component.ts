import { Observable } from 'rxjs';
import { ThoughtService } from './../thought.service';
import { Pensamento } from './../thought';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thoughts',
  templateUrl: './list-thoughts.component.html',
  styleUrls: ['./list-thoughts.component.css'],
})
export class ListThoughtsComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor(private service: ThoughtService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
