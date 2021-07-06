import { useEffect } from "react"
import { useHistory } from "react-router-dom";


export default function HomePage({ checkLogin, setCheckLogin, googleUserData }) {

    const history = useHistory();

    useEffect(() => {
        if (!checkLogin) {
            history.push('/login')
        }
    }, [checkLogin, history]);
    console.log(googleUserData.imageUrl)
    return (
        <>
            {checkLogin ?
                <>
                    <h1>
                        Pagina Principal
                    </h1>
                    <div>
                        <img src={googleUserData.imageUrl} alt="imagen de perfil" />
                    </div>
                </>
                :
                null
            }
        </>
    )
}


