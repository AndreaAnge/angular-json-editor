import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TreeNode } from './tree-node/tree-node';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() source: { [key: string]: object | string | number | boolean | Array<object | string | number | boolean> };

  @Output() selectedChange = new EventEmitter<TreeNode>();
  @Output() removedSelected = new EventEmitter<TreeNode[]>();

  nodes: TreeNode[];

  constructor() {
  }

  ngOnInit() {
    this.nodes = this.buildTreeView(this.source);
  }

  onCollapseExpand = (node: TreeNode) => {
    node.collapsed = !node.collapsed;
  }

  onCheckedChange = (node, checked) => {
    this.selectedChange.emit(checked);
  }

  onRemoveSelection = () => {
    this.nodes.forEach((node, index) => {
      if (node.checked) {
        this.nodes.splice(index, 1);
      } else if (node.hasChildren()) {
        this.deleteRecursive(node);
      }
    })
  }

  private deleteRecursive(node: TreeNode) {
    if (node.hasChildren()) {
      node.children.forEach((child, index) => {
        if (child.checked) {
          node.children.splice(index, 1);
        } else { this.deleteRecursive(child); }
      });
    }
  }

  private buildTreeView(jsonObj: { [key: string]: any }): TreeNode[] {
    return Object.keys(jsonObj).reduce<TreeNode[]>(
      (accumulator, key) => {
        const value = jsonObj[key];
        const node = new TreeNode();
        node.title = key;

        if (value !== null) {
          if (typeof value === 'object') {
            node.children = this.buildTreeView(value);
          } else {
            node.type = this.parsePrimitiveType(value);
            node.value = value;
          }
        }

        return accumulator.concat(node);
      }, []);
  }

  private parsePrimitiveType(value): string {
    const type = typeof value;
    switch (type) {
      case 'boolean':
      case 'number':
      case 'string':
        return type;
      default:
        throw Error(`Type ${type} is not supported.˛`);
    }
  }
}
