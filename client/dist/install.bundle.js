document.getElementById("buttonInstall"),window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),installBtn.style.visibility="visible",textHeader.textContent="Click the button to install!",installBtn.addEventListener("click",(function(){t.prompt(),installBtn.setAttribute("disabled",!0),installBtn.textContent="Installed!"}))})),window.addEventListener("appinstalled",(function(t){textHeader.textContent="Successfully installed!",console.log("👍","appinstalled",t)}));