import { Tasks } from './classes/tasks.model';
import { Component } from '@angular/core';
import { formatPercent } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'toutdoux';

  public compteur: number;
  public taskslist: Tasks[];

  constructor() {

    this.taskslist = [
      new Tasks(1, 'robe', true, 'livrer'),
      new Tasks(2, 'ordinateur', false, 'retourner'),
      new Tasks(3, 'voyage', true, 'effectuer'),
      new Tasks(4, 'cadeau', false, 'reçu'),
      new Tasks(5, 'livre', true, 'arriver'),
      new Tasks(6, 'vêtement', false, 'retirer'),
      new Tasks(6, 'voiture', true, 'en cours de livraison'),

    ];
    // Pour afficher le compteur et les éléménts du tableau.
    // filter parcours tout le tableau et envois dans le code les valeurs true à l'aide du boolean
    this.compteur = this.taskslist.filter((task) => task.completed).length;

  }

  cherchermessage(childcomplete: boolean): void {
    if (childcomplete == true) {
      this.compteur++;
    } else {
      this.compteur--;
    }
  }
  // utilisation de track by qui permet de signalet tout changement (suprimer,ajoux...)toujours le maitere
  trackByFunction(index: number, item: any): string {
    return item.id;
  }

calulepourcentage() :number{
  // resultat est le 100%
  // la longeuer des tâches en cours
  let tabtacheencours =this.taskslist.filter(task=>!task.completed);
  let resultat = tabtacheencours.length /this.taskslist.length
  return resultat *100

}



}

//  affichage de pourcentage

// formatPercent(value: number, locale: string, digitsInfo?: string )
//   )

