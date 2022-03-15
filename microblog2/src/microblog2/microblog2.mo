import Iter "mo:base/Iter";
import List "mo:base/List";
import Principal "mo:base/Principal";
import Time "mo:base/Time";


module Microblog2 {

    public type Message = {
        author: Text;
        content: Text;
        time: Time.Time;
    };
    public type Following = List.List<Principal>;
    public type Messages = List.List<Message>;

    public type Microblog2 = actor {
        follow: shared(Principal) -> async();
        follows: shared query() -> async[Principal];
        post: shared(Text, Text, Text) -> async();
        posts: shared query(Time.Time) -> async[Message];
        timeline: shared(Time.Time) -> async[Message];
        get_name: shared query() -> async ?Text;
        set_name: shared (Text) -> async();
        initState: () -> async();
    };

    public func getMsgsByTime(since: Time.Time, messages: Messages): Messages {
        var rslt_msgs: Messages = List.nil();
        for (msg in Iter.fromList(messages)) {
            if (msg.time > since) {
                rslt_msgs := List.push(msg, rslt_msgs);
            }
        };
        rslt_msgs
    };

};
