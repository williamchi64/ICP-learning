import hr "http_request";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Option "mo:base/Option";
import util "util";

actor Counter {
    stable var currentValue: Nat = 0;

    public func increment(): async() {
        currentValue += 1;
    };

    public query func get(): async Nat {
        currentValue
    };

    public func set(n: Nat): async() {
        currentValue := n;
    };

    public shared query func http_request(request: hr.HttpRequest): async hr.HttpResponse {
        var respBody = "Whoops! 404 Not Found";
        var statusCode: Nat16 = 200;
        if (request.url == "/get") {
            respBody := Nat.toText(currentValue);
        } else if (request.url == "/next") {
            let result = currentValue + 1;
            respBody := "Next number is: " # Nat.toText(result);
        } else if (Text.startsWith(request.url, #text "/send_num")) {
            let opt = Text.stripStart(request.url, #text "/send_num/");
            let numText = Option.get(opt, "0");
            let result = util.charsToNum(util.textToChar(numText));
            respBody := "Hey! I got this: " # Nat.toText(result) # ". Am I wrong?";
        } else {
            statusCode := 404;
        };
        {
            body = hr.respBodyOf(respBody);
            headers = [];
            streaming_strategy = null;
            status_code = statusCode;
        }
    };
};
