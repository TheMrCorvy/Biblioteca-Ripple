const rippleElements = document.getElementsByClassName("myRipple")
//armo un array con todos los elementos que tengan esta clase

for (let i = 0; i < rippleElements.length; i++) 
{ //en el bucle se le asigna un evento onclick a cada elemento html traido en el array
    rippleElements[i].onclick = function (e) 
    {
        e.stopPropagation()
        e.preventDefault()
        //calculo las coordenadas restando la altura y el ancho total de las coordenadas de donde clickeé para poder tener la altura y ancho en px y poder asignarselos luego al div que va a hacer el efecto ripple como top y left
        let X = e.pageX - this.offsetLeft
        let Y = e.pageY - this.offsetTop

        //creo el div que va a tener el efecto ripple para ponerlo adentro del boton que clickeé
        let rippleDiv = document.createElement("div")

        rippleDiv.classList.add('ripple')

        //fijo las coordenadas previamente calculadas
        rippleDiv.setAttribute("style", "top:" + Y + "px; left:" + X + "px;")

        let customColor = this.getAttribute('ripple-color')
        //si el elemento seleccionado tiene la propiedad 'ripple-color', se le asigna ese color al ripple
        if (customColor) 
        {  
            rippleDiv.style.background = customColor

            //aqui inicia el efecto ripple
            this.appendChild(rippleDiv)

            setTimeout(function () { //remuevo el div del ripple para q no haya 40k divs adentro de un boton
                rippleDiv.parentElement.removeChild(rippleDiv)
            }, 2000)
        } else {
            //lo mismo, pero sin color personalizado
            this.appendChild(rippleDiv)

            setTimeout(function () { 
                rippleDiv.parentElement.removeChild(rippleDiv)
            }, 2000)
        }
    }
}
