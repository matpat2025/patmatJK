function changeContentFunction(sectionNameParametr) {
    
    fetch("file:///C:/Users/arekj/Desktop/strona/memSection.html")
        .then((res) => res.text())
        .then((memSectionText) => {
            
            let contentElement = document.getElementById("content");
            contentElement.innerHTML = memSectionText;

            let memSectionName = document.getElementById('memSectionName');
            memSectionName.innerHTML = sectionNameParametr;

            console.log('sectionNameParametr: ' + sectionNameParametr);

            if (sectionNameParametr == 'Dzik') {
                alert(sectionNameParametr);
            }
            else if (sectionNameParametr == 'Zugajki') {
                alert(sectionNameParametr);
            }
            else if (sectionNameParametr == 'Zugajki') {
                alert(sectionNameParametr);
            }
            else {

            }
        })
        .catch((e) => console.error(e));

   
    
}

