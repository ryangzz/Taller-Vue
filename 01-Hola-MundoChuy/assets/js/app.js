const app = new Vue({
    el: "#app", //Es el elemento sobre el cual va trabajar la aplicacion
    data: { //Data son los datos con los que trabajara la aplicacion
        texto: '',
        frutas: [{ fruta: "melon", precio: 10, cantidad: 1 }, { fruta: "mango", precio: 25, cantidad: 1 }],
        fruta: "",
        precio: 0,
        cantidad: 0
    },
    methods: { //son metodos uque utilizaras en la aplicacion 
        limpiarTexto() {
            this.texto = "";
        },
        addFruta() {
            if (this.fruta != "") {
                this.frutas.push({ fruta: this.fruta, precio: this.precio, cantidad: this.cantidad });
            }
            this.fruta = "";
            this.precio = 0;
        },
        metodAsi: async function() {
            let data = await api
        }
    },
    computed: {
        totalFurtas() {
            let total = 0,
                totalPrecio = 0;
            this.frutas.forEach(fruta => total += (fruta.cantidad * 1));
            this.frutas.forEach(fruta => totalPrecio += (fruta.precio * 1) * (fruta.cantidad * 1));
            return { total, totalPrecio };
        }
    },
    beforeUpdate() {
        console.log("Algo paso");
    }
})