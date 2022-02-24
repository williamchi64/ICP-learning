import Array "mo:base/Array";
import Option "mo:base/Option";
import Stack "mo:base/Stack";

module Quicksort {

    func partition(arr_mut: [var Int], left_index: Nat, right_index: Nat): Nat {

        let pivot = arr_mut[left_index];
        var l = left_index;
        var r = right_index;

        while (l < r) {
            while (l < r and arr_mut[r] >= pivot) {
                r -= 1;
            };
            arr_mut[l] := arr_mut[r];
            while (l < r and arr_mut[l] <= pivot) {
                l += 1;
            };
            arr_mut[r] := arr_mut[l];

        };
        arr_mut[l] := pivot;
        return l;
    };

    func mutquicksort(arr_mut: [var Int]): [var Int] {
        if (arr_mut.size() < 2) {
            return arr_mut;
        };
        let left_index = 0;
        let right_index = arr_mut.size() - 1: Nat;
        var stack = Stack.Stack<Nat>();
        if (left_index < right_index) {
            stack.push(right_index);
            stack.push(left_index);
            while (not stack.isEmpty()) {
                let l = Option.get(stack.pop(), arr_mut.size());
                let r = Option.get(stack.pop(), 0);
                let index = partition(arr_mut, l, r);
                if (index != 0) {
                    if (l < (index - 1: Nat)) {
                    stack.push(index - 1);
                    stack.push(l);
                    };
                    if (r > (index + 1: Nat)) {
                        stack.push(r);
                        stack.push(index + 1);
                    };
                } else {
                    stack.push(right_index);
                    stack.push(left_index + 1);
                }
                
            }
        };
        arr_mut
    };

    public func quicksort(arr: [Int]): [Int] {
        Array.freeze(mutquicksort(Array.thaw(arr)))
    }
}
