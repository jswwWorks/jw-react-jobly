import { useState } from "react";

/**
 *  SearchForm lets user search for some information by showing a form that
 *  processes a user-input search term.
 *
 *  Props:
 *    - onSubmit, a callback function that takes the string of the search term
 *
 *  States:
 *    - formData, a string
 *
 *  Renders:
 *    - {Joblist, CompanyList} -> SearchForm
 *
 */
function SearchForm({ onSubmit }) {
  console.log("SearchForm rendered, onSubmit prop:", onSubmit);

  const [formData, setFormData] = useState("");

  console.log("searchForm formData:", formData);

  function handleChange(evt){
    setFormData(evt.target.value);
  }

  function handleSubmit(evt){
    evt.preventDefault();
    onSubmit(formData);
    setFormData("");
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        id="search-field"
        value={formData}
        onChange={handleChange}
        placeholder="Enter search term..."
      />
      <button>Submit</button>
    </form>
  );
}

export default SearchForm;