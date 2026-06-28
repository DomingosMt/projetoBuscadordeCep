const dados = document.getElementById("dados");

function pesquisacep(event) {
  event.preventDefault();

  const urlAPI = `https://viacep.com.br/ws/${cep.value}/json/`;

  fetch(urlAPI)
    .then((response) => {
      if (!response.ok) throw new Error("Erro na requisição");
      return response.json();
    })
    .then((data) => {
      dados.innerHTML = `
        <div
            class="grid grid-rows-2 grid-cols-2 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-200 bg-"
          >
            <div class="grid gap-2 mt-2 text-slate-800 font-semibold">
              <label>CEP</label>
              <span class="mt-2 text-slate-600 shadow-md border border-black p-1 rounded-md">${data.cep}</span>
            </div>

            <div class="grid gap-2 mt-2 text-slate-800 font-semibold">
              <label>Logradouro</label>
              <span class="mt-2 text-slate-600 shadow-md border border-black p-1 rounded-md">${data.logradouro}</span>
            </div>
            
            <div class="grid gap-2 mt-2 text-slate-800 font-semibold">
              <label>Bairro</label>
              <span class="mt-2 text-slate-600 shadow-md border border-black p-1 rounded-md">${data.bairro}</span>
            </div>
            
            <div class="grid gap-2 mt-2 text-slate-800 font-semibold">
              <label>Localidade</label>
              <span class="mt-2 text-slate-600 shadow-md border border-black p-1 rounded-md">${data.localidade}</span>
            </div>
            
            <div class="grid gap-2 mt-2 text-slate-800 font-semibold">
              <label>UF</label>
              <span class="mt-2 text-slate-600 shadow-md border border-black p-1 rounded-md">${data.uf} - ${data.estado}</span>
            </div>
          </div>

          <div onclick="novaConsulta()" class="flex justify-center mt-8">
            <button class="rounded-2xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700 active:scale-[0.99]">
                Fazer outra consulta
            </button>  
          </div>
    `;
    })
    .catch((error) => console.error("Erro:", error));
}

function novaConsulta() {
  window.location.href = "index.html";
}