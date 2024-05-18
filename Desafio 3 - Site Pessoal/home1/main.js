
    //Nav Links    
    const linksNav = document.querySelectorAll("[data-link_nav]");

    linksNav[0].href = "index.html";
    linksNav[1].href = "../tools2/index.html";
    linksNav[2].href = "../projects3/index.html";

//

    //Redes Links
        const linksRedes = document.querySelectorAll("[data-link_redes]");

        const linksRedesIndex = ["https://github.com/bellvdorr", "https://www.linkedin.com/in/joão-gabriel-7481b2305/"]

        for(let i = 0; i<linksRedes.length; i++){
            linksRedes[i].href = linksRedesIndex[i]; 
        }
        
    //