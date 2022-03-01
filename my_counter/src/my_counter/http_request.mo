import util "util";

module http_request {
    public type HeaderField = (Text, Text);
    public type HttpRequest = {
        url : Text;
        method : Text;
        body : [Nat8];
        headers : [HeaderField];
    };
    public type HttpResponse = {
        body : [Nat8];
        headers : [HeaderField];
        streaming_strategy : ?StreamingStrategy;
        status_code : Nat16;
    };
    public type StreamingCallbackHttpResponse = {
        token : ?StreamingCallbackToken;
        body : [Nat8];
    };
    public type Key = Text;
    public type StreamingCallbackToken = {
        key : Key;
        sha256 : ?[Nat8];
        index : Nat;
        content_encoding : Text;
    };
    public type StreamingStrategy = {
        #Callback : {
        token : StreamingCallbackToken;
        callback : shared query StreamingCallbackToken -> async ?StreamingCallbackHttpResponse;
        };
    };
    public func respBodyOf(text: Text): [Nat8] {
        util.textToNat8("<html><body><h1>" # text # "</h1></body></html>")
    };
};

