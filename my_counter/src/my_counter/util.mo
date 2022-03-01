import Blob "mo:base/Blob";
import Char "mo:base/Char";
import Iter "mo:base/Iter";
import Text "mo:base/Text";

module util {
    public func textToNat8(text: Text): [Nat8] {
        Blob.toArray(Text.encodeUtf8(text))
    };

    public func textToChar(text: Text): [Char] {
        Iter.toArray(Text.toIter(text))
    };

    public func charsToNum(chars: [Char]): Nat {
        let len = chars.size();
        var result = 0;
        var count = 0;
        while (count < len) {
            if (Char.isDigit(chars[count])) {
                result += charToNum(chars[count]) * 10 ** (len - count - 1);
            };
            count += 1;
        };
        result
    };

    public func charToNum(char: Char): Nat {
        switch char {
            case '0' 0;
            case '1' 1;
            case '2' 2;
            case '3' 3;
            case '4' 4;
            case '5' 5;
            case '6' 6;
            case '7' 7;
            case '8' 8;
            case '9' 9;
            case _ 0;
        }
    }
}