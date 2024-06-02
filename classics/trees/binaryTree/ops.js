import { BinaryTree } from "./curd.js";

export class BinaryTreeOps extends BinaryTree {
  // ------ SUM OF NODES ------
  sumHelper(root) {
    if (!root) return 0;
    return root.val + this.sumHelper(root.left) + this.sumHelper(root.right);
  }

  sum() {
    return this.sumHelper(this.root);
  }

  // ------ COUNT OF NODES ------
  countHelper(root) {
    if (!root) return 0;
    return 1 + this.countHelper(root.left) + this.countHelper(root.right);
  }

  count() {
    return this.countHelper(this.root);
  }

  // ------ HEIGHT OF THE TREE ------
  // height = number of levels in a tree + 1
  // root of the tree is on L0
  heightHelper(root) {
    if (!root) return 0;
    return (
      1 + Math.max(this.heightHelper(root.left), this.heightHelper(root.right))
    );
  }

  height() {
    return this.heightHelper(this.root);
  }

  // ------ SEARCH ------
  // return true if found, false otherwise
  searchHelper(root, key) {
    const isEmpty = !root;
    const isFound = root.val == key;

    if (isEmpty) return false;
    if (isFound) return true;

    return (
      this.searchHelper(root.left, key) || this.searchHelper(root.right, key)
    );
  }

  search(value) {
    return this.searchHelper(this.root, value);
  }

  // ------ MAXIMUM ELEMENT ------
  maxElementHelper(root) {
    if (!root) return -Infinity;
    return Math.max(
      root.val,
      this.maxElementHelper(root.left),
      this.maxElementHelper(root.right)
    );
  }

  maxElement() {
    return this.maxElementHelper(this.root);
  }

  // ------ MINIMUM ELEMENT ------
  minElementHelper(root) {
    if (!root) return Infinity;
    return Math.min(
      root.val,
      this.minElementHelper(root.left),
      this.minElementHelper(root.right)
    );
  }

  minElement() {
    return this.minElementHelper(this.root);
  }
}
