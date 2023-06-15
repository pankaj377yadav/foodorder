import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';
import{useSelector} from 'react-redux'


const Register = ( )=> {
  const z = useSelector( state => state.user)

  console.log(z)
   
    return (
        <div>
    
      
        <Formik
          initialValues={{
            restaurantName:'',
            email: '',
            password: '',
            userType:'',
            role:'',
          }}
          onSubmit={values => {
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
          };
          fetch('http://localhost:3001/register', requestOptions)
      
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="restaurantName" placeholder="Restaurant Name"/>
              {errors.restaurantName && touched.restaurantName ? (
                <div>{errors.restaurantName}</div>
              ) : null}
              <br/>
              <Field name="email"  placeholder="email"/>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
              <br/>
              <Field name="password" placeholder="password"/>
              {errors.password && touched.password? (
                <div>{errors.password}</div>
              ) : null}
              <br/>
              <Field name="userType" placeholder="User Type"/>
              {errors.userType&& touched.userType? (
                <div>{errors.userType}</div>
              ) : null}
              <br/>
              <Field name="role"  placeholder="role"/>
              {errors.role && touched.role ? <div>{errors.role}</div> : null}
              <br/>
              
              <button type="submit">Submit</button>
              Already User <Link href="/login">Sign in</Link>
            </Form>
          )}
        </Formik>
        </div>
    )
}


export default Register