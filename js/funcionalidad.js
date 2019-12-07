
      const azul = document.getElementById('azul')
      const rojo = document.getElementById('rojo')
      const amarilla = document.getElementById('amarilla')
      const verde = document.getElementById('verde')
      const btnEmpezar = document.getElementById('btnEmpezar')

      class Juego {
        constructor() {
          this.inicializar()
          this.generarSecuencia()
        }

        inicializar() {
          btnEmpezar.classList.add('hide')
          this.nivel = 1
          this.colores = {
            //   azul:azul es lo mismo que azul solo
            azul,
            rojo,
            amarilla,
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
      }

      function empezarJuego() {
        window.juego = new Juego()
      }
