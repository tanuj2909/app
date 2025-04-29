import { useForm } from 'react-hook-form';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', { required: 'Email is required' })}
        placeholder="Email"
        type="email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        {...register('password', {
             minLength: {
                value: 6, 
                message: 'Minimum 6 characters required',
             },
             required: 'Password is required' })}
        placeholder="Password"
        type="password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit">Login</button>
    </form>
  );
}


