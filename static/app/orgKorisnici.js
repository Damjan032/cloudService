let orgPregled = new Vue({
    el:"#orgKorisnici",
    data: {
        organizacija : "",
        korisnici : ""
    },
    mounted () {
        let uri = window.location.search.substring(1);
                let params = new URLSearchParams(uri);


                axios.get('/organizacije/'+params.get("id")).then(response => {
                    this.organizacija = response.data;
                    this.korisnici = this.organizacija.korisnici;
                    console.log(this.organizacija);
                    console.log(this.organizacija.korisnici);
                });

    }
});