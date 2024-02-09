const userLanguage = window.navigator.userLanguage || window.navigator.language;

const teams = [
    "rd",
    "AD", "AE", "AF", "AG", "AI",
    "AL", "AM", "AO", "AQ", "AR",
    "AS", "AT", "AU", "AW", "AX",
    "AZ", "BA", "BB", "BD", "BE",
    "BF", "BG", "BH", "BI", "BJ",
    /*BL*/, "BM", "BN", "BO", "BQ",
    "BR", "BS", "BT", "BV", "BW",
    "BY", "BZ", "CA", "CC", "CD",
    "CF", "CG", "CH", "CI", "CK",
    "CL", "CM", "CN", "CO", "CR",
    "CU", "CV", "CW", "CX", "CY",
    "CZ", "DE", "DJ", "DK", "DM",
    "DO", "DZ", "EC", "EE", "EG",
    "EH", "ER", "ES", "ET", "EU",
    "FI", "FJ", "FK", "FM", "FO",
    "FR", "GA", "GB-ENG", /*GB-NIR*/, "GB-SCT",
    "GB-WLS", "GB", "GD", "GE",/*GF*/,
    "GG", "GH", "GI", "GL", "GM",
    "GN", /*GP*/, "GQ", "GR", "GS",
    "GT", "GU", "GW", "GY", "HK",
    "HM", "HN", "HR", "HT", "HU",
    "ID", "IE", "IL", "IM", "IN",
    "IO", "IQ", "IR", "IS", "IT",
    "JE", "JM", "JO", "JP", "KE",
    "KG", "KH", "KI", "KM", "KN",
    "KP", "KR", "KW", "KY", "KZ",
    "LA", "LB", "LC", "LI", "LK",
    "LR", "LS", "LT", "LU", "LV",
    "LY", "MA", "MC", "MD", "ME",
    /*MF*/, "MG", "MH", "MK", "ML",
    "MM", "MN", "MO", "MP", /*MQ*/,
    "MR", "MS", "MT", "MU", "MV",
    "MW", "MX", "MY", "MZ", "NA",
    /*NC*/, "NE", "NF", "NG", "NI",
    "NL", "NO", "NP", "NR", "NU",
    "NZ", "OM", "PA", "PE", "PF",
    "PG", "PH", "PK", "PL", /*PM*/,
    "PN", "PR", "PS", "PT", "PW",
    "PY", "QA", /*RE*/, "RO", "RS",
    "RU", "RW", "SA", "SB", "SC",
    "SD", "SE", "SG", "SH", "SI",
    "SJ", "SK", "SL", "SM", "SN",
    "SO", "SR", "SS", "ST", "SV",
    "SX", "SY", "SZ", "TC", "TD",
    "TF", "TG", "TH", "TJ", "TK",
    "TL", "TM", "TN", "TO", "TR",
    "TT", "TV", "TW", "TZ", "UA",
    "UG", /*UM*/, "US", "UY", "UZ",
    "VA", "VC", "VE", "VG", "VI",
    "VN", "VU", "WF", "WS", "XK",
    "YE", /*"YT"*/, "ZA", "ZM", "ZW"
];//tks https://github.com/hampusborgos/country-flags

let nameFlags = {
    "rd": { "en": "Random", "lanBR": "Aleatório" },
    "AD": { "en": "Andorra", "lanBR": "Andorra" },
    "AE": { "en": "United Arab Emirates", "lanBR": "Emirados Árabes Unidos" },
    "AF": { "en": "Afghanistan", "lanBR": "Afeganistão" },
    "AG": { "en": "Antigua and Barbuda", "lanBR": "Antígua e Barbuda" },
    "AI": { "en": "Anguilla", "lanBR": "Anguilla" },
    "AL": { "en": "Albania", "lanBR": "Albânia" },
    "AM": { "en": "Armenia", "lanBR": "Armênia" },
    "AO": { "en": "Angola", "lanBR": "Angola" },
    "AQ": { "en": "Antarctica", "lanBR": "Antártida" },
    "AR": { "en": "Argentina", "lanBR": "Argentina" },
    "AS": { "en": "American Samoa", "lanBR": "Samoa Americana" },
    "AT": { "en": "Austria", "lanBR": "Áustria" },
    "AU": { "en": "Australia", "lanBR": "Austrália" },
    "AW": { "en": "Aruba", "lanBR": "Aruba" },
    "AX": { "en": "\u00c5land Islands", "lanBR": "Ilhas Aland" },
    "AZ": { "en": "Azerbaijan", "lanBR": "Azerbaijão" },
    "BA": { "en": "Bosnia and Herzegovina", "lanBR": "Bósnia e Herzegovina" },
    "BB": { "en": "Barbados", "lanBR": "Barbados" },
    "BD": { "en": "Bangladesh", "lanBR": "Bangladesh" },
    "BE": { "en": "Belgium", "lanBR": "Bélgica" },
    "BF": { "en": "Burkina Faso", "lanBR": "Burkina Faso" },
    "BG": { "en": "Bulgaria", "lanBR": "Bulgária" },
    "BH": { "en": "Bahrain", "lanBR": "Bahrain" },
    "BI": { "en": "Burundi", "lanBR": "Burundi" },
    "BJ": { "en": "Benin", "lanBR": "Benin" },
    //"BL": { "en": "Saint Barthélemy", "lanBR": "Saint Barthélemy" },
    "BM": { "en": "Bermuda", "lanBR": "Bermudas" },
    "BN": { "en": "Brunei Darussalam", "lanBR": "Brunei Darussalam" },
    "BO": { "en": "Bolivia, Plurinational State of", "lanBR": "Bolívia, Estado Plurinacional da" },
    "BQ": { "en": "Caribbean Netherlands", "lanBR": "Caribe Holandês" },
    "BR": { "en": "Brazil", "lanBR": "Brasil" },
    "BS": { "en": "Bahamas", "lanBR": "Bahamas" },
    "BT": { "en": "Bhutan", "lanBR": "Butão" },
    "BV": { "en": "Bouvet Island", "lanBR": "Ilha Bouvet" },
    "BW": { "en": "Botswana", "lanBR": "Botsuana" },
    "BY": { "en": "Belarus", "lanBR": "Bielorrússia" },
    "BZ": { "en": "Belize", "lanBR": "Belize" },
    "CA": { "en": "Canada", "lanBR": "Canadá" },
    "CC": { "en": "Cocos (Keeling) Islands", "lanBR": "Ilhas Cocos (Keeling)" },
    "CD": { "en": "Congo, the Democratic Republic of the", "lanBR": "Congo, República Democrática do" },
    "CF": { "en": "Central African Republic", "lanBR": "República Centro-Africana" },
    "CG": { "en": "Republic of the Congo", "lanBR": "República do Congo" },
    "CH": { "en": "Switzerland", "lanBR": "Suíça" },
    "CI": { "en": "Côte d'Ivoire", "lanBR": "Costa do Marfim" },
    "CK": { "en": "Cook Islands", "lanBR": "Ilhas Cook" },
    "CL": { "en": "Chile", "lanBR": "Chile" },
    "CM": { "en": "Cameroon", "lanBR": "Camarões" },
    "CN": { "en": "China (People's Republic of China)", "lanBR": "China (República Popular da China)" },
    "CO": { "en": "Colombia", "lanBR": "Colômbia" },
    "CR": { "en": "Costa Rica", "lanBR": "Costa Rica" },
    "CU": { "en": "Cuba", "lanBR": "Cuba" },
    "CV": { "en": "Cape Verde", "lanBR": "Cabo Verde" },
    "CW": { "en": "Curaçao", "lanBR": "Curaçao" },
    "CX": { "en": "Christmas Island", "lanBR": "Ilha Christmas" },
    "CY": { "en": "Cyprus", "lanBR": "Chipre" },
    "CZ": { "en": "Czech Republic", "lanBR": "República Tcheca" },
    "DE": { "en": "Germany", "lanBR": "Alemanha" },
    "DJ": { "en": "Djibouti", "lanBR": "Djibouti" },
    "DK": { "en": "Denmark", "lanBR": "Dinamarca" },
    "DM": { "en": "Dominica", "lanBR": "Dominica" },
    "DO": { "en": "Dominican Republic", "lanBR": "República Dominicana" },
    "DZ": { "en": "Algeria", "lanBR": "Argélia" },
    "EC": { "en": "Ecuador", "lanBR": "Equador" },
    "EE": { "en": "Estonia", "lanBR": "Estônia" },
    "EG": { "en": "Egypt", "lanBR": "Egito" },
    "EH": { "en": "Western Sahara", "lanBR": "Saara Ocidental" },
    "ER": { "en": "Eritrea", "lanBR": "Eritreia" },
    "ES": { "en": "Spain", "lanBR": "Espanha" },
    "ET": { "en": "Ethiopia", "lanBR": "Etiópia" },
    "EU": { "en": "Europe", "lanBR": "Europa" },
    "FI": { "en": "Finland", "lanBR": "Finlândia" },
    "FJ": { "en": "Fiji", "lanBR": "Fiji" },
    "FK": { "en": "Falkland Islands (Malvinas)", "lanBR": "Ilhas Falkland (Malvinas)" },
    "FM": { "en": "Micronesia, Federated States of", "lanBR": "Micronésia, Estados Federados da" },
    "FO": { "en": "Faroe Islands", "lanBR": "Ilhas Faroe" },
    "FR": { "en": "France", "lanBR": "França" },
    "GA": { "en": "Gabon", "lanBR": "Gabão" },
    "GB-ENG": { "en": "England", "lanBR": "Inglaterra" },
    //"GB-NIR": { "en": "Northern Ireland", "lanBR": "Irlanda do Norte" },
    "GB-SCT": { "en": "Scotland", "lanBR": "Escócia" },
    "GB-WLS": { "en": "Wales", "lanBR": "País de Gales" },
    "GB": { "en": "United Kingdom", "lanBR": "Reino Unido" },
    "GD": { "en": "Grenada", "lanBR": "Granada" },
    "GE": { "en": "Georgia", "lanBR": "Geórgia" },
    //"GF": { "en": "French Guiana", "lanBR": "Guiana Francesa" },
    "GG": { "en": "Guernsey", "lanBR": "Guernsey" },
    "GH": { "en": "Ghana", "lanBR": "Gana" },
    "GI": { "en": "Gibraltar", "lanBR": "Gibraltar" },
    "GL": { "en": "Greenland", "lanBR": "Groenlândia" },
    "GM": { "en": "Gambia", "lanBR": "Gâmbia" },
    "GN": { "en": "Guinea", "lanBR": "Guiné" },
    //"GP": { "en": "Guadeloupe", "lanBR": "Guadalupe" },
    "GQ": { "en": "Equatorial Guinea", "lanBR": "Guiné Equatorial" },
    "GR": { "en": "Greece", "lanBR": "Grécia" },
    "GS": { "en": "South Georgia and the South Sandwich Islands", "lanBR": "Geórgia do Sul e Ilhas Sandwich do Sul" },
    "GT": { "en": "Guatemala", "lanBR": "Guatemala" },
    "GU": { "en": "Guam", "lanBR": "Guam" },
    "GW": { "en": "Guinea-Bissau", "lanBR": "Guiné-Bissau" },
    "GY": { "en": "Guyana", "lanBR": "Guiana" },
    "HK": { "en": "Hong Kong", "lanBR": "Hong Kong" },
    "HM": { "en": "Heard Island and McDonald Islands", "lanBR": "Ilha Heard e Ilhas McDonald" },
    "HN": { "en": "Honduras", "lanBR": "Honduras" },
    "HR": { "en": "Croatia", "lanBR": "Croácia" },
    "HT": { "en": "Haiti", "lanBR": "Haiti" },
    "HU": { "en": "Hungary", "lanBR": "Hungria" },
    "ID": { "en": "Indonesia", "lanBR": "Indonésia" },
    "IE": { "en": "Ireland", "lanBR": "Irlanda" },
    "IL": { "en": "Israel", "lanBR": "Israel" },
    "IM": { "en": "Isle of Man", "lanBR": "Ilha de Man" },
    "IN": { "en": "India", "lanBR": "Índia" },
    "IO": { "en": "British Indian Ocean Territory", "lanBR": "Território Britânico do Oceano Índico" },
    "IQ": { "en": "Iraq", "lanBR": "Iraque" },
    "IR": { "en": "Iran, Islamic Republic of", "lanBR": "Irã, República Islâmica do" },
    "IS": { "en": "Iceland", "lanBR": "Islândia" },
    "IT": { "en": "Italy", "lanBR": "Itália" },
    "JE": { "en": "Jersey", "lanBR": "Jersey" },
    "JM": { "en": "Jamaica", "lanBR": "Jamaica" },
    "JO": { "en": "Jordan", "lanBR": "Jordânia" },
    "JP": { "en": "Japan", "lanBR": "Japão" },
    "KE": { "en": "Kenya", "lanBR": "Quênia" },
    "KG": { "en": "Kyrgyzstan", "lanBR": "Quirguistão" },
    "KH": { "en": "Cambodia", "lanBR": "Camboja" },
    "KI": { "en": "Kiribati", "lanBR": "Kiribati" },
    "KM": { "en": "Comoros", "lanBR": "Comores" },
    "KN": { "en": "Saint Kitts and Nevis", "lanBR": "São Cristóvão e Névis" },
    "KP": { "en": "Korea, Democratic People's Republic of", "lanBR": "Coreia, República Popular Democráticada" },
    "KR": { "en": "Korea, Republic of", "lanBR": "Coreia, República da" },
    "KW": { "en": "Kuwait", "lanBR": "Kuwait" },
    "KY": { "en": "Cayman Islands", "lanBR": "Ilhas Cayman" },
    "KZ": { "en": "Kazakhstan", "lanBR": "Cazaquistão" },
    "LA": { "en": "Laos (Lao People's Democratic Republic)", "lanBR": "Laos (República Democrática Popular do Laos)" },
    "LB": { "en": "Lebanon", "lanBR": "Líbano" },
    "LC": { "en": "Saint Lucia", "lanBR": "Santa Lúcia" },
    "LI": { "en": "Liechtenstein", "lanBR": "Liechtenstein" },
    "LK": { "en": "Sri Lanka", "lanBR": "Sri Lanka" },
    "LR": { "en": "Liberia", "lanBR": "Libéria" },
    "LS": { "en": "Lesotho", "lanBR": "Lesoto" },
    "LT": { "en": "Lithuania", "lanBR": "Lituânia" },
    "LU": { "en": "Luxembourg", "lanBR": "Luxemburgo" },
    "LV": { "en": "Latvia", "lanBR": "Letônia" },
    "LY": { "en": "Libya", "lanBR": "Líbia" },
    "MA": { "en": "Morocco", "lanBR": "Marrocos" },
    "MC": { "en": "Monaco", "lanBR": "Mônaco" },
    "MD": { "en": "Moldova, Republic of", "lanBR": "Moldávia, República da" },
    "ME": { "en": "Montenegro", "lanBR": "Montenegro" },
    //"MF": { "en": "Saint Martin", "lanBR": "São Martinho" },
    "MG": { "en": "Madagascar", "lanBR": "Madagáscar" },
    "MH": { "en": "Marshall Islands", "lanBR": "Ilhas Marshall" },
    "MK": { "en": "North Macedonia", "lanBR": "Macedônia do Norte" },
    "ML": { "en": "Mali", "lanBR": "Mali" },
    "MM": { "en": "Myanmar", "lanBR": "Myanmar" },
    "MN": { "en": "Mongolia", "lanBR": "Mongólia" },
    "MO": { "en": "Macao", "lanBR": "Macau" },
    "MP": { "en": "Northern Mariana Islands", "lanBR": "Ilhas Marianas do Norte" },
    //"MQ": { "en": "Martinique", "lanBR": "Martinica" },
    "MR": { "en": "Mauritania", "lanBR": "Mauritânia" },
    "MS": { "en": "Montserrat", "lanBR": "Montserrat" },
    "MT": { "en": "Malta", "lanBR": "Malta" },
    "MU": { "en": "Mauritius", "lanBR": "Maurício" },
    "MV": { "en": "Maldives", "lanBR": "Maldivas" },
    "MW": { "en": "Malawi", "lanBR": "Malawi" },
    "MX": { "en": "Mexico", "lanBR": "México" },
    "MY": { "en": "Malaysia", "lanBR": "Malásia" },
    "MZ": { "en": "Mozambique", "lanBR": "Moçambique" },
    "NA": { "en": "Namibia", "lanBR": "Namíbia" },
    //"NC": { "en": "New Caledonia", "lanBR": "Nova Caledônia" },
    "NE": { "en": "Niger", "lanBR": "Níger" },
    "NF": { "en": "Norfolk Island", "lanBR": "Ilha Norfolk" },
    "NG": { "en": "Nigeria", "lanBR": "Nigéria" },
    "NI": { "en": "Nicaragua", "lanBR": "Nicarágua" },
    "NL": { "en": "Netherlands", "lanBR": "Países Baixos" },
    "NO": { "en": "Norway", "lanBR": "Noruega" },
    "NP": { "en": "Nepal", "lanBR": "Nepal" },
    "NR": { "en": "Nauru", "lanBR": "Nauru" },
    "NU": { "en": "Niue", "lanBR": "Niue" },
    "NZ": { "en": "New Zealand", "lanBR": "Nova Zelândia" },
    "OM": { "en": "Oman", "lanBR": "Omã" },
    "PA": { "en": "Panama", "lanBR": "Panamá" },
    "PE": { "en": "Peru", "lanBR": "Peru" },
    "PF": { "en": "French Polynesia", "lanBR": "Polinésia Francesa" },
    "PG": { "en": "Papua New Guinea", "lanBR": "Papua Nova Guiné" },
    "PH": { "en": "Philippines", "lanBR": "Filipinas" },
    "PK": { "en": "Pakistan", "lanBR": "Paquistão" },
    "PL": { "en": "Poland", "lanBR": "Polônia" },
    //"PM": { "en": "Saint Pierre and Miquelon", "lanBR": "Saint Pierre e Miquelon" },
    "PN": { "en": "Pitcairn", "lanBR": "Pitcairn" },
    "PR": { "en": "Puerto Rico", "lanBR": "Porto Rico" },
    "PS": { "en": "Palestine", "lanBR": "Palestina" },
    "PT": { "en": "Portugal", "lanBR": "Portugal" },
    "PW": { "en": "Palau", "lanBR": "Palau" },
    "PY": { "en": "Paraguay", "lanBR": "Paraguai" },
    "QA": { "en": "Qatar", "lanBR": "Catar" },
    //"RE": { "en": "Réunion", "lanBR": "Reunião" },
    "RO": { "en": "Romania", "lanBR": "Romênia" },
    "RS": { "en": "Serbia", "lanBR": "Sérvia" },
    "RU": { "en": "Russian Federation", "lanBR": "Federação Russa" },
    "RW": { "en": "Rwanda", "lanBR": "Ruanda" },
    "SA": { "en": "Saudi Arabia", "lanBR": "Arábia Saudita" },
    "SB": { "en": "Solomon Islands", "lanBR": "Ilhas Salomão" },
    "SC": { "en": "Seychelles", "lanBR": "Seychelles" },
    "SD": { "en": "Sudan", "lanBR": "Sudão" },
    "SE": { "en": "Sweden", "lanBR": "Suécia" },
    "SG": { "en": "Singapore", "lanBR": "Singapura" },
    "SH": { "en": "Saint Helena, Ascension and Tristan da Cunha", "lanBR": "Santa Helena, Ascensão e Tristão da Cunha" },
    "SI": { "en": "Slovenia", "lanBR": "Eslovênia" },
    "SJ": { "en": "Svalbard and Jan Mayen Islands", "lanBR": "Ilhas Svalbard e Jan Mayen" },
    "SK": { "en": "Slovakia", "lanBR": "Eslováquia" },
    "SL": { "en": "Sierra Leone", "lanBR": "Serra Leoa" },
    "SM": { "en": "San Marino", "lanBR": "San Marino" },
    "SN": { "en": "Senegal", "lanBR": "Senegal" },
    "SO": { "en": "Somalia", "lanBR": "Somália" },
    "SR": { "en": "Suriname", "lanBR": "Suriname" },
    "SS": { "en": "South Sudan", "lanBR": "Sudão do Sul" },
    "ST": { "en": "Sao Tome and Principe", "lanBR": "São Tomé e Príncipe" },
    "SV": { "en": "El Salvador", "lanBR": "El Salvador" },
    "SX": { "en": "Sint Maarten (Dutch part)", "lanBR": "São Martinho (parte holandesa)" },
    "SY": { "en": "Syrian Arab Republic", "lanBR": "República Árabe da Síria" },
    "SZ": { "en": "Swaziland", "lanBR": "Suazilândia" },
    "TC": { "en": "Turks and Caicos Islands", "lanBR": "Ilhas Turks e Caicos" },
    "TD": { "en": "Chad", "lanBR": "Chade" },
    "TF": { "en": "French Southern Territories", "lanBR": "Territórios Franceses do Sul" },
    "TG": { "en": "Togo", "lanBR": "Togo" },
    "TH": { "en": "Thailand", "lanBR": "Tailândia" },
    "TJ": { "en": "Tajikistan", "lanBR": "Tajiquistão" },
    "TK": { "en": "Tokelau", "lanBR": "Tokelau" },
    "TL": { "en": "Timor-Leste", "lanBR": "Timor-Leste" },
    "TM": { "en": "Turkmenistan", "lanBR": "Turcomenistão" },
    "TN": { "en": "Tunisia", "lanBR": "Tunísia" },
    "TO": { "en": "Tonga", "lanBR": "Tonga" },
    "TR": { "en": "Turkey", "lanBR": "Turquia" },
    "TT": { "en": "Trinidad and Tobago", "lanBR": "Trinidad e Tobago" },
    "TV": { "en": "Tuvalu", "lanBR": "Tuvalu" },
    "TW": { "en": "Taiwan, Province of China", "lanBR": "Taiwan, Província da China" },
    "TZ": { "en": "Tanzania, United Republic of", "lanBR": "Tanzânia, República Unida da" },
    "UA": { "en": "Ukraine", "lanBR": "Ucrânia" },
    "UG": { "en": "Uganda", "lanBR": "Uganda" },
    //"UM": { "en": "United States Minor Outlying Islands", "lanBR": "Ilhas Menores Distantes dos Estados Unidos" },
    "US": { "en": "United States", "lanBR": "Estados Unidos" },
    "UY": { "en": "Uruguay", "lanBR": "Uruguai" },
    "UZ": { "en": "Uzbekistan", "lanBR": "Uzbequistão" },
    "VA": { "en": "Vatican City State", "lanBR": "Cidade do Vaticano" },
    "VC": { "en": "Saint Vincent and the Grenadines", "lanBR": "São Vicente e Granadinas" },
    "VE": { "en": "Venezuela, Bolivarian Republic of", "lanBR": "Venezuela, República Bolivariana da" },
    "VG": { "en": "British Virgin Islands", "lanBR": "Ilhas Virgens Britânicas" },
    "VI": { "en": "U.S. Virgin Islands", "lanBR": "Ilhas Virgens Americanas" },
    "VN": { "en": "Vietnam", "lanBR": "Vietnã" },
    "VU": { "en": "Vanuatu", "lanBR": "Vanuatu" },
    "WF": { "en": "Wallis and Futuna Islands", "lanBR": "Wallis e Futuna" },
    "WS": { "en": "Samoa", "lanBR": "Samoa" },
    "YE": { "en": "Yemen", "lanBR": "Iêmen" },
    //"YT": { "en": "Mayotte", "lanBR": "Mayotte" },
    "ZA": { "en": "South Africa", "lanBR": "África do Sul" },
    "ZM": { "en": "Zambia", "lanBR": "Zâmbia" },
    "ZW": { "en": "Zimbabwe", "lanBR": "Zimbábue" }
};

const hitSound = new Audio("src/hit.wav");
const hitNoScoreSound = new Audio("src/hitNoScore.wav");
hitNoScoreSound.volume = 0.3;
const scoreSound = new Audio("src/score.wav");
const scoreSound2 = new Audio("src/score2.wav");
const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const paddle1Color = "lightblue";
const paddle2Color = "red";
const paddleBorder = "black";
const ballColor = "yellow";
const ballBorderColor = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let gameWidth = gameBoard.width;
let gameHeight = gameBoard.height;
let pause = true;
let language = "en";
let intervalID;
let ballSpeed;
let ballX = gameWidth / 2;
let ballY = gameHeight / 2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let play = "PLAY";
let player = "PLAYER";
let specialMode = false;
let canBeMobile = false;
let sound = true;

let paddle1 = {
    width: 70,
    height: 100,
    x: 0,
    y: 0
};
let paddle2 = {
    width: 70,
    height: 100,
    x: gameWidth - 70,
    y: gameHeight - 100
};

teams.forEach(function (newClub) {
    const club = document.createElement("button")
    const classe = document.createElement("style")

    document.head.appendChild(classe)
    document.getElementById("startMenu").appendChild(club)

    club.textContent = newClub
    club.classList = "teams"
    club.id = newClub

    classe.sheet.insertRule("." + newClub + " { background-image: url(src/times/" + newClub + ".svg);}")

    document.getElementById(newClub).style = "background-image: url(src/times/" + newClub + ".svg); background-size: cover;"
});

function goTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

const playerOPT = document.querySelectorAll(".teams");

let name = "";
let player1IMG = new Image();
let player2IMG = new Image();

playerOPT.forEach(function (playerOPT) {
    playerOPT.addEventListener("click", function () {
        name = playerOPT.textContent.trim()
        teamPicker()
    })
});

let itakeNames = "";

function teamPicker() {
    if (document.getElementById("chooseTeam").textContent == player + " 1") {
        player1IMG.src = "src/times/" + name + ".svg"
        document.getElementById("chooseTeam").textContent = player + " 2"

        switch (language) {
            case "en":
                itakeNames += nameFlags[name].en + " X "
                break;
            case "lanBR":
                itakeNames += nameFlags[name].lanBR + " X "
                break;
        };

        switch (name) {
            case "rd":
                pl = player1IMG
                randomPicker()
                break;
        };
    } else {
        player2IMG.src = "src/times/" + name + ".svg"
        document.getElementById("startMenu").classList.add("hidden")
        document.getElementById("gameContainer").classList.remove("hidden")
        document.body.style = "overflow: hidden;"
        switch (language) {
            case "en":
                itakeNames += nameFlags[name].en
                break;
            case "lanBR":
                itakeNames += nameFlags[name].lanBR
                break;
        };
        switch (name) {
            case "rd":
                pl = player2IMG
                randomPicker()
                break;
        };
        document.getElementById("pausetBtn").classList.add("block")
        drawPaddles()
        gameStart()
        setTimeout(function () {
            document.getElementById("iTake").textContent = play
            pause = false
            canBeMobile = true
            userScreenSize()
            setTimeout(function () {
                document.getElementById("iTake").textContent = ""
                document.getElementById("pausetBtn").classList.remove("block")
            }, 1500)
        }, 2000)
    };

    document.getElementById("iTake").textContent = itakeNames
};

function randomPicker() {
    al = (teams[Math.floor(Math.random() * teams.length)])
    if (al === undefined) {
        randomPicker()
    }
    pl.src = "src/times/" + al + ".svg"
};

function userScreenSize() {
    if (specialMode == true) {
        return;
    };

    var userWidth = window.innerWidth * 0.7;
    var userHeight = window.innerHeight * 0.7;

    document.getElementById("line").style.height = userHeight + "px"

    if (userWidth >= 1200) {
        userWidth = 1200
    };

    if (userHeight >= 1200) {
        userHeight = 1200
    };

    if (window.innerHeight <= 420) {
        document.getElementById("pausetBtn").style = "font-size: xx-small;"
        userHeight = window.innerHeight * 0.9
        document.getElementById("line").style.height = userHeight + "px"
        document.body.style = "font-size: x-small;"
        
        switch (canBeMobile) {
            case true:
                document.getElementById("mobileControls").classList.remove("hidden")
                break;
        };

    } else {
        document.getElementById("pausetBtn").style = "font-size: x-large;"
        userHeight = window.innerHeight * 0.7;
        document.getElementById("line").style.height = userHeight + "px"
        document.getElementById("mobileControls").classList.add("hidden")
        document.body.style = "font-size: medium;"
    };

    SmallScreen = userWidth + userHeight

    gameBoard.style.width = userWidth + "px"
    gameBoard.style.height = userHeight + "px"

    gameBoard.width = userWidth
    gameBoard.height = userHeight

    ctx.canvas.width = userWidth
    ctx.canvas.height = userHeight

    gameWidth = gameBoard.width
    gameHeight = gameBoard.height

    paddle1 = {
        width: 70,
        height: 100,
        x: 0,
        y: 0
    };

    paddle2 = {
        width: 70,
        height: 100,
        x: gameWidth - 70,
        y: gameHeight - 100
    };

    if (SmallScreen <= 1500) {
        paddle1 = {
            width: 50,
            height: 80,
            x: 0,
            y: 0
        };

        paddle2 = {
            width: 50,
            height: 80,
            x: gameWidth - 50,
            y: gameHeight - 80
        };
    };

    paddle1.x = Math.min(Math.max(paddle1.x, 0), gameWidth - paddle1.width)
    paddle1.y = Math.min(Math.max(paddle1.y, 0), gameHeight - paddle1.height)

    paddle2.x = Math.min(Math.max(paddle2.x, 0), gameWidth - paddle2.width)
    paddle2.y = Math.min(Math.max(paddle2.y, 0), gameHeight - paddle2.height)

    drawPaddles();
}

window.addEventListener("load", userScreenSize)
window.addEventListener("resize", userScreenSize)

window.addEventListener("keydown", changeDirection)

function gameStart() {
    createBall();
    nextTick();
};

function nextTick() {
    intervalID = setTimeout(() => {
        nextTick();
        if (pause == true) {
            return;
        };
        console.log(ballSpeed)
        clearBoard()
        drawPaddles()
        moveBall()
        drawBall(ballX, ballY)
        checkCollision()

    }, 10)
};

function clearBoard() {
    ctx.fillRect(0, 0, gameWidth, gameHeight)
};

function drawPaddles() {
    ctx.clearRect(0, 0, gameBoard.width, gameBoard.height)

    ctx.strokeStyle = paddleBorder

    ctx.fillStyle = paddle1Color
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height)
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height)

    ctx.fillStyle = paddle2Color
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height)
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height)

    ctx.save()

    ctx.translate(paddle1.x + paddle1.width / 2, paddle1.y + paddle1.height / 2)
    ctx.rotate(Math.PI / 2)
    ctx.drawImage(player1IMG, -paddle1.height / 2, -paddle1.width / 2, paddle1.height, paddle1.width)

    ctx.restore()

    ctx.save()

    ctx.translate(paddle2.x + paddle2.width / 2, paddle2.y + paddle2.height / 2)
    ctx.rotate(-Math.PI / 2)
    ctx.drawImage(player2IMG, -paddle2.height / 2, -paddle2.width / 2, paddle2.height, paddle2.width)

    ctx.restore()
};

function createBall() {
    ballSpeed = 0.5;
    if (Math.round(Math.random()) == 1) {
        ballXDirection = 1
    }
    else {
        ballXDirection = -1
    };
    if (Math.round(Math.random()) == 1) {
        ballYDirection = Math.random() * 1
    }
    else {
        ballYDirection = Math.random() * -1
    };
    ballX = gameWidth / 2
    ballY = gameHeight / 2
    drawBall(ballX, ballY)
};

function moveBall() {
    if (pause == true) {
        return;
    };
    ballX += (ballSpeed * ballXDirection)
    ballY += (ballSpeed * ballYDirection)
};

function drawBall(ballX, ballY) {
    ctx.fillStyle = ballColor
    ctx.strokeStyle = ballBorderColor
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.fill()
};

function checkCollision() {
    if (ballY <= 0 + ballRadius) {
        ballYDirection *= -1
        hitNoScoreSound.play()
    };
    if (ballY >= gameHeight - ballRadius) {
        ballYDirection *= -1
        hitNoScoreSound.play()
    };

    if (ballX <= 0) {
        player2Score += 1
        updateScore()
        createBall()
        scoreSound2.play()

        if (specialMode === true) {
            scoreSound2.play()
            player1Score = 0;
            player2Score = 0;
            updateScore()
        }
        return;
    };
    if (ballX >= gameWidth) {
        player1Score += 1
        updateScore()
        createBall()
        scoreSound.play()
        return;
    };
    if (ballX <= (paddle1.x + paddle1.width + ballRadius)) {
        if (ballY > paddle1.y && ballY < paddle1.y + paddle1.height) {
            ballX = (paddle1.x + paddle1.width) + ballRadius
            ballXDirection *= -1
            ballSpeed += 0.5
            hitSound.play()
        };
    };

    if (ballX >= (paddle2.x - ballRadius)) {
        if (ballY > paddle2.y && ballY < paddle2.y + paddle2.height) {
            ballX = paddle2.x - ballRadius
            ballXDirection *= -1
            ballSpeed += 0.5
            hitSound.play()
        };

        if (specialMode === true) {
            scoreSound.play()
            player1Score += 1;
            updateScore()
        };
    };
};

function changeDirection(event) {
    const keyPressed = event.keyCode
    const paddle1Up = 87
    const paddle1Down = 83
    const paddle2Up = 38
    const paddle2Down = 40

    if (pause == true) {
        return;
    };

    switch (keyPressed) {
        case (paddle1Up):
            paddle1.y = Math.max(paddle1.y - paddleSpeed, 0)
            break;
        case (paddle1Down):
            paddle1.y = Math.min(paddle1.y + paddleSpeed, gameHeight - paddle1.height)
            break;
        case (paddle2Up):
            paddle2.y = Math.max(paddle2.y - paddleSpeed, 0)
            break;
        case (paddle2Down):
            paddle2.y = Math.min(paddle2.y + paddleSpeed, gameHeight - paddle2.height)
            break;
    };
    drawPaddles();
}

function changeDirectionMobile(event) {
    var buttonPressed = event.target.id;

    if (pause == true) {
        return;
    };

    switch (buttonPressed) {
        case "mobUP":
            paddle1.y = Math.max(paddle1.y - paddleSpeed, 0)
            break;
        case "mobDW":
            paddle1.y = Math.min(paddle1.y + paddleSpeed, gameHeight - paddle1.height)
            break;
        case "mobUP2":
            paddle2.y = Math.max(paddle2.y - paddleSpeed, 0)
            break;
        case "mobDW2":
            paddle2.y = Math.min(paddle2.y + paddleSpeed, gameHeight - paddle2.height)
            break;
    };
};

function updateScore() {
    document.getElementById("score1").textContent = player1Score
    document.getElementById("score2").textContent = player2Score

    const score1 = document.getElementById("score1");
    const score2 = document.getElementById("score2");

    score1.classList.remove("winning", "losing", "draw")
    score2.classList.remove("winning", "losing", "draw")

    if (player1Score > player2Score) {
        score1.classList.add("winning")
        score2.classList.add("losing")
    } else if (player2Score > player1Score) {
        score1.classList.add("losing")
        score2.classList.add("winning")
    } else {
        score1.classList.add("draw")
        score2.classList.add("draw")
    };
};

function pauseGame() {
    pause = true
    document.getElementById("gameContainer").classList.toggle("pausedGame")
    document.getElementById("pausetBtn").classList.toggle("hidden")
    document.getElementById("pauseMenu").classList.toggle("hidden")
};

function changeDirectionMobile(event) {
    var buttonPressed = event.target.id;

    if (pause == true) {
        return;
    };

    switch (buttonPressed) {
        case "mobUP":
            paddle1.y = Math.max(paddle1.y - paddleSpeed, 0)
            break;
        case "mobDW":
            paddle1.y = Math.min(paddle1.y + paddleSpeed, gameHeight - paddle1.height)
            break;
        case "mobUP2":
            paddle2.y = Math.max(paddle2.y - paddleSpeed, 0)
            break;
        case "mobDW2":
            paddle2.y = Math.min(paddle2.y + paddleSpeed, gameHeight - paddle2.height)
            break;
    };
};

function resetGame() {
    player1Score = 0
    player2Score = 0
    ballSpeed = 0.5
    ballX = 0
    ballY = 0
    ballXDirection = 0
    ballYDirection = 0
    updateScore()
    clearInterval(intervalID)
    gameStart()
    userScreenSize()
};

function functionsFromMenu(event) {
    optionTake = event.target.id

    switch (optionTake) {
        case "CONTINUE": {
            pause = false
            document.getElementById("gameContainer").classList.toggle("pausedGame")
            document.getElementById("pausetBtn").classList.toggle("hidden")
            document.getElementById("pauseMenu").classList.toggle("hidden")
            break;
        };
        case "RESTART":
            specialMode = false
            resetGame()
            break;
        case "TEAMS":
            location.reload()
            break;
        case "MOBILE":
            document.getElementById("mobileControls").classList.toggle("hidden")
            document.getElementById("mobUP").textContent = "↑"
            document.getElementById("mobDW").textContent = "↓"
            document.getElementById("mobUP2").textContent = "↑"
            document.getElementById("mobDW2").textContent = "↓"
            break;
        case "HELP":
            document.getElementById("help").classList.toggle("hidden")
            break;
        case "soundVolume":
            if (sound == true) {
                sound = false
                hitSound.volume = 0.0
                hitNoScoreSound.volume = 0.0;
                scoreSound.volume = 0.0
                scoreSound2.volume = 0.0
                document.getElementById("soundVolume").textContent = "🔈"
            } else {
                sound = true
                hitSound.volume = 1
                hitNoScoreSound.volume = 0.3
                scoreSound.volume = 1
                scoreSound2.volume = 1
                document.getElementById("soundVolume").textContent = "🔊"
            }
            break;
        case "CREDITS":
            document.getElementById("CREDITS").style = "font-family: monospace;"
            document.getElementById("CREDITS").innerHTML = ("@paulo_henriquap + @BroCodez")
            break;
        case "br":
            document.getElementById("CONTINUE").textContent = "CONTINUAR"
            document.getElementById("RESTART").textContent = "REINICIAR"
            document.getElementById("TEAMS").textContent = "TIMES"
            document.getElementById("LANGUAGES").textContent = "IDIOMA:"
            document.getElementById("HELP").textContent = "AJUDA"
            document.getElementById("WALLmode").textContent = "MODO PAREDE"
            document.getElementById("boardColor").textContent = "CAMPO"
            document.getElementById("CREDITS").textContent = "CRÉDITOS"
            language = "lanBR"
            itakeNames = ""
            document.getElementById("help").innerHTML = "<p>PLAYER 1: Pressione <strong>W</strong> para mover para cima e <strong>S</strong> para mover para baixo.</p>" +
                "<p>PLAYER 2: Use a tecla <strong>Seta para cima</strong> para mover para cima e a tecla <strong>Seta para baixo</strong> para mover para baixo.</p>" +
                "<p>Marque pontos fazendo a bola atingir a parede do seu oponente.</p>" +
                "<p>Você pode configurar botões virtuais em <strong>MOBILE</strong>.</p>"
            break;
        case "en":
            document.getElementById("CONTINUE").textContent = "CONTINUE"
            document.getElementById("RESTART").textContent = "RESTART"
            document.getElementById("TEAMS").textContent = "TEAMS"
            document.getElementById("LANGUAGES").textContent = "LANGUAGE:"
            document.getElementById("HELP").textContent = "HELP"
            document.getElementById("WALLmode").textContent = "WALL MODE"
            document.getElementById("boardColor").textContent = "BOARD"
            document.getElementById("CREDITS").textContent = "CREDITS"
            language = "en"
            itakeNames = ""
            document.getElementById("help").innerHTML = "<p>PLAYER 1: Press <strong>W</strong> to move up and <strong>S</strong> to move down.</p>" +
                "<p>PLAYER 2: Use <strong>ArrowUp</strong> to move up and <strong>ArrowDown</strong> to move down.</p>" +
                "<p>Score points by getting the ball to hit your opponent's wall.</p>" +
                "<p>You can set up virtual buttons for <strong>MOBILE</strong> devices.</p>"
            break;
        case "greB":
            gameBoard.style = "background-color: #358626;"
            break;
        case "whiB":
            gameBoard.style = "background-color: #FBFBFB;"
            break;
        case "redB":
            gameBoard.style = "background-color: darkred;"
            break;
        case "blaB":
            gameBoard.style = "background-color: #151419;"
            break;
        case "oraB":
            gameBoard.style = "background-color: #F56E0F;"
            break;
        case "purB":
            gameBoard.style = "background-color: #9a009a;"
            break;
        case "ranB":
            gameBoard.style = "background-color: rgb(" + finalColor + ")"
            randomColors()
            break;
        case "WALLmode":
            resetGame()
            paddle2 = {
                width: 2,
                height: 1200,
                x: gameWidth - 2,
                y: gameHeight - 1200
            };
            specialMode = true
            document.getElementById("mobUP2").textContent = ""
            document.getElementById("mobDW2").textContent = ""
            break;
    };
};

switch (userLanguage) {
    case "pt-BR":
        play = "JOGUEM!"
        player = "JOGADOR"
        document.getElementById("chooseTeam").textContent = "JOGADOR 1"
        document.getElementById("CONTINUE").textContent = "CONTINUAR"
        document.getElementById("RESTART").textContent = "REINICIAR"
        document.getElementById("TEAMS").textContent = "TIMES"
        document.getElementById("LANGUAGES").textContent = "IDIOMA:"
        document.getElementById("HELP").textContent = "AJUDA"
        document.getElementById("WALLmode").textContent = "MODO PAREDE"
        document.getElementById("boardColor").textContent = "CAMPO"
        document.getElementById("CREDITS").textContent = "créditos"
        language = "lanBR"
        itakeNames = ""
        document.getElementById("help").innerHTML = "<p>PLAYER 1: Pressione <strong>W</strong> para mover para cima e <strong>S</strong> para mover para baixo.</p>" +
            "<p>PLAYER 2: Use a tecla <strong>Seta para cima</strong> para mover para cima e a tecla <strong>Seta para baixo</strong> para mover para baixo.</p>" +
            "<p>Marque pontos fazendo a bola atingir a parede do seu oponente.</p>" +
            "<p>Você pode configurar botões virtuais em <strong>MOBILE</strong>.</p>"
        break;
    default:
        play = "PLAY!"
        player = "PLAYER"
        document.getElementById("CONTINUE").textContent = "CONTINUE"
        document.getElementById("RESTART").textContent = "RESTART"
        document.getElementById("TEAMS").textContent = "TEAMS"
        document.getElementById("LANGUAGES").textContent = "LANGUAGE:"
        document.getElementById("HELP").textContent = "HELP"
        document.getElementById("WALLmode").textContent = "WALL MODE"
        document.getElementById("boardColor").textContent = "BOARD"
        document.getElementById("CREDITS").textContent = "credits"
        language = "en"
        itakeNames = ""
        document.getElementById("help").innerHTML = "<p>PLAYER 1: Press <strong>W</strong> to move up and <strong>S</strong> to move down.</p>" +
            "<p>PLAYER 2: Use <strong>ArrowUp</strong> to move up and <strong>ArrowDown</strong> to move down.</p>" +
            "<p>Score points by getting the ball to hit your opponent's wall.</p>" +
            "<p>You can set up virtual buttons for <strong>MOBILE</strong> devices.</p>"

        break;
};

let R = (Math.floor(Math.random() * 256));
let G = (Math.floor(Math.random() * 256));
let B = (Math.floor(Math.random() * 256));
let finalColor = R + "," + G + "," + B;

function randomColors() {
    R = (Math.floor(Math.random() * 256))
    G = (Math.floor(Math.random() * 256))
    B = (Math.floor(Math.random() * 256))
    finalColor = R + "," + G + "," + B

    document.getElementById("ranB").style = "background-color: rgb(" + finalColor + ")"
};

randomColors();