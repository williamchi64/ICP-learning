/**
 * 8. DOM node tree
 * html
 * --head
 * --body
 *   --div
 *   --p
 *   --a
 *   --ul
 *   --...
 * Modifying DOM:
 * 1. update
 * 2. iterate
 * 3. delete
 * 4. add
 */
let head = document.getElementsByTagName('head');
let h1 = document.getElementsByTagName('h1');
let p1 = document.getElementById('p1');
let p2 = document.getElementsByClassName('p2');
let father = document.getElementById('father');
let p3 = document.getElementById('p3');
console.log(h1[0]);
console.log(p1);
console.log(p2[0]);
console.log(father);

console.log(father.children);
console.log(father.firstElementChild);
console.log(father.lastElementChild);

// update
h1[0].innerText = 'I\'m edited';
p1.innerHTML = '<em>emphasis word</em>';
h1[0].style.color = 'red';
p1.style.fontSize = '100px';

// delete, use father node to delete child node
let p2father = p2[0].parentElement;
p2father.removeChild(p2[0]);

// add, move a exist node
father.appendChild(p3);
p3.innerText = 'moved inside father';
// add, insert a new ndoe
let newNode = document.createElement('p');
newNode.id = 'p4';
newNode.innerText = 'I\'m a new node';
father.appendChild(newNode);
// add, insert a script node
let newScriptNode = document.createElement('script');
newScriptNode.setAttribute('type','text/javascript');
head[0].appendChild(newScriptNode);
// add, insert a style node
let newStyleNode = document.createElement('style');
newStyleNode.setAttribute('type','text/css');
newStyleNode.innerText = 'body{background: green}';
head[0].appendChild(newStyleNode);
// add, insert before a node
let newNode2 = document.createElement('p');
newNode2.id = 'p0';
newNode2.innerText = 'I\'m a new node at front';
father.insertBefore(newNode2, p1);

// 9 form 
// get form node
let aForm = document.getElementById('username');
aForm.value = '123';
let aForm2 = document.getElementsByName('gender');
aForm2[1].checked = true;
// onclick event
let submit_sth = function() {
    let username = document.getElementById('username');
    username.value = 'sth else';
    let gender = document.getElementsByName('gender');
    gender[0].checked = true;
    // md5 encoding
    let inputpassword = document.getElementById('input-password');
    let md5password = document.getElementById('md5-password');
    if (inputpassword.value.length < 10) {
        event.preventDefault();
        return;
    }
    md5password.value = md5(inputpassword.value);
}

