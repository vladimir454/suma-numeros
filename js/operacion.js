function suma() {
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    c = a + b;
    document.getElementById("RESPUESTA").innerHTML = c;
}
function estilos() {
    const padre = document.querySelector(".padre");
    const hijo = document.querySelector(".hijo");
    padre.style.backgroundColor = "black";
    hijo.style.backgroundColor = "white";
}

function estilos2() {
    const padre = document.querySelector(".padre");
    const hijo = document.querySelector(".hijo");
    padre.classList.add("para-padre");
    hijo.classList.add("para-hijo");


}

function centrarcss() {
    const padre = document.querySelector(".padre");
    const hijo = document.querySelector(".hijo");

    padre.classList.add("para-padre2");
    hijo.classList.add("para-hijo2");
    hijo.textContent = "texto";
    hijo.textContent("rx");



}
function centrarjs() {
    const padre = document.querySelector(".padre");
    const hijo = document.querySelector(".hijo");


    padre.style.display = "flex";
    padre.style.justifyContent = "center";
    padre.style.alignItems = "center";
    hijo.textContent = "caja centrada";

}

function ej1() {
    //se implemento aqui para hacer redireccion al input para que el usuario escriba el texto
    let a = document.getElementById("num1").value;
    if (a === "") {
        let solid = document.getElementById("num1");
        //  solid.style.outline = "2px solid orange"; 
        solid.focus();
        return solid;

    } else {
        a = parseFloat(a);
        let ra = (0.4 * (Math.pow(a, 4))) + (3.1 * (Math.pow(a, 2))) - ((162.3 * a)) - 80.7;
        document.getElementById("respuesta_ej1").innerHTML = ra;

    }

}

function ej2() {

    let b = document.getElementById("num2").value;
    if (b === "") {
        let solid = document.getElementById("num2");
        //  solid.style.outline = "2px solid orange"; 
        solid.focus();
        return solid;

    } else {
        b = parseFloat(b);
        let rb = ((b ** 3) - 23) / (Math.cbrt((b ** 2) + (17.5)));
        document.getElementById("respuesta_ej2").innerHTML = rb;

    }

}
function ej3() {

    let c = document.getElementById("num3").value;
    if (c === "") {
        let solid = document.getElementById("num3");
        solid.focus();
        return solid;
    }
    else {
        c = parseFloat(c);
        let rc = (1 / 2) * (Math.pow(2.7182, 2 * c)) - (3.81 * (c ** 3));
        document.getElementById("respuesta_ej3").innerHTML = rc;

    }

    //  document.writeln("resultado 7 a: " + rc + "<br>");


}
function ej4() {

    let d = document.getElementById("num4").value;
    if (d === "") {
        return document.getElementById("num4").focus();

    }
    else {
        d = parseFloat(d);
        let rd = (6 * (d ** 2) + 6 * (d) - 2) / ((d ** 2) - 1);
        // document.writeln("resultado 7 b: " + rd + "<br>");
        document.getElementById("respuesta_ej4").innerHTML = rd;
    }



}
function ej5() {
    //ejercio 8 x y y
    let e1 = document.getElementById("num5").value;

    let e2 = document.getElementById("num6").value;
    if (e1 === "") {
        return document.getElementById("num5").focus();
    }
    else if (e2 === "") {
        return document.getElementById("num6").focus();
    }
    else if (e1 >= e2) // si e2 es mayor a e1 da resultado infinity
    {
        return document.getElementById("num5").focus();
    }
    else {
        e1 = parseFloat(e1);
        let re = (((e1 ** 2) + (e2 ** 2)) ** 2 / 3) + ((e1 * e2) / (e2 - e1));
        document.getElementById("respuesta_ej5").innerHTML = re;
        e2 = parseFloat(e2);
        let rf = ((Math.sqrt(e1 + e1)) / ((e1 - e2) ** 2)) + (2 * (e1) ** 2) - ((e1 * e2) ** 2);
        // document.writeln("resultado 8 b " + rf + "<br>");
        document.getElementById("respuesta_ej5_1").innerHTML = rf;
    }

    // document.writeln("resultado 8 a " + re + "<br>");

    // let f = parseFloat(prompt("ej8 b"));


}

function ej6() {

    // //ejercio 9 a b c y d como entrada


    let c1 = document.getElementById("num7").value;
    let d1 = document.getElementById("num8").value;


    if (c1 === "") {
        return document.getElementById("num7").focus();
    }
    else if (d1 == "") {
        return document.getElementById("num8").focus();
    }
    //   else if (d1 >=c1 ) // si e2 es mayor a e1 da resultado infinity
    // {
    //     return document.getElementById("num7").focus();
    // }
    else {
        c1 = parseFloat(c1);
        d1 = parseFloat(d1);
        let a1 = c1 * ((d1) ** 2);
        let b1 = ((c1 + a1) / (c1 - d1));
        let rs = ((2.7182 ** (d1 - b1)) + Math.cbrt(c1 + a1) - ((c1 * a1) ** d1));
        // document.writeln("resultado 9 a " + rs + "<br>");
        document.getElementById("respuesta_ej6").innerHTML = rs;

        let rs1 = (((d1) / (c1)) + (((c1) / (b1)) ** 2) - ((c1) ** 4) - ((a1) / (b1)));
        // alert(document.writeln("resultado 9 b " + rs1 + "<br>");
        document.getElementById("respuesta_ej6_1").innerHTML = rs1;

    }


}



function ej7() {
    // // ejercicio 10  trigonometricas

    let x1 = 3.1418 / 10;
    // let cos1x = Math.cos(x1);
    let cos1 = (1 - (Math.sin(x1)) - Math.sin(x1)) == 1 - 2 * (Math.sin(x1));
    // document.writeln("resultado 10 a es : " + cos1 + "<br>");
    document.getElementById("respuesta_ej7").innerHTML = cos1;

    let tang = (((Math.tan(x1)) / (Math.sin(x1) - 2 * (Math.tan(x1)))) == ((1) / (Math.cos(x1) - 2)));
    // document.writeln("el resultado de 10 b es: " + tang + "<br>");
    document.getElementById("respuesta_ej7_1").innerHTML = tang;
}
