/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) return head;
    let revesedList = head;
    let pointer = head.next;
    head.next = null;
    while(pointer){
        head = pointer;
        pointer = pointer.next;
        head.next = revesedList;
        revesedList = head;
    }
    return head
};
