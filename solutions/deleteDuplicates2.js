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
var deleteDuplicates2 = function(head) {
    if (!head || !head.next)
        return head;
    let origin_pre = head;
    let pointer = head.next;
    let root = new ListNode(null);
    let origin_pre_pre = root;
    origin_pre.next = null;
    while (pointer) {
        if (origin_pre.val !== pointer.val) {
            origin_pre.next = pointer;
            if (origin_pre.shouldDelete) {
                origin_pre_pre.next = origin_pre.next;
            } else {
                origin_pre_pre.next = origin_pre;
                origin_pre_pre = origin_pre_pre.next;
            }
            origin_pre = origin_pre.next;
        } else {
            origin_pre.shouldDelete = true;
            origin_pre.next = pointer.next;
        }
        pointer = pointer.next;
    }
    if (origin_pre_pre && origin_pre.shouldDelete) {
        origin_pre_pre.next = origin_pre.next
    }
    return root.next
};
var list0 = null;
var list1 = {
    val: 10,
    next: {
        val: 10,
        next: {
            val: 10,
            next: null
        }
    }
};
var list2 = {
    val: 10,
    next: {
        val: 10,
        next: {
            val: 100,
            next: null
        }
    }
}
var list3 = {
    val: 1,
    next: {
        val: 10,
        next: {
            val: 10,
            next: null
        }
    }
}
var list4 = {
    val: 10,
    next: {
        val: 10,
        next: {
            val: 110,
            next: {
                val: 1000,
                next: {
                    val: 1000,
                    next: null
                }
            }
        }
    }
}

deleteDuplicates2(list0)
deleteDuplicates2(list1)
deleteDuplicates2(list2)
deleteDuplicates2(list3)
deleteDuplicates2(list4)
