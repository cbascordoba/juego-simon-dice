
      const azul = document.getElementById('azul')
      const rojo = document.getElementById('rojo')
      const amarillo = document.getElementById('amarillo')
      const verde = document.getElementById('verde')
      const btnEmpezar = document.getElementById('btnEmpezar')
      const ULTIMO_NIVEL = 15

      class Juego {
        constructor() {
        this.inicializar = this.inicializar.bind(this)
          this.inicializar()
          this.generarSecuencia()
          setTimeout(this.siguienteNivel(),500)
          
        }

        inicializar() {
            this.elegirColor = this.elegirColor.bind(this)
            this.siguienteNivel= this.siguienteNivel.bind(this)
            this.toogleBtnEmpezar()
          this.nivel = 1
          this.colores = {
            //   azul:azul es lo mismo que azul solo
            azul,
            rojo,
            amarillo,
            verde

          }
        }

        toogleBtnEmpezar(){
            if(btnEmpezar.classList.contains('hide')){
                btnEmpezar.classList.remove('hide')
            }
            else{
                btnEmpezar.classList.add('hide')
            }
        }

        generarSecuencia(){
            
            // this.secuencia = [1,2,3,4,5]
            //creamos un array de 10 elementos y con la función fill ponemos todos
            //sus elementos en cero, deben estar en cero por que en map deben estar definidos
            //luego cada elemento del array generamos un número random multiplicado po 4
            //math.radom genera un valor entre 0-1 al multiplicarlo por 4 quedara entre 0 y 4
            this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
        }

        //Funcion que va a llamar a iluminar frecuencia
        siguienteNivel(){
            this.subnivel =0
            this.iluminarSecuencia()
            this.agregarEventosClick()
        }

        transformarNumeroAColor(numero){
            switch (numero){
                case 0:
                    return 'azul'
                case 1:
                    return 'rojo'
                case 2:
                    return 'amarillo'
                case 3:
                    return 'verde'
            }
        }
        transformarColorANumero(color){
            switch (color){
                case 'azul':
                    return 0
                case 'rojo':
                    return 1
                case 'amarillo':
                    return 2
                case 'verde':
                    return 3
            }
        }

        //vamos a recorrer el array de la secuencia hasta el nivel que este el usuario
        iluminarSecuencia(){
            for(let i =0; i < this.nivel; i++){
                //con let, conservará su valor dentro de cada iteración.
                const color = this.transformarNumeroAColor(this.secuencia[i])
                setTimeout(()=> this.iluminarColor(color),1000* i)
            }
        }

        iluminarColor(color){
            this.colores[color].classList.add ('light')
            setTimeout(()=> this.apagarColor(color),350)
        }

        apagarColor(color){
            this.colores[color].classList.remove('light')
        }

        agregarEventosClick(){
            this.colores.azul.addEventListener('click', this.elegirColor)
            this.colores.rojo.addEventListener('click', this.elegirColor)
            this.colores.amarillo.addEventListener('click', this.elegirColor)
            this.colores.verde.addEventListener('click', this.elegirColor)
        }

        eliminarEventosClick(){
            this.colores.azul.removeEventListener('click', this.elegirColor)
            this.colores.rojo.removeEventListener('click', this.elegirColor)
            this.colores.amarillo.removeEventListener('click', this.elegirColor)
            this.colores.verde.removeEventListener('click', this.elegirColor)
        }

        elegirColor(ev){
            const nombreColor = ev.target.dataset.color
            const numeroColor = this.transformarColorANumero(nombreColor)
            this.iluminarColor(nombreColor)
            if(numeroColor === this.secuencia[this.subnivel]){
                this.subnivel++
                if(this.subnivel=== this.nivel){
                    this.nivel++
                    this.eliminarEventosClick()
                    if(this.nivel === (ULTIMO_NIVEL+1)){
                       this.ganoElJuego()
                    }
                    else{
                        alert("Siguiente nivel")
                        setTimeout(this.siguienteNivel,1500)
                        
                    }

                }
            }
            else{
               this.perdioElJuego()
            }

        }

        ganoElJuego(){
            swal('Simon Dice','Felicitaciones ganaste el juego', 'success' )
            .then(()=> this.inicializar()
            ) 
        }
        perdioElJuego(){
            swal('Simon Dice','Has perdido :(', 'error' )
            .then(()=>{
                this.eliminarEventosClick()
                this.inicializar()
            }) 
        }


      }

      function empezarJuego() {
        window.juego = new Juego()
      }
