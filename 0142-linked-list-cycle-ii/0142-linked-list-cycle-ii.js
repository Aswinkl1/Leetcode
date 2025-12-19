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
    
    let set = new Map()
    let count = 0
    while(head?.next){
        console.log(head.val)
        // if(set.has(head.val +""+(head?.next?.val ?? ""))){
            if(set.has(head)){
            return head
        }
        // set.set(head.val+""+ (head?.next?.val ?? ""),count++)
        set.set(head,count++)
        head = head.next
    }
    return null
};