// ===================================================
// SIMOR HARDWARE - CATALOGUE VIEWER INTERFACE LOGIC
// ===================================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("SIMOR Interactive Document Reader Module Engaged.");
});

/**
 * Executes a direct alternative hard-download sequence 
 * if the viewer wants an offline asset copy.
 */
function directDownload() {
    const targetAssetPath = "images/SIMOR-Catalogue.pdf";
    
    // Create a temporary anchor element element to trigger download
    const downloadLink = document.createElement("a");
    downloadLink.href = targetAssetPath;
    downloadLink.download = "SIMOR-Catalogue.pdf";
    
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}