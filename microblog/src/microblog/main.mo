import List "mo:base/List";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Iter "mo:base/Iter";
import Option "mo:base/Option";

import Mb "microblog";

import Debug "mo:base/Debug";
// import Int "mo:base/Int";

actor Microblog{

    type Microblog = Mb.Microblog;
    type Following = Mb.Following;
    type Messages = Mb.Messages;
    type Message = Mb.Message;

    stable var following: Following = List.nil();
    stable var messages: Messages = List.nil();
    stable var author_name: Text = "Anon.";

    public shared func follow(id: Principal): async() {
        following := List.push(id, following);
    };

    public shared query func follows(): async[Principal] {
        List.toArray(following)
    };

    public shared(msg) func post(password: Text, text: Text): async() {
        // assert(Principal.toText(msg.caller) == "...");
        assert(password == "123456");
        let new_message: Message = {
            author = author_name;
            text = text;
            time = Time.now();
        };
        messages := List.push(new_message, messages);
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

    public shared query func get_name(): async ?Text {
        if (author_name == "Anon.") {
            return null;
        };
        Option.make(author_name)
    };

    public shared func set_name(name: Text): async() {
        author_name := name;
        if (List.isNil(messages)) return;

        var rslt_msgs: Messages = List.nil();
        for (msg in Iter.fromList(messages)) {
            let new_message: Message = {
                author = name;
                text = msg.text;
                time = msg.time;
            };
            rslt_msgs := List.push(new_message, rslt_msgs);
        };
        messages := rslt_msgs;
    };

    public func initState(): async() {
        following := List.nil();
        messages := List.nil();
        author_name := "Anon.";
    };
};