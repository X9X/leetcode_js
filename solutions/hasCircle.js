/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next)
        return false;
    while (head) {
        if (head.visited) {
            return true;
        } else {
            head.visited = true;
        }
        head = head.next
    }
    return false
};
