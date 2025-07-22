const InputField = ({ label, value, setValue, type = "text" }) => (
    <div className='my-4'>
      <label className='text-xl mr-4 text-gray-500'>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className='border-2 border-gray-500 px-4 py-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500'
      />
    </div>
  );

  export default InputField