import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TreeNode } from './tree-node/tree-node';
import { isObject, isPrimitive } from 'util';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  @Input() source: { [key: string]: object | string | number | boolean | Array<object | string | number | boolean> };

  @Output() checkedChange = new EventEmitter<any>();
  @Output() removedSelected = new EventEmitter<TreeNode | TreeNode[]>();

  nodes: TreeNode[];

  get emptyObjectText() {
    return '(object is empty)';
  }

  constructor() { }

  ngOnInit() {
    this.nodes = this.buildTreeView(this.source);
  }

  onCollapseExpand = (node: TreeNode) => {
    node.collapsed = !node.collapsed;
  }

  onCheckedChange = (node, checked) => {
    this.checkedChange.emit(node);
  }

  onRemoveSelection = () => {
    this.nodes.forEach((node, index) => {
      if (node.checked) {
        this.nodes.splice(index, 1);
      } else {
        this.deleteRecursive(node);
      }
    });
  }

  private deleteRecursive(node: TreeNode) {
    if (!node.isLeaf()) {
      node.children.reduceRight<TreeNode[]>(
        (accumulator, child, index, object) => {
          if (child.checked) {
            object.splice(index, 1);
          } else { this.deleteRecursive(child); }

          return accumulator.concat(child);
        }, []);
    }
  }

  private buildTreeView(jsonObj: { [key: string]: any }): TreeNode[] {
    return Object.keys(jsonObj).reduce<TreeNode[]>(
      (accumulator, key) => {
        const value = jsonObj[key];
        const node = new TreeNode();
        node.id = key;

        if (isObject(value)) {
          node.type = 'object';
          node.children = this.buildTreeView(value);
        } else {
          node.type = this.parsePrimitiveType(value);
          node.value = value;
        }

        return accumulator.concat(node);
      }, []);
  }

  private parsePrimitiveType(value): string {
    const type = typeof value;

    if (!isPrimitive(type)) {
      throw Error(`${type} is not primitive type.`)
    }
    switch (type) {
      case 'boolean':
      case 'number':
      case 'string':
        return type;
      default:
        throw Error(`Type ${type} is not supported.`);
    }
  }
}
