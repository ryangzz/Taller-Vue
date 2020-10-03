const app = new Vue({
    el: '#app',
    data: {
        mensajes: {
            mensaje: 'Hola Mundo',
            mensaje2: 'Hola Mundo de nuevo'
        },
        frutas: [{ nombre: "Mango", precio: 10, cantidad: 1 }, { nombre: "cereza", precio: 10, cantidad: 1 }, { nombre: "sandia", precio: 10, cantidad: 1 }, { nombre: "Manzana", precio: 10, cantidad: 1 }],
        fruta: '',
        precio: 0
    },
    methods: {
        limpiarMsg() {
            this.mensaje = "";
            this.mensaje2 = "";
        },
        addFruta() {
            if (this.fruta == "") {
                throw "Necesita escribir una fruta"
            } else {
                this.frutas.push({ nombre: this.fruta, precio: this.precio * 1 });
                this.fruta = "";
                this.precio = 0;
            }
        },
        delFruta() {
            if (this.fruta == "") {
                throw "Necesita escribir una fruta"
            } else {
                let fruta = this.frutas.indexOf(this.fruta);
                if (fruta < 0) {
                    alert("Esa fruta no la tenemos");
                } else {
                    this.frutas.splice(fruta, 1);
                }
                this.fruta = "";
            }
        }
    },
    computed: {
        total() {
            let total = 0;
            this.frutas.forEach(fruta => total += fruta.precio);
            return total;
        }
    }
})