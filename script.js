const supabaseUrl = "https://ozctyywmsukcsryhnsud.supabase.co/rest/v1/";

const supabaseKey = "sb_publishable_zzN79OLLJ2aw37wdv9Ej5A_wNUA9GG1";

const form =
document.getElementById("birthdayForm");

form.addEventListener(
"submit",

async function(event){
event.preventDefault();
}
);

const { error } =
await supabase

.from("messages")

.insert([
{
name: name,
message: message
}
]);

if (error) {

alert("Sorry! Got too excited and something went wrong.");

}

else {

alert("Thank you for your message!");
  form.reset();

}
