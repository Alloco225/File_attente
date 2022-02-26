<template>
    <div>
        Client Form


        <div class="bg-gray-100">
            <input type="text" placeholder="Nom Client">
            <select name="demande" id="">
                <option value="">Demande 1</option>
                <option value="">Demande 2</option>
                <option value="">Demande 3</option>
            </select>

            <textarea name="details" id="" cols="30" rows="10" placeholder="Details demande"></textarea>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ClientForm'
    ,
    data(){
        return {
            nom,
            id_demande,
            details
        }
    },
    methods: {
        async createNewClient(){
            const dataClient = {nom: this.nom, id_demande :this.id_demande, details: this.details}

            // axios
            

        }
    }
}
</script>
