import React, {useState, useEffect} from 'react';

// Files created or added manually (with no package dependencies)
import { EmailInterface } from '../interface';

const Login = () => {

  const [formFields, setFormFields] = useState<EmailInterface>({
    username: '',
    email: ''
  });

  const handleOnsubmit = (e : any) => {
    e.preventDefault();
    console.log('handleOnsubmit :)');
  };

  return (
    <div
      className="px-2 py-6 flex flex-col justify-center gap-y-3 h-screen md:px-6"
    >
      <h1
        className="text-2xl text-secondary font-bold uppercase  text-center md:text-3xl"
      >
        Please login to find your perfect partner
      </h1>

      <form
        action=""
        onSubmit={(e : any) => handleOnsubmit(e)}
        className="flex flex-col gap-y-9 bg-primary rounded-lg p-3"
      >
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="username"
            className="text-[16px] font-bold"
          >
            Username
          </label>

          <input
            type="text"
            placeholder="type your Username..."
            id="username"
            className="rounded-lg py-1 px-3"
          />
        </div>

        <div 
          className="flex flex-col gap-y-2"
        >
          <label
            htmlFor="email"
            className="text-[16px] font-bold"
          >
            Email
          </label>

          <input
            type="email"
            placeholder="type your Email..."
            id="email"
            className="rounded-lg py-1 px-3"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-secondary px-6 py-2 rounded-full font-bold duration-300 ease-in-out transition-all hover:bg-secondaryHover hover:text-white hover:duration-300 hover:ease-in-out hover:transition-all"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login