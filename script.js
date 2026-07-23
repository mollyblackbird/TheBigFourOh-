const supabaseUrl = "https://ozctyywmsukcsryhnsud.supabase.co";

const supabaseKey = "sb_publishable_zzN79OLLJ2aw37wdv9Ej5A_wNUA9GG1";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

const form = document.getElementById("birthdayForm");

const popup = document.getElementById("popup");

form.addEventListener("submit", async function(event){

event.preventDefault();

const name = document.getElementById("name").value;

const message = document.getElementById("message").value;

const { error } = await supabase

.from("messages")

.insert([
{
name:name,
message:message
}
]);

if(error){

alert("Something went wrong.\n\n"+error.message);

return;

}

confetti({

particleCount:200,

spread:120,

origin:{y:0.6}

});

popup.style.display="flex";

form.reset();

});

function closePopup(){

popup.style.display="none";

}
