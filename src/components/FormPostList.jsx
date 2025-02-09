import React from "react";

export default function FormPostList({
  formData,
  handlerSubmitFormData,
  handlerFormData,
  deleteList,
}) {
  return (
    <form onSubmit={handlerSubmitFormData}>
      <button type="button" onClick={deleteList}>
        Svuota ricettario
      </button>

      <label htmlFor="postTitolo">Titolo*</label>
      <input
        id="postTitolo"
        type="text"
        placeholder="..."
        value={formData.titolo}
        required
        onChange={(event) => {
          handlerFormData("titolo", event.target.value);
        }}
      />

      <label htmlFor="postContenuto">Contenuto*</label>
      <input
        id="postContenuto"
        type="text"
        placeholder="..."
        value={formData.contenuto}
        required
        onChange={(event) => {
          handlerFormData("contenuto", event.target.value);
        }}
      />

      <label htmlFor="postImmagine">Immagine</label>
      <input
        id="postImmagine"
        type="text"
        placeholder="..."
        value={formData.immagine}
        // required
        onChange={(event) => {
          handlerFormData("immagine", event.target.value);
        }}
      />

      <label htmlFor="postDifficoltà">Difficoltà</label>
      <select
        name="postDifficoltà"
        id="postDifficoltà"
        // required
        value={formData.difficoltà}
        onChange={(event) => {
          handlerFormData("difficoltà", event.target.value);
        }}
      >
        <option value="" hidden>
          Seleziona un opzione
        </option>
        <option value="😏">Bassa</option>
        <option value="😏🥴">Media</option>
        <option value="😏🥴🤯">Elevata</option>
      </select>

      <label htmlFor="postTempistiche">Tempistiche</label>
      <select
        name="postTempistiche"
        id="postTempistiche"
        // required
        value={formData.tempistiche}
        onChange={(event) => {
          handlerFormData("tempistiche", event.target.value);
        }}
      >
        <option value="" hidden>
          Seleziona un opzione
        </option>
        <option value="⏲️">Meno di un'ora</option>
        <option value="🕝⏲️">Diverse ore</option>
        <option value="🗓️🕝⏲️">Giorni</option>
      </select>

      <div>
        <label htmlFor="postDellaTradizione">Ricetta tradizionale</label>
        <input
          id="postDellaTradizione"
          type="checkbox"
          checked={formData.dellaTradizione}
          onChange={(event) => {
            handlerFormData("dellaTradizione", event.target.checked);
          }}
        />
      </div>

      <button type="submit">
        <strong>+</strong> Aggiungi Ricetta
      </button>
    </form>
  );
}
