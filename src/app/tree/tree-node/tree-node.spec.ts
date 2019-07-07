import { TreeNode } from './tree-node';

describe('TreeNode', () => {
  it('should create an instance', () => {
    expect(new TreeNode()).toBeTruthy();
  });

  it('#isLeaf should return true', () => {
    const node = new TreeNode();
    node.children = null;
    node.type = 'string';
    expect(node.isLeaf).toBe(true);
  })
});
