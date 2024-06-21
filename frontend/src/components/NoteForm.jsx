const NoteForm = ({ onSubmit, handleChange, value }) => {
  return (
    <div>
      <h2>Create a new note</h2>

      <form onSubmit={onSubmit}>
        <input value={value} onChange={handleChange} />
        <button>save</button>
      </form>
    </div>
  );
};

export default NoteForm;
// The NoteForm component is a form that can be used to create new notes. The form has an input field for the note content and a button that can be used to submit the form. The component receives the following props: onSubmit, handleChange, and value. The onSubmit prop is a function that is called when the form is submitted. The handleChange prop is a function that is called when the input field value changes. The value prop is the value of the input field. The component uses these props to handle form submission and input field changes.
