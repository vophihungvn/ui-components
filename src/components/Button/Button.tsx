import "./Button.css";

const Button = (props: any) => {
  return (
    <button
      // onClick={submitFailure}
      type="button"
      className="inline-flex mt-4 uppercase tracking-widest items-center px-4 py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      <span className="mr-auto">Submit</span>
    </button>
  );
};

export { Button };
