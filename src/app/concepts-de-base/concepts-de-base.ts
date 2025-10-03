import { Component } from '@angular/core';
import {CdbExercice1} from './cdb-exercice1/cdb-exercice1';
import {CdbExercice2} from './cdb-exercice2/cdb-exercice2';
import {CdbExercice3} from './cdb-exercice3/cdb-exercice3';
import {CdbExercice4} from './cdb-exercice4/cdb-exercice4';
import {CdbExercice5} from './cdb-exercice5/cdb-exercice5';
import {CdbExercice6} from './cdb-exercice6/cdb-exercice6';
import {CdbExercice7} from './cdb-exercice7/cdb-exercice7';

@Component({
  selector: 'app-concepts-de-base',
  imports: [
    CdbExercice1,
    CdbExercice2,
    CdbExercice3,
    CdbExercice4,
    CdbExercice5,
    CdbExercice6,
    CdbExercice7
  ],
  templateUrl: './concepts-de-base.html',
  styleUrl: './concepts-de-base.css'
})
export class ConceptsDeBase {

}
