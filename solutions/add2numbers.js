/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var flag = 0;
    var l1_pointer = l1;
    var l2_pointer = l2;
    var total = function (pointer, value){
        var t = pointer.value + value;
        pointer.value = t % 10;
        flag = t > 9 ? 1 : 0
    }
    //add l2 to l1
    while(l1_pointer.next && l2_pointer.next){
        total(l1_pointer,l2_pointer.value + flag);
        l1_pointer = l1_pointer.next;
        l2_pointer = l2_pointer.next;
    }
    if(!l1_pointer.next){
        l1_pointer.next = l2_pointer.next;
        l2_pointer.next = null
    }
    flag += l2_pointer.value;
    while(l1_pointer.next){
        total(l1_pointer,flag);
        l1_pointer = l1_pointer.next
    }
    total(l1_pointer,flag);
    if(flag){
        l1_pointer.next = new ListNode(1)
    }
    return l1
};

var l1 = {
    value : 2,
    next : {
        value : 4,
        next : {
            value : 3,
            next : null
        }
    }
}
var l2 = {
    value : 5,
    next : {
        value : 6,
        next : {
            value : 4,
            next : null
        }
    }
}

console.log(addTwoNumbers(l1,l2))
