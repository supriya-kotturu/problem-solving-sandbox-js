import { BinaryTreeTypes } from "./types.js";

export class BinaryTreeCompare extends BinaryTreeTypes {
  // ======= COMPARE TWO TREES =======
  //
  // ------ SIMILAR TREES ------
  //  two trees have same structure irrespective of data
  isSimilarHelper(node1, node2) {
    const bothNodesAreEmpty = !node1 && !node2;
    const isOneSideEmpty = !node1 || !node2;

    if (bothNodesAreEmpty) return true;
    if (isOneSideEmpty) return false;

    if (!bothNodesAreEmpty) {
      const leftNodesAreSimilar = this.isSimilarHelper(
        node1?.left,
        node2?.left
      );

      const rightNodesAreSimilar = this.isSimilarHelper(
        node1?.right,
        node2?.right
      );

      return leftNodesAreSimilar && rightNodesAreSimilar;
    }

    return false;
  }

  isSimilar(tree) {
    return this.isSimilarHelper(this.root, tree.root);
  }

  // ------ IDENTICAL TREES ------
  // two trees have same structure and data
  isIdenticalHelper(node1, node2) {
    const bothNodesAreEmpty = !node1 && !node2;
    const bothNodesAreEqual = node1?.val === node2?.val;

    if (bothNodesAreEmpty) return true;

    if (!bothNodesAreEmpty && bothNodesAreEqual) {
      const leftNodesAreIdentical = this.isIdenticalHelper(
        node1.left,
        node2.left
      );
      const rightNodesAreIdentical = this.isIdenticalHelper(
        node1.right,
        node2.right
      );

      return leftNodesAreIdentical && rightNodesAreIdentical;
    }

    return false;
  }

  isIdentical(tree) {
    return this.isIdenticalHelper(this.root, tree.root);
  }

  // ======= COMPARE SINGLE TREE =======
  //
  // ------ FOLDABLE / SYMMETRIC TREE ------
  //  tree halves have a similar structure, irrespective of data
  isFoldableHelper(left, right) {
    const bothAreEmpty = !left && !right;
    const isOneSideEmpty = !left || !right;

    if (bothAreEmpty) return true;
    if (isOneSideEmpty) return false;

    const isLeftFoldable = this.isFoldableHelper(left.left, left.right);
    const isRightFoldable = this.isFoldableHelper(right.left, right.right);

    return isLeftFoldable && isRightFoldable;
  }

  isFoldable() {
    const isEmpty = !this.root;
    if (isEmpty) return true;

    return this.isFoldableHelper(this.root.left, this.root.right);
  }

  // ------ MIRROR TREE -------
  // tree halves have same structure and data
  isMirrorImageHelper(left, right) {
    const bothAreEmpty = !left && !right;
    if (bothAreEmpty) return true;

    const bothNodesAreEqual = left?.val === right?.val;
    if (!bothAreEmpty && bothNodesAreEqual) {
      const leftIsMirrorImage = this.isMirrorImageHelper(
        left.left,
        right.right
      );
      const rightIsMirrorImage = this.isMirrorImageHelper(
        left.right,
        right.left
      );

      return leftIsMirrorImage && rightIsMirrorImage;
    }

    return false;
  }

  isMirrorImage() {
    const isEmpty = !this.root;
    if (isEmpty) return true;

    return this.isMirrorImageHelper(this.root.left, this.root.right);
  }
}
