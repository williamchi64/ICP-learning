import List "mo:base/List";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Iter "mo:base/Iter";

import Mb "microblog";

// import Debug "mo:base/Debug";
// import Int "mo:base/Int";

actor Microblog{

    type Microblog = Mb.Microblog;
    type Following = Mb.Following;
    type Messages = Mb.Messages;
    type Message = Mb.Message;

    stable var following: Following = List.nil();
    stable var messages: Messages = List.nil();

    public shared func follow(id: Principal): async() {
        following := List.push(id, following);
    };

    public shared query func follows(): async[Principal] {
        List.toArray(following)
    };

    public shared(msg) func post(text: Text): async() {
        // Debug.print(debug_show(msg));
        // Debug.print(Int.toText(Time.now()));
        assert(Principal.toText(msg.caller) == "ebffk-bwfav-ug43x-oxpjj-aqko7-e7n5l-2xrpg-twq5s-sjlib-pa6b4-sqe");
        messages := List.push(
            {
                content = text;
                time = Time.now()
            }, 
            messages
        );
    };

    public shared query func posts(since: Time.Time): async[Message] {
        List.toArray(Mb.getMsgsByTime(since, messages))
    };

    public shared func timeline(since: Time.Time): async[Message] {
        var rslt_msgs: Messages = List.nil();
        for (id in Iter.fromList(following)) {
            let canister: Microblog = actor(Principal.toText(id));
            let msgs = await canister.posts(since);
            for (msg in Iter.fromArray(msgs)) {
                rslt_msgs := List.push(msg, rslt_msgs);
            };
        };
        List.toArray(rslt_msgs)
    };

};