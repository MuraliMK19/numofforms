const forms = () => {
    let num = parseInt(document.getElementById("num").value);
    for (let i = 0; i < num; i++) {
        let div = document.createElement("div")
        div.className = "col-lg-3 d-flex flex-column m-3"
        let l1 = document.createElement("label")
        let l1txt = document.createTextNode("Username")
        let inp = document.createElement("input")
        inp.setAttribute("type", "text")
        let l2 = document.createElement("label")
        let l2txt = document.createTextNode("Password")
        let passinp = document.createElement("input")
        passinp.setAttribute("type", "password")
        let inpbtn = document.createElement("input")
        inpbtn.setAttribute("type", "button")
        inpbtn.setAttribute("value", "submit")
        l1.appendChild(l1txt)
        l2.appendChild(l2txt)
        div.append(l1, inp, l2, passinp, inpbtn)
        document.getElementById("printform").appendChild(div)
    }
}
document.getElementById("btnid").addEventListener("click", forms)