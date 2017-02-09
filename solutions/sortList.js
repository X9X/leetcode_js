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
var sortList = function(head) {
    function merge(a,b){
        let head = new ListNode(null);
        while(a && b){
            if (a.val >= b.val){
                head.next = b;
                b = b.next;
            } else {
                head.next = a;
                a = a.next
            }
        }
        if(!a){
            head.next = a
        }
        if(!b){
            head.next = b
        }
        return head.next
    }
    let pre = null;
    let low = head;
    let fast = head;
    // step1 cut linked list to 2 pieces
    while(fast && fast.next){
        pre = low;
        low = low.next;
        fast = fast.next.next
    }
    pre.next = null
    return merge(sortList(head),sortList(low))
};
