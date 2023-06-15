import { Formik, Form, Field } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import Link from 'next/link';
import {setUserDetails} from '../../redux/reducers/userSlice'
import { useDispatch , useSelector} from 'react-redux';
import { useRouter } from 'next/router';


const Login = ( )=> {
  const router = useRouter()
  const [error,setError]=useState('')
  const {token} = useSelector(state => state.user)

  const dispatch = useDispatch();

    const triggerLogin = async(values)=>{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    };
    const res = await fetch('http://localhost:3001/login', requestOptions)
    const data = await res.json()
    if (data.isLoggedIn){
      dispatch(setUserDetails(data))
      // router.push('/users')

    }else{
      setError(data.msg)
    }

    }
    return (
        <div>
      
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => {
            triggerLogin(values)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="email" placeholder="email"/>
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : null}
              <br/>
              <Field name="password" placeholder="password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/>
              <span> {error}</span>
              <button type="submit">Submit</button>
             Dont have an account yet ? 
             <Link href="/register">Sing Up</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Login