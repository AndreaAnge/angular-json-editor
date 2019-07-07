export class TreeNode {
    type: string;
    id: string;
    value: any;
    checked: boolean;
    collapsed: boolean;
    children?: TreeNode[];

    constructor() {
        this.checked = false;
        this.collapsed = false;
    }

    isLeaf(): boolean {
        return !this.children;
    }

    setCheckedRecursive(checked: boolean): void {
        this.checked = checked;
        if (!this.isLeaf()) {
            this.children.forEach(child => child.setCheckedRecursive(checked));
        }
    }

    get internalType(): string {
        switch (this.type) {
            case 'boolean':
                return 'checkbox';
            case 'number':
                return 'number';
            case 'string':
                return 'text';
            default:
                return null;
        }
    }
}
