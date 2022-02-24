import Int "mo:base/Int";

module Test {

    public func intArrayToText(arr: [Int]): Text {

        var text = "[";
        for (elem in arr.vals()) {
            text #= Int.toText(elem) # ", ";
        };
        text # "]"
    };

    public func intMutArrayToText(arr: [var Int]): Text {

        var text = "[";
        for (elem in arr.vals()) {
            text #= Int.toText(elem) # ", ";
        };
        text # "]"
    };
}