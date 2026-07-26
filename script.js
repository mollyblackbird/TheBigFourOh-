console.log("Script started");

const supabaseUrl = "https://kycmbburiykjsjhrnjoj.supabase.co";
const supabaseKey = "sb_publishable_bJ12BqQ4fYn1tppW3cshNQ_KYV1Xoas";


// =====================================
// SUPABASE CONFIGURATION
// =====================================

// Replace these with your own values later
const SUPABASE_URL = "https://kycmbburiykjsjhrnjoj.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_bJ12BqQ4fYn1tppW3cshNQ_KYV1Xoas";

// Create Supabase client
const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// =====================================
// ELEMENTS
// =====================================

const form = document.getElementById("birthdayForm");

const nameInput = document.getElementById("name");

const messageInput = document.getElementById("message");

const counter = document.getElementById("characters");

const popup = document.getElementById("popup");

const closePopup = document.getElementById("closePopup");

const loading = document.getElementById("loading");

const submitButton = document.getElementById("submitButton");

// =====================================
// CHARACTER COUNTER
// =====================================

messageInput.addEventListener("input", () => {

    counter.textContent = messageInput.value.length;

});

// =====================================
// CLOSE POPUP
// =====================================

closePopup.addEventListener("click", () => {

    popup.classList.add("hidden");

});

// =====================================
// FORM SUBMISSION
// =====================================

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const guestName = nameInput.value.trim();

    const guestMessage = messageInput.value.trim();

    // Validation

    if (guestMessage.length === 0) {

        alert("Please write a birthday message.");

        return;

    }

    // Prevent multiple clicks

    submitButton.disabled = true;

    submitButton.textContent = "Sending...";

    loading.classList.remove("hidden");

    try {

        const { error } = await supabaseClient
            .from("birthday_messages")
            .insert([
                {
                    name: guestName,
                    message: guestMessage
                }
            ]);

        if (error) {

            throw error;

        }

        // Reset form

        form.reset();

        counter.textContent = "0";

        // Show thank you popup

        popup.classList.remove("hidden");

    } catch (error) {

        console.error(error);

        alert(
            "Sorry, something went wrong while saving your message."
        );

    } finally {

        loading.classList.add("hidden");

        submitButton.disabled = false;

        submitButton.textContent = "Send More Birthday Wishes...";

    }

});
