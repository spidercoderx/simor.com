// ===================================================
// SIMOR HARDWARE - STANDALONE DEALER PROCESSING LOGIC
// ===================================================

document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("standaloneDealerForm");

    if (registrationForm) {
        registrationForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Halt document refresh reload sequence

            // Collect user contextual form parameter captures
            const payload = {
                fullName: document.getElementById("fullName").value.trim(),
                phone: document.getElementById("phoneNum").value.trim(),
                companyName: document.getElementById("compName").value.trim(),
                gstin: document.getElementById("gstin").value.trim() || "N/A",
                city: document.getElementById("cityLoc").value.trim(),
                state: document.getElementById("stateLoc").value.trim(),
                businessProfile: document.getElementById("bizMsg").value.trim()
            };

            // Diagnostic reporting
            console.log("Transmission Data Ready:", payload);

            // Interface notification to user confirming validation success
            alert(`Thank you, ${payload.fullName}!\n\nYour application for "${payload.companyName}" has been logged successfully. You will now be redirected to the Home page.`);

            // Reset UI form targets
            registrationForm.reset();

            // Return to landing index seamlessly
            window.location.href = "index.html";
        });
    }
});