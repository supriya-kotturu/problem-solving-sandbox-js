import { TreeNode } from "./curd.js";
import { BinaryTreeOps } from "./ops.js";
import { BinaryTreeTypes } from "./types.js";
import { BinaryTreeCompare } from "./compare.js";

const tree = new BinaryTreeOps();
tree.root = new TreeNode(1);
tree.root.left = new TreeNode(12);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(6);
tree.root.right.left = new TreeNode(5);
tree.root.right.right = new TreeNode(7);

tree.print();
console.log("----");

// ------ TREE OPERATIONS ------
console.log(tree.sum());
console.log(tree.count());
console.log(tree.height());
console.log(tree.maxElement());
console.log(tree.minElement());
console.log(tree.search(12));
console.log("======");

// ------------------------------

const treeType = new BinaryTreeTypes();
treeType.root = new TreeNode(1);
treeType.root.left = new TreeNode(3);
treeType.root.right = new TreeNode(2);
treeType.root.left.left = new TreeNode(5);
treeType.root.left.right = new TreeNode(4);
treeType.root.right.left = new TreeNode(6);
treeType.root.right.right = new TreeNode(7);
treeType.root.left.left.left = new TreeNode(8);

treeType.print();
console.log("----");

// ------- TREE TYPES -------
console.log(treeType.isFullTree());
console.log(treeType.isSkewedTree());
console.log(treeType.isPerfectTree());
console.log(treeType.isCompleteTree());
console.log("======");

// ------------------------------
const t1 = new BinaryTreeCompare();
t1.root = new TreeNode(1);
t1.root.left = new TreeNode(2);
t1.root.right = new TreeNode(24);
// t1.root.left.left = new TreeNode(3);

const t2 = new BinaryTreeCompare();
t2.root = new TreeNode(1);
t2.root.left = new TreeNode(2);
t2.root.right = new TreeNode(29);

console.log(t1.isFoldable());
console.log(t1.isMirrorImage());
console.log(t1.isSimilar(t2));
console.log(t1.isIdentical(t2));
