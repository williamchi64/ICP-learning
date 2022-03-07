import Time "mo:base/Time";
import List "mo:base/List";
import Principal "mo:base/Principal";
import Iter "mo:base/Iter";


module Microblog {

    public type Message = {
        content: Text;
        time: Time.Time;
    };
    public type Following = List.List<Principal>;
    public type Messages = List.List<Message>;

    public type Microblog = actor {
        follow: shared(Principal) -> async();
        follows: shared query() -> async[Principal];
        post: shared(Text) -> async();
        posts: shared query(Time.Time) -> async[Message];
        timeline: shared(Time.Time) -> async[Message];
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
