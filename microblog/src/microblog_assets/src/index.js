import {
  microblog, createActor
} from "../../declarations/microblog";
import {
  Principal
} from "@dfinity/principal";

let index = {};
index.num_posts = 0;
index.num_follows = 0;
index.num_timeline = 0;
index.filter_time = 1;
index.filter_follow = "";
index.filter_old = "";

async function set_author() {
  let author_text = document.getElementById("authorText");
  let author_info = document.getElementById("authorInfo");
  try {
    await microblog.set_name(author_text.value);
    author_info.innerText = "name edited";
    author_info.setAttribute("style","color: green;");
  } catch(e) {
    console.log(e);
    author_info.innerText = "name edited error";
    author_info.setAttribute("style","color: red;");
  };
  load_posts();
  load_timeline();
};

async function post() {
  let message = document.getElementById("message");
  let password = document.getElementById("password");
  let error = document.getElementsByClassName("error")[0];
  let post = document.getElementById("post");

  error.innerText = "";
  post.disabled = true;

  try {
    await microblog.post(password.value, message.value);
    message.value = "";
  } catch (err) {
    console.log(err);
    error.innerText = "Post Failed";
  };

  post.disabled = false;
};

async function follow() {
  let follow_text = document.getElementById("followText");
  let error = document.getElementsByClassName("error")[1];
  let follow = document.getElementById("follow");

  error.innerText = "";
  follow.disabled = true;

  try {
    let follow_principal = Principal.from(follow_text.value);
    await microblog.follow(follow_principal);
    follow_text.value = "";
  } catch (err) {
    console.log(err);
    error.innerText = "Follow Failed";
  };

  follow.disabled = false;
};

async function filter_load() {
  let time = document.getElementById("time");
  let ts = new Date(time.value).getTime();
  let mot = jsTimestampToMotokoTime(ts);
  index.filter_time = mot;
  load_posts();
  load_timeline();
};

async function clear_all() {
  await microblog.initState();
  load_posts();
  load_follows();
  load_timeline();
};

async function load_author() {
  let author_text = document.getElementById("authorText");
  let author = await microblog.get_name();
  author_text.value = author[0]? author[0]: "Anon.";
};

async function load_posts() {
  let posts_table = document.getElementById("posts");
  let posts = await microblog.posts(index.filter_time);

  if (index.num_posts == posts.length) return;
  posts_table.replaceChildren([]);
  index.num_posts = posts.length;
  for (const post of posts) {
    let timestamp = motokoTimeToJsTimestamp(post.time);
    let date = timestampToDate(timestamp);
    let tr_elem = toTableRow(post.author, post.text, date);
    posts_table.appendChild(tr_elem);
  };
};

async function load_follows() {
  let follows_table = document.getElementById("follows");
  let follows = await microblog.follows();
  if (index.num_follows == follows.length) return;
  follows_table.replaceChildren([]);
  index.num_follows = follows.length;
  for (const follow of follows) {
    const other_microblog = createActor(follow);
    let author = await other_microblog.get_name();
    let tr_elem = toTableRow(author[0]? author[0]: "Anon.");
    let link_button = document.createElement("button");
    link_button.innerText = tr_elem.firstChild.textContent;
    link_button.onclick = function () {
      index.filter_follow = this.innerText;
      load_timeline();
    };
    tr_elem.firstChild.innerText = "";
    tr_elem.firstChild.appendChild(link_button);
    follows_table.appendChild(tr_elem);
  };
};

async function load_timeline() {
  let timeline_table = document.getElementById("timeline");
  let timeline = await microblog.timeline(index.filter_time);
  let flag_time = index.num_timeline == timeline.length;
  let flag_follow = index.filter_follow == index.filter_old;
  let flag = index.filter_follow != "";
  if (flag_time && flag_follow) return;
  timeline_table.replaceChildren([]);
  index.num_timeline = timeline.length;
  for (const follow of timeline) {
    if (flag && follow.author !== index.filter_follow) continue;
    let timestamp = motokoTimeToJsTimestamp(follow.time);
    let date = timestampToDate(timestamp);
    let tr_elem = toTableRow(follow.author, follow.text, date);
    timeline_table.appendChild(tr_elem);
  };
  index.filter_old = index.filter_follow;
};

function load() {
  let author_button = document.getElementById("author");
  author_button.onclick = set_author;
  let post_button = document.getElementById("post");
  post_button.onclick = post;
  let follow_button = document.getElementById("follow");
  follow_button.onclick = follow;
  let time_input = document.getElementById("time");
  time_input.onchange = filter_load;
  let clear_all_button = document.getElementById("clearall");
  clear_all_button.onclick = clear_all;
  load_author();
  load_posts();
  setInterval(load_posts, 3000);
  load_follows();
  setInterval(load_follows, 3000);
  load_timeline();
  setInterval(load_timeline, 3000);
};

function toTableRow(...rest) {
  let tr_elem = document.createElement("tr");
  for (const elem of rest) {
    let td_elem = document.createElement("td");
    td_elem.setAttribute("class", "tableTd");
    td_elem.setAttribute("title", elem);
    td_elem.innerText = elem;
    tr_elem.appendChild(td_elem);
  };
  return tr_elem;
};

function motokoTimeToJsTimestamp(motokoTime) {
  return Math.round(Number(motokoTime) / Math.pow(10, 6));
};

function jsTimestampToMotokoTime(timestamp) {
  return timestamp * Math.pow(10, 6);
};

function timestampToDate(timestamp) {
  return new Date(timestamp);
};

window.onload = load;