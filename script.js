const supabaseUrl = "https://ozctyywmsukcsryhnsud.supabase.co";
const supabaseKey = "sb_publishable_zzN79OLLJ2aw37wdv9Ej5A_wNUA9GG1";

const supabase = window.supabase.createClient(
    supabaseUrl,
    supabaseKey
);

const form = document.getElementById("Birthday Messages");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const message = document.getElementById("message").value;

    const { error } = await supabase
        .from("messages")
        .insert([
            {
                name: name,
                message: message
            }
        ]);

    if (error) {

        alert("Something went wrong.");

    } else {

        alert("🎉 Thank you for your birthday message!");

        form.reset();
    }

});
