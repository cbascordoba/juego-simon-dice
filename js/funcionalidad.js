
      const azul = document.getElementById('azul')
      const rojo = document.getElementById('rojo')
      const amarillo = document.getElementById('amarillo')
      const verde = document.getElementById('verde')
      const btnEmpezar = document.getElementById('btnEmpezar')

      class Juego {
        constructor() {
          this.inicializar()
          this.generarSecuencia()
          this.siguienteNivel()
        }

        inicializar() {
          btnEmpezar.classList.add('hide')
          this.nivel = 5
          this.colores = {
            //   azul:azul es lo mismo que azul solo
            azul,
            rojo,
            amarillo,
            verde

          }
        }

        generarSecuencia(){
            
            // this.secuencia = [1,2,3,4,5]
            //creamos un array de 10 elementos y con la función fill ponemos todos
            //sus elementos en cero, deben estar en cero por que en map deben estar definidos
            //luego cada elemento del array generamos un número random multiplicado po 4
            //math.radom genera un valor entre 0-1 al multiplicarlo por 4 quedara entre 0 y 4
            this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
        }

        //Funcion que va a llamar a iluminar frecuencia
        siguienteNivel(){
            this.iluminarSecuencia()
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

      }

      function empezarJuego() {
        window.juego = new Juego()
      }
