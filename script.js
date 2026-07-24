console.log("SCRIPT LOADED");

const supabaseUrl = "ozctyywmsukcsryhnsud.supabase.co";

const supabaseKey = "sb_publishable_zzN79OLLJ2aw37wdv9Ej5A_wNUA9GG1";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

const form = document.getElementById("birthdayForm");

const popup = document.getElementById("popup");

form.addEventListener("submit", async function(event){
    
    console.log("FORM SUBMITTED");

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

const sparkleContainer = document.getElementById("sparkles");

for(let i=0;i<80;i++){

const sparkle=document.createElement("div");

sparkle.classList.add("sparkle");

sparkle.style.left=Math.random()*100+"%";

sparkle.style.animationDuration=
(8+Math.random()*10)+"s";

sparkle.style.animationDelay=
Math.random()*10+"s";

sparkle.style.opacity=
Math.random();

sparkle.style.transform=
`scale(${Math.random()*2})`;

sparkleContainer.appendChild(sparkle);

}
