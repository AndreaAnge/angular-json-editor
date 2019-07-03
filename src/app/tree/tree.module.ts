import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { FormsModule } from '@angular/forms';
import { TreeNodeComponent } from './tree-node/tree-node.component';

@NgModule({
  declarations: [TreeComponent, TreeNodeComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TreeComponent
  ]
})
export class TreeModule { }
