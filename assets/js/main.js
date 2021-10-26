let login = document.getElementById('login')
let reg = document.getElementById('reg')
function setRegiterPage() {
    reg.classList.toggle('active')
    login.classList.toggle('active')
}


let app = new Vue({
    el: '#app',
    data: {
        page: 'index',
        searchForm:{
            from: null,
            to: null,
            dateTo: null,
            dateFrom: null,
            passanger: null,
            from1: '',
            to1: ''
        },
        serch: {}
    },
    methods: {
        async search(){
            this.page="search"
            await fetch('http://localhost/flightpool/public/api/airport?query=' + this.searchForm.from)
                .then(res => res.json())
                .then(data => {
                    this.searchForm.from1 = data.data.items[0].iata
                    console.log( this.searchForm.from1)
                });
            await fetch('http://localhost/flightpool/public/api/airport?query=' + this.searchForm.to)
                .then(res => res.json())
                .then(data => {
                    this.searchForm.to1 = data.data.items[0].iata
                    console.log( this.searchForm.to1)
                });  

            
        }
    }
})