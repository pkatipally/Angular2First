import {Component, OnChanges, Input, EventEmitter} from "@angular/core";
import {Output} from "@angular/core";
/**
 * Created by RJK on 10/3/2016.
 */

@Component({
    selector: 'rt-star',
    templateUrl: 'app/common/start.component.html',
    styleUrls: ['app/common/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    @Output() ratingClicked: EventEmitter<String> = new EventEmitter<String>();

    onClick(){
        this.ratingClicked.emit(`This rating ${this.rating} was clicked`);
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }

}