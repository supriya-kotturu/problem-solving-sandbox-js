import { BinaryTreeOps } from "./ops.js";

// =================== TYPES OF BINARY TREES ===================
export class BinaryTreeTypes extends BinaryTreeOps {
  // ------ FULL TREE ------
  // a tree is full, then all nodes have 0 or 2 children
  isFullTreeHelper(root) {
    const isEmptyNode = !root;
    const isLeafNode = !root?.left && !root?.right;

    if (isEmptyNode || isLeafNode) return true;

    const containsTwoNodes = root?.left && root?.right;
    const isLeftFullTree = this.isFullTreeHelper(root.left);
    const isRightFullTree = this.isFullTreeHelper(root.right);

    if (containsTwoNodes) return isLeftFullTree && isRightFullTree;
    return false;
  }

  isFullTree() {
    return this.isFullTreeHelper(this.root);
  }

  // ------ SKEWED TREE ------
  // a tree is skewed, then all nodes have 0 or 1 children
  isSkewedTreeHelper(root) {
    const isEmptyNode = !root;
    const hasOnlyLeftNode = root.left && !root.right;
    const hasOnlyRightNode = !root.left && root.right;

    if (isEmptyNode || hasOnlyLeftNode || hasOnlyRightNode) return true;

    const hasBothLeftAndRightNodes = root.left && root.right;
    if (hasBothLeftAndRightNodes) return false;

    const isLeftTreeSkewed = root.left && this.isFullTreeHelper(root.left);
    const isRightTreeSkewed = root.right && this.isFullTreeHelper(root.right);

    return root.left ? isLeftTreeSkewed : isRightTreeSkewed;
  }

  isSkewedTree() {
    return this.isSkewedTreeHelper(this.root);
  }

  // ------ PERFECT TREE ------
  // a tree is perfect, then all levels are completely filled
  // level of the tree  === height - 1
  isPerfectTreeHelper(root, level, height) {
    const isEmpty = !root;
    const isLeafNode = !root.left && !root.right;

    if (isEmpty) return true;
    if (isLeafNode) return level === height - 1;

    const hasOnlyLeftNode = root.left && !root.right;
    const hasOnlyRightNode = !root.left && root.right;

    if (hasOnlyLeftNode || hasOnlyRightNode) return false;

    const isLeftTreePerfect = this.isPerfectTreeHelper(
      root.left,
      level + 1,
      height
    );
    const isRightTreePerfect = this.isPerfectTreeHelper(
      root.right,
      level + 1,
      height
    );

    return isLeftTreePerfect && isRightTreePerfect;
  }

  isPerfectTree() {
    return this.isPerfectTreeHelper(this.root, 0, this.height());
  }

  // !!! ------ COMPLETE TREE ------ !!!
  //
  // a tree is complete, then all levels are filled except possibly the last level
  // HINT: index the nodes in the array starting from 0. The Last node should have the
  // index of the count of nodes in the tree - 1
  // ---- indexing starts with 0 ----
  //
  // parentIndex - i
  // leftIndex - 2i + 1
  // rightIndex - 2i + 2
  isCompleteTreeHelper(root, index, count) {
    const isEmpty = !root;
    const isLeafNode = !root?.left && !root?.right;

    if (isEmpty) return true;
    if (isLeafNode) return index < count;

    const isLeftTreeComplete = this.isCompleteTreeHelper(
      root.left,
      2 * index + 1,
      count
    );
    const isRightTreeComplete = this.isCompleteTreeHelper(
      root.right,
      2 * index + 2,
      count
    );

    return isLeftTreeComplete && isRightTreeComplete;
  }

  isCompleteTree() {
    return this.isCompleteTreeHelper(this.root, 0, this.count());
  }
}
