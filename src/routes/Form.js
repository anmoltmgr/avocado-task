import FormComponent from "./../Components/FormComponent";
export default function Form() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Form</h2>
      <FormComponent type="Add Entry" tableName="Add Entry Table" />
    </main>
  );
}
