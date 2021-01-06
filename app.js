let button = document.querySelector('button');
button.addEventListener('click', function() {
    let friends = ["Ethan", "Kendra", "Adam", "Amber", "Rudy"];
    
    
    for (i = 0; i < friends.length; i++) {
        let div = document.createElement('div');
        let h3 = document.createElement('h3');
        document.body.appendChild(div);
        div.className = 'friend';
        div.appendChild(h3);
        let name = document.createTextNode(friends[i]);
        h3.appendChild(name);
        for (j = 99; j > 0; j--) {
            if (j === 2) {
                let p = document.createElement('p');
                div.appendChild(p);
                p.appendChild(document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + "  more line of code in the file"));
            } else if ((j - 1) > 0) {
                let p = document.createElement('p');
                div.appendChild(p);
                p.appendChild(document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file"));
            } else {
                let p = document.createElement('p');
                div.appendChild(p);
                p.appendChild(document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file"));
            };
        };
    };
});
