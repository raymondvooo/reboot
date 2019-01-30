import { NgModule } from '@angular/core';
import { TimelineChildSublistComponent } from './timeline-child-sublist/timeline-child-sublist';
import { TimelineGrandchildSublistComponent } from './timeline-grandchild-sublist/timeline-grandchild-sublist';
@NgModule({
	declarations: [TimelineChildSublistComponent,
    TimelineGrandchildSublistComponent],
	imports: [],
	exports: [TimelineChildSublistComponent,
    TimelineGrandchildSublistComponent]
})
export class ComponentsModule {}
