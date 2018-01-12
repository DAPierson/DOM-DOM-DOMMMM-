document.addEventListener("DOMContentLoaded", function () {

    let button = document.createElement("button");
    let p = document.createElement('p');
    let btnText = document.createTextNode(" Add Square");
    button.appendChild(btnText);
    document.body.appendChild(button);
    let id = 1;
    button.addEventListener('click', function () {
        let div = document.createElement('div');
        document.body.appendChild(div);

        div.className = "Blacksq";
        div.id = id;
        id++;

        div.addEventListener("mouseenter", function () {

            // let pText = document.createTextNode(div.id);
            // p.appendChild(pText);
            // div.appendChild(p);
            // p.className = "hoverText";

            div.innerHTML = div.id;

        });
        div.addEventListener("mouseleave", function () {
            div.innerHTML = "";

        });


        div.addEventListener('dblclick', function () {
            let previous = div.previousSibling;
            let next = div.nextSibling;
            let pid = (div.id - 1);
            let nid = (div.id + 1);
            




            if (div.id % 2 === 0) {
                document.body.removeChild(next);
            } else {
                if (previous.nodeName != 'BUTTON') {
                    document.body.removeChild(previous);


                }
            };







        });


        div.addEventListener("click", function () {


            let colors = [
                {
                    color: "red",
                },
                {
                    color: "blue",
                },
                {
                    color: "yellow",
                },
                {
                    color: 'orange',
                },
            ];
            function getRandomInt(max) {
                return Math.floor(Math.random() * Math.floor(max));
            }
            let x = getRandomInt(4);
            div.style.backgroundColor = colors[x].color;





        });







    });

});









