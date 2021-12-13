$(document).ready(function($) {

    var mois = ['Chameau', 'Cafard', 'Bouc', 'Pigeon', 'Blaireau', 'Chacal', 'Dindon', 'Poulet', 'Crapaud', 'Putois', 'Blobfish', 'Bousier'];

    var jour = ['debile', 'moisi', 'peteur', 'de l\'espace', 'malefique', 'rampant', 'furieux', 'pourri', 'malin', 'boiteux', 'mortel', 'sexuel', 'bigleux', 'cretin', 'genial', 'sanglant', 'magique', 'supreme', 'charmant', 'bouseux', 'vengeur', 'fetide', 'infernal', 'crado', 'de carnaval', 'puant', 'hurleur', 'somptueux', 'mou', 'mignon'];


    var randomMois = Math.floor(Math.random() * 12);
    var randomJour = Math.floor(Math.random() * 31);

    console.log(randomMois);
    console.log(randomJour);

});