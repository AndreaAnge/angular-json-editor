export class TreeNode {
    type: string;
    title: string;
    value: any;
    checked: boolean;
    collapsed?: boolean;
    children?: TreeNode[];

    constructor() {
        this.checked = false;
        this.collapsed = false;
    }

    hasChildren(): boolean {
        return this.children && this.children.length > 0;
    }

    setCheckedRecursive(checked: boolean): void {
        this.checked = checked;
        if (this.hasChildren()) {
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
        }
    }
}
