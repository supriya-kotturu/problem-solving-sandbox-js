export class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  constructor() {
    this.root = null;
  }

  printHelper(root) {
    if (!root) return;

    console.log(root.val);
    this.printHelper(root.left);
    this.printHelper(root.right);
  }

  print() {
    this.printHelper(this.root);
  }
}
