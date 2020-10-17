const app = new Vue({
    el: "#app",
    data: {
        texto: "Hola Mundo desde Vue",
        estatus: false,
        picked: "1",
        frutaBuscar: '',
        tienda: {
            fruta: {
                nombre: '',
                cantidad: 0,
                precio: 0
            },
            titulo: "Almacen de Frutas",
            frutas: [{ nombre: "Mango", precio: 15, cantidad: 5, estatus: true }, { nombre: "Sandia", precio: 10, cantidad: 3, estatus: true }]
        }
    },
    methods: {
        agregarFruta() {
            let nombre = this.tienda.fruta.nombre;
            let precio = this.tienda.fruta.precio;
            let cantidad = this.tienda.fruta.cantidad;

            if (nombre == "") console.log("Esta vacio el nombre");
            else {
                let fruta = {
                    nombre: nombre,
                    precio: precio,
                    cantidad: cantidad,
                    estatus: true
                }
                this.tienda.frutas.push(fruta);
                this.tienda.fruta.nombre = '';
                this.tienda.fruta.precio = 0;
                this.tienda.fruta.cantidad = 0;
            }
        },
        delFruta(index) {
            this.tienda.frutas.splice(index, 1);
        },
        delFrutaChida(elemBuscar) {
            let fruta = this.tienda.frutas.findIndex(e => e.nombre == elemBuscar);
            if (fruta < 0) {
                console.log("Esta fruta no la tenemos");
            } else {
                this.tienda.frutas.splice(fruta, 1);
            }
            this.frutaBuscar = '';
        }
    },
    computed: {
        totalFrutas() {
            let totalFrutas = 0;
            this.tienda.frutas.forEach(fruta => totalFrutas += (fruta.cantidad) * 1);
            return totalFrutas;
        },
        totalPrecioFrutas() {
            let totalPrecio = 0;
            for (const fruta of this.tienda.frutas)
                totalPrecio += (fruta.cantidad * 1) * (fruta.precio * 1);
            return totalPrecio;
        }
    },
    watch: {
        frutaBuscar: function(newValor, oldVal) {
            if (newValor == " ") {
                this.frutaBuscar = "";
            }
        },
    },
})