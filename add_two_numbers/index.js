"use strict";

/**
 * Definition for singly-linked list.
 * 
 ***/
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {number} num
 * @return {ListNode}
 */
var createNumber = function(num)
{
    var l = null;
    var cur = l;
    while (num != 0)
    {
        var temp = new ListNode(num % 10);
        if (l == null) {
            l = temp;
        }
        if (cur !== null){
            cur.next = temp;
        }
        cur = temp;
        num = (num - num % 10) / 10;
    }

    return l;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l = null;
    var previousNode;
    var sum = 0;
    while (l1 !== null || l2 !== null) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        var tempNode = new ListNode(sum % 10);
        if (l == null){
            l = tempNode;
        }
        else{
            previousNode.next = tempNode;    
        }
        previousNode = tempNode;
        sum = (sum - sum % 10) / 10;      
    }
    return l;
};

var printNumber = function(l) {
    var s = "[";
    while (l !== null)
    {
        if (l.next !== null){
            s = s + l.val + ",";
        }
        else {
            s = s + l.val;
        }
        l = l.next; 
    }
    s = s + "]";
    console.log(s);
}

var l1 = createNumber(342);
var l2 = createNumber(465);
var l = addTwoNumbers(l1, l2);
printNumber(l);