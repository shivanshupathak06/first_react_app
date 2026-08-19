import { useState } from "react";

function UseForm() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);

    try {
      // Simulate an async API call (e.g., fetch request)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      // Re-enable the button after the async operation completes
      setPending(false);
    }
  };

  return (
    <div>
      <h1>Form Handling with useState</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Enter Name" />
          <br />
          <br />
          <input type="password" placeholder="Enter Password" />
          <br />
          <br />
          <button type="submit" disabled={pending}>
            {pending ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UseForm;