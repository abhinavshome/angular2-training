import {Injectable} from '@angular/core';

@Injectable() 
export class ScoreService {
    runs;
    wickets;

    increaseRuns() {
        this.runs++;
    }

    increaseWickets() {
        this.wickets++;
    }
    
}