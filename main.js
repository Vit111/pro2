let firstname = prompt('What is your name?', '').trim();
let lastname = prompt('What is your lastname?', '').trim();
console.log("Full name:",firstname,lastname);
let email = prompt('What is your email?', '').replaceAll(' ').toLowerCase();
let mail = email.indexOf('@');
let namemail = "Email:";
if (mail === -1) {
    email = `not valid email <b>${mail}</b> (symbol @ not exist)`;
    console.log(namemail,email);
}else if (email.startsWith('@')) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
    console.log(namemail,email);
} else if (email.endsWith('@')) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
    console.log(namemail,email);
} else {
    console.log(namemail,email);
}
let year = +prompt('What is your year of birth?', '').replaceAll(' ');
let currentYear = new Date().getFullYear();
let age = currentYear - year;
let nameage = "Age:";
console.log(nameage,age);
document.write(`
<ul>
<li>${"Full name:"+' '+firstname+' '+lastname}</li>
<li>${namemail+' '+email}</li>
<li>${nameage+' '+age}</li>
</ul>
`
);

