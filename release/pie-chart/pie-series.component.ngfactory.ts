/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../src/pie-chart/pie-series.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '@angular/core/src/linker/view_container';
import * as import9 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import10 from '@angular/core/src/linker/template_ref';
import * as import11 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import12 from '@angular/common/src/directives/ng_for';
import * as import13 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import14 from '../../../src/pie-chart/pie-arc.component';
import * as import15 from '../common/tooltip/tooltip.directive.ngfactory';
import * as import16 from './pie-arc.component.ngfactory';
import * as import17 from '../../../src/common/tooltip/tooltip.service';
import * as import18 from '../../../src/utils/injection.service';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from '@angular/core/src/zone/ng_zone';
import * as import21 from '@angular/common/src/directives/ng_if';
import * as import22 from '../../../src/common/tooltip/tooltip.directive';
import * as import23 from '../../../src/pie-chart/pie-label.component';
import * as import24 from './pie-label.component.ngfactory';
export class Wrapper_PieSeriesComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PieSeriesComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this._changes = {};
    this.context = new import0.PieSeriesComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_colors(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.colors = currValue;
      this._changes['colors'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_series(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.series = currValue;
      this._changes['series'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_dims(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.dims = currValue;
      this._changes['dims'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_innerRadius(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.innerRadius = currValue;
      this._changes['innerRadius'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_outerRadius(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.outerRadius = currValue;
      this._changes['outerRadius'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_explodeSlices(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.explodeSlices = currValue;
      this._changes['explodeSlices'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_showLabels(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.showLabels = currValue;
      this._changes['showLabels'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_gradient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.gradient = currValue;
      this._changes['gradient'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.clickHandler.subscribe(_eventHandler.bind(view,'clickHandler'))); }
  }
}
var renderType_PieSeriesComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PieSeriesComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PieSeriesComponent>;
  _PieSeriesComponent_0_3:Wrapper_PieSeriesComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieSeriesComponent_Host0,renderType_PieSeriesComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'pieSeries',''),rootSelector,(null as any));
    this.compView_0 = new View_PieSeriesComponent0(this.viewUtils,this,0,this._el_0);
    this._PieSeriesComponent_0_3 = new Wrapper_PieSeriesComponent();
    this.compView_0.create(this._PieSeriesComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._PieSeriesComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PieSeriesComponent) && (0 === requestNodeIndex))) { return this._PieSeriesComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._PieSeriesComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._PieSeriesComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PieSeriesComponentNgFactory:import7.ComponentFactory<import0.PieSeriesComponent> = new import7.ComponentFactory<import0.PieSeriesComponent>('g[pieSeries]',View_PieSeriesComponent_Host0,import0.PieSeriesComponent);
const styles_PieSeriesComponent:any[] = ([] as any[]);
var renderType_PieSeriesComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_PieSeriesComponent,{});
export class View_PieSeriesComponent0 extends import2.AppView<import0.PieSeriesComponent> {
  _text_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import8.ViewContainer;
  _TemplateRef_1_5:any;
  _NgFor_1_6:import9.Wrapper_NgFor;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PieSeriesComponent0,renderType_PieSeriesComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_1 = new import8.ViewContainer(1,(null as any),this,this._anchor_1);
    this._TemplateRef_1_5 = new import10.TemplateRef_(this,1,this._anchor_1);
    this._NgFor_1_6 = new import9.Wrapper_NgFor(this._vc_1.vcRef,this._TemplateRef_1_5,this.parentView.injectorGet(import11.IterableDiffers,this.parentIndex),this.ref);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._anchor_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import12.NgFor) && (1 === requestNodeIndex))) { return this._NgFor_1_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.data;
    this._NgFor_1_6.check_ngForOf(currVal_1_0_0,throwOnChange,false);
    const currVal_1_0_1:any = this.context.trackBy;
    this._NgFor_1_6.check_ngForTrackBy(currVal_1_0_1,throwOnChange,false);
    this._NgFor_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_PieSeriesComponent1(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    return (null as any);
  }
}
class View_PieSeriesComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import8.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import13.Wrapper_NgIf;
  _text_3:any;
  _el_4:any;
  /*private*/ _vc_4:import8.ViewContainer;
  compView_4:import2.AppView<import14.PieArcComponent>;
  _TooltipDirective_4_5:import15.Wrapper_TooltipDirective;
  _PieArcComponent_4_6:import16.Wrapper_PieArcComponent;
  _text_5:any;
  _text_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import8.ViewContainer) {
    super(View_PieSeriesComponent1,renderType_PieSeriesComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import8.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import10.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import13.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_0,':svg:g',new import3.InlineArray4(4,'pieArc','','swui-tooltip',''),(null as any));
    this._vc_4 = new import8.ViewContainer(4,0,this,this._el_4);
    this.compView_4 = new import16.View_PieArcComponent0(this.viewUtils,this,4,this._el_4);
    this._TooltipDirective_4_5 = new import15.Wrapper_TooltipDirective(this.parentView.injectorGet(import17.TooltipService,this.parentIndex),this._vc_4.vcRef,this.parentView.injectorGet(import18.InjectionService,this.parentIndex),this.renderer,new import19.ElementRef(this._el_4),this.parentView.injectorGet(import20.NgZone,this.parentIndex));
    this._PieArcComponent_4_6 = new import16.Wrapper_PieArcComponent(new import19.ElementRef(this._el_4));
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_4.create(this._PieArcComponent_4_6.context);
    this._text_6 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray16(10,'clickHandler',(null as any),'focusin',(null as any),'mouseenter',(null as any),'blur',(null as any),'mouseleave',(null as any)),this.eventHandler(this.handleEvent_4));
    this._PieArcComponent_4_6.subscribe(this,this.eventHandler(this.handleEvent_4),true);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import10.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import21.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    if (((token === import22.TooltipDirective) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._TooltipDirective_4_5.context; }
    if (((token === import14.PieArcComponent) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._PieArcComponent_4_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.labelVisible(this.context.$implicit);
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    const currVal_4_0_0:any = this.parentView.context.tooltipText(this.context.$implicit);
    this._TooltipDirective_4_5.check_tooltipTitle(currVal_4_0_0,throwOnChange,false);
    const currVal_4_0_1:any = 'top';
    this._TooltipDirective_4_5.check_tooltipPlacement(currVal_4_0_1,throwOnChange,false);
    const currVal_4_0_2:any = 'tooltip';
    this._TooltipDirective_4_5.check_tooltipType(currVal_4_0_2,throwOnChange,false);
    this._TooltipDirective_4_5.ngDoCheck(this,this._el_4,throwOnChange);
    const currVal_4_1_0:any = this.parentView.context.color(this.context.$implicit);
    this._PieArcComponent_4_6.check_fill(currVal_4_1_0,throwOnChange,false);
    const currVal_4_1_1:any = this.context.$implicit.startAngle;
    this._PieArcComponent_4_6.check_startAngle(currVal_4_1_1,throwOnChange,false);
    const currVal_4_1_2:any = this.context.$implicit.endAngle;
    this._PieArcComponent_4_6.check_endAngle(currVal_4_1_2,throwOnChange,false);
    const currVal_4_1_3:any = this.parentView.context.innerRadius;
    this._PieArcComponent_4_6.check_innerRadius(currVal_4_1_3,throwOnChange,false);
    const currVal_4_1_4:any = this.parentView.context.outerRadius;
    this._PieArcComponent_4_6.check_outerRadius(currVal_4_1_4,throwOnChange,false);
    const currVal_4_1_5:any = this.context.$implicit.data.value;
    this._PieArcComponent_4_6.check_value(currVal_4_1_5,throwOnChange,false);
    const currVal_4_1_6:any = this.parentView.context.max;
    this._PieArcComponent_4_6.check_max(currVal_4_1_6,throwOnChange,false);
    const currVal_4_1_7:any = this.context.$implicit.data;
    this._PieArcComponent_4_6.check_data(currVal_4_1_7,throwOnChange,false);
    const currVal_4_1_8:any = this.parentView.context.explodeSlices;
    this._PieArcComponent_4_6.check_explodeSlices(currVal_4_1_8,throwOnChange,false);
    const currVal_4_1_9:any = this.parentView.context.gradient;
    this._PieArcComponent_4_6.check_gradient(currVal_4_1_9,throwOnChange,false);
    if (this._PieArcComponent_4_6.ngDoCheck(this,this._el_4,throwOnChange)) { this.compView_4.markAsCheckOnce(); }
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    this.compView_4.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
    this._vc_4.destroyNestedViews();
    this.compView_4.destroy();
    this._TooltipDirective_4_5.ngOnDestroy();
    this._PieArcComponent_4_6.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_PieSeriesComponent2(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._TooltipDirective_4_5.handleEvent(eventName,$event) && result);
    if ((eventName == 'clickHandler')) {
      const pd_sub_0:any = ((<any>this.parentView.context.onClick($event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_PieSeriesComponent2 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import23.PieLabelComponent>;
  _PieLabelComponent_0_3:import24.Wrapper_PieLabelComponent;
  _text_1:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import8.ViewContainer) {
    super(View_PieSeriesComponent2,renderType_PieSeriesComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'pieLabel',''),(null as any));
    this.compView_0 = new import24.View_PieLabelComponent0(this.viewUtils,this,0,this._el_0);
    this._PieLabelComponent_0_3 = new import24.Wrapper_PieLabelComponent(new import19.ElementRef(this._el_0));
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this.compView_0.create(this._PieLabelComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.PieLabelComponent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._PieLabelComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.parentView.context.$implicit;
    this._PieLabelComponent_0_3.check_data(currVal_0_0_0,throwOnChange,false);
    const currVal_0_0_1:any = this.parentView.parentView.context.outerRadius;
    this._PieLabelComponent_0_3.check_radius(currVal_0_0_1,throwOnChange,false);
    const currVal_0_0_2:any = this.parentView.parentView.context.label(this.parentView.context.$implicit);
    this._PieLabelComponent_0_3.check_label(currVal_0_0_2,throwOnChange,false);
    const currVal_0_0_3:any = this.parentView.parentView.context.color(this.parentView.context.$implicit);
    this._PieLabelComponent_0_3.check_color(currVal_0_0_3,throwOnChange,false);
    const currVal_0_0_4:any = this.parentView.parentView.context.max;
    this._PieLabelComponent_0_3.check_max(currVal_0_0_4,throwOnChange,false);
    const currVal_0_0_5:any = this.parentView.context.$implicit.value;
    this._PieLabelComponent_0_3.check_value(currVal_0_0_5,throwOnChange,false);
    const currVal_0_0_6:any = this.parentView.parentView.context.explodeSlices;
    this._PieLabelComponent_0_3.check_explodeSlices(currVal_0_0_6,throwOnChange,false);
    if (this._PieLabelComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}