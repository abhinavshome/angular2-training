import { ScoreService } from './score.service';
import {Component} from '@angular/core';

@Component({
    selector: 'score-card',
    template: `
    
    `
})
export class ScoreCardComponent {
    scoreCard;

    constructor(private scoreService: ScoreService) {

    }

    increaseRuns() {
        this.scoreService.increaseRuns();
    }

    increaseWickets() {
        this.scoreService.increaseWickets();
    }
}