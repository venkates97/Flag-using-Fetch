var cont = document.createElement("div");
cont.className = "container";

var row = document.createElement("div");
row.className = "row card-group";

var fetchData = fetch("https://restcountries.com/v3.1/all");
fetchData.then((data) => data.json()).then((data) => createDetails(data));

function createDetails(elements) {
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        var coloum = document.createElement("div");
        coloum.className = "col-md-4";
        coloum.innerHTML = `
        <div class="card">
    <img src=${elements[i].flags.png} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"><b>Country :<b>${elements[i].name.common}</h5>
      <p class="card-text">Capital :${elements[i].capital[0]}</p>
    </div>
  </div>
        `;

        row.append(coloum);
        cont.append(row);
        document.body.append(cont);
    }
}