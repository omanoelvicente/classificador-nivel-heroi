function levelHero()
{
    let textHero = ""
    let nameHero = prompt("Escreva o nome do herói.", "");
    let xpHero = prompt("Entre com o nível de XP", "");

    if (xpHero <= 1000) {
        textHero = "Ferro";
    } else if ((xpHero > 1000) && (xpHero <= 2000)) {
        textHero = "Bronze";
    } else if ((xpHero > 2000) && (xpHero <= 5000)) {
        textHero = "Prata";
    } else if ((xpHero > 5000) && (xpHero <= 7000)) {
        textHero = "Ouro"
    } else if ((xpHero > 7000) && (xpHero <= 8000)) {
        textHero = "Platina";
    } else if ((xpHero > 8000) && (xpHero <= 9000)) {
        textHero = "Ascendente";
    } else if ((xpHero > 9000) && (xpHero <= 10000)) {
        textHero = "Imortal";
    } else {
        textHero = "Radiante";
    }
    alert(`O herói de nome ${nameHero} está no nível ${textHero}!`);
}
