function Usuari(nom, cognom, edat) {
    this.nom = nom;
    this.cognom = cognom;
    this.edat = edat;
}

Usuari.prototype.mostrarInfo = function() {
    return `Nom: ${this.nom}<br>Cognom: ${this.cognom}<br>Edat: ${this.edat}`;
};

document.getElementById("guardar-dades").addEventListener("click", function() {
    const nom = document.getElementById("nom").value;
    const cognom = document.getElementById("cognom").value;
    const edat = document.getElementById("edat").value;

   window.usuari = new Usuari(nom, cognom, edat);

    document.getElementById("nom").value = "";
    document.getElementById("cognom").value = "";
    document.getElementById("edat").value = "";
});

document.getElementById("mostrar-dades").addEventListener("click", function() {
    if (window.usuari) {
        const infoDades = document.getElementById("info-dades");
        infoDades.innerHTML = window.usuari.mostrarInfo();
    } else {
        alert("Primer, introdueix les teves dades i fes clic a 'Guardar Dades'.");
    }
});
