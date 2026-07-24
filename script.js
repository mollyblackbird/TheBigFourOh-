console.log("Script started");

const supabaseUrl = "https://ozctyywmsukcsryhnsud.supabase.co";
const supabaseKey = "sb_publishable_zzN79OLLJ2aw37wdv9Ej5A_wNUA9GG1";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

console.log("Supabase client created");

const form = document.getElementById("birthdayForm");
const popup = document.getElementById("popup");

console.log("Form:", form);
console.log("Popup:", popup);

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    console.log("Submit clicked");

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    console.log(name, message);

    try {

        const result = await supabase
            .from("messages")
            .insert([
                {
                    name,
                    message
                }
            ]);

        console.log(result);

        if(result.error){

            console.error(result.error);

            alert(result.error.message);

            return;

        }

        console.log("Success!");

        confetti({
            particleCount:200,
            spread:120
        });

        popup.style.display="flex";

        form.reset();

    } catch(err){

        console.error(err);

        alert(err.message);

    }

});

function closePopup(){

    popup.style.display="none";

}
