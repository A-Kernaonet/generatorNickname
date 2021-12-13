$(document).ready(function($) {

    var mois = ['Chameau', 'Cafard', 'Bouc', 'Pigeon', 'Blaireau', 'Chacal', 'Dindon', 'Poulet', 'Crapaud', 'Putois', 'Blobfish', 'Bousier', 'Troll', 'Dinosaure', 'Vador', 'Thanos', 'Viking', 'Alien', 'Groot', 'Padawan', 'Pirates', 'Singe', 'Na\'vi', 'Wookiee', 'Saiyan', 'Ninja', 'Gremlins', 'Golum', 'Shrek', 'Voldemort', 'L\'elfe', 'Monstre', 'Captain America', 'Dracula', 'L\'handicapé', 'Le rouquin', 'Le coyotte', 'Titan', 'Macfly', 'Loug-garou', 'Vampire'];

    var jour = ['debile', 'moisi', 'peteur', 'de l\'espace', 'malefique', 'rampant', 'furieux', 'pourri', 'malin', 'boiteux', 'mortel', 'sexuel', 'bigleux', 'cretin', 'genial', 'sanglant', 'magique', 'supreme', 'charmant', 'bouseux', 'vengeur', 'fetide', 'infernal', 'crado', 'de carnaval', 'puant', 'hurleur', 'somptueux', 'mou', 'mignon', 'sordide'];


    var randomMois = Math.floor(Math.random() * mois.length);
    var randomJour = Math.floor(Math.random() * jour.length);

    console.log(mois[randomMois]);
    console.log(jour[randomJour]);

    $('#pseudo').html("Ton pseudo : " + mois[randomMois] + " " + jour[randomJour]);


    $("#btnModal").click(function() {
        $('#modal_qrcode').css('display', 'block');
    });

    $("#modalClose").click(function() {
        $('#modal_qrcode').css('display', 'none');
    });

});