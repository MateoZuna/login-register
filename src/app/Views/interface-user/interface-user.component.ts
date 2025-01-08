import { CommonModule } from '@angular/common'; // Para usar *ngIf, *ngFor, etc.
import { Component } from '@angular/core';

@Component({
  selector: 'app-interface-user',
  standalone: true,
  imports: [CommonModule], // Importar CommonModule aquí
  templateUrl: './interface-user.component.html',
  styleUrls: ['./interface-user.component.css']
})
export class InterfaceUserComponent {
  activeSection: string = 'usuario';//La primera sección en aparecer será la de Usuario

  setActiveSection(section: string): void {//Esto sirve para cambiar de sección
    this.activeSection = section;
  }
}
