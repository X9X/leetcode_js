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
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next
        if(slow === fast){
            while(head.next){
                if(slow !== head){
                    slow = slow.next;
                    head = head.next;
                    continue;
                }
                return slow
            }
        }
    }
    return null
};
