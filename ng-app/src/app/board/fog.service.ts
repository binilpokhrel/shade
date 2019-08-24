import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class FogService {

    private fogMatrix: Subject<boolean>[][];

    constructor(){
    }
}