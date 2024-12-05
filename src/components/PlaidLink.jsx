import { plaidLinkProps } from "@/props/componentProps"
import { Button } from "./ui/button"

import { useCallback,useState,useEffect } from "react"
import{ usePlaidLink} from'react-plaid-link'
import { useNavigate } from "react-router-dom"
import { createLinkToken } from "@/lib/actions/user.actions"


const PlaidLink = ({user,variant}) => {
    
    const [token, setToken] = useState('')
    const navigate=useNavigate();

    useEffect(()=>{
    const getLinkToken = async()=>{
        const data =await createLinkToken(user,variant)
        setToken(data?.linkToken)
    }

    getLinkToken()
    },[user,variant]);

const onSuccess=useCallback(async(public_token)=>{
// await exchangePublicToken({publicToken:public_token,user,})
navigate('/')
},[user,navigate])
    const config={
       token, onSuccess ,
    }

    const {open,ready} = usePlaidLink(config)
  return (
  <>
    {variant==='primary' ? (
       <Button  
       onClick={()=>open()}
       disabled={!ready}
       className="plaidlink-primary">
        Connect Bank
       </Button> 
    ): variant==='ghost'?(
        <Button>
            Connect Bank
        </Button>
    ): (
        <Button>
            Connect Bank
        </Button>
    )
    }
  </>
  )
}

PlaidLink.propTypes=plaidLinkProps

export default PlaidLink