import React, {useState, useEffect} from 'react';

// Files created or added manually (with no package dependencies)
import { EmailInterface } from '../interface';
import { doLogin } from '../api';
import { useNavigate } from 'react-router-dom';

const Login = (props : any) => {

  const { setLoginStatus } = props;

  const [formFields, setFormFields] = useState<EmailInterface>({
    name: '',
    email: ''
  });
  const [isError, setIsError] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const handleOnsubmit = async (e : any) => {
    e.preventDefault();
    const status : number = await doLogin(apiUrl, formFields);

    if (status === 200) {
      setIsError(false);
      localStorage.setItem('status', `200`);
      navigate("/dogs");
      return;
    }

    setIsError(true);
    localStorage.setItem('status', `${status}`);
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
            htmlFor="name"
            className="text-[16px] font-bold"
          >
            name
          </label>

          <input
            type="text"
            placeholder="type your name..."
            id="name"
            name="name"
            className="rounded-lg py-1 px-3"
            value={formFields.name}
            onChange={(e : any) => setFormFields({...formFields, [e.target.name]: e.target.value})}
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
            name="email"
            className="rounded-lg py-1 px-3"
            value={formFields.email}
            onChange={(e : any) => setFormFields({...formFields, [e.target.name]: e.target.value})}
          />
        </div>

        {isError ? 
          <div 
            className="flex flex-col gap-y-2"
          >
            <h1
              className="text-[20px] font-bold uppercase text-center text-red-600"
            >
                There was an error, please try again
            </h1>
          </div>
          :
          null
        }

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