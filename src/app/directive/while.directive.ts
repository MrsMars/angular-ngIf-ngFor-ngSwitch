import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[while]'
})
export class WhileDirective {
	
	constructor(private templateRef: TemplateRef<any>,
		private viewContainerRef: ViewContainerRef) { }

	@Input() set while(condition: boolean) {
		if (condition) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainerRef.clear();
		}
	}

}