import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './login'
import { useSelector } from 'react-redux'
import User from './users'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {token} = useSelector(state => state.user)
  if(!token){
    return(
      <Login/>
    )
  }else{
    return(
      <User/>
    )
  }

}
