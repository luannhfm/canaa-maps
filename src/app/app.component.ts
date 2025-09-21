import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { ProJsToAdvplService } from '@totvs/protheus-lib-core';
import { PoMenuItem, PoModule } from '@po-ui/ng-components';
import { RouterOutlet } from "@angular/router";

declare const google: any;
declare global { interface Window { twebchannel: any } }
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PoModule, RouterOutlet], // <-- precisa p/ *ngIf
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {

    readonly menus: Array<PoMenuItem> = [
    { label: 'Visitas', shortLabel:'Visitas' ,  icon: 'po-icon-home' , link:'visitas' },
    { label: 'Sair', shortLabel:'Sair' ,  icon: 'po-icon-exit' , link:'/' },
  ];
  
  

}

