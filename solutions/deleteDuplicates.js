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
var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    let pre = head;
    let pointer = head.next;
    while(pointer){
        if(pre.val === pointer.val){
            pre.next = pointer.next;
        } else {
            pre = pointer
        }
        pointer = pointer.next;
    }
    return head
};
