import { useEffect, useState } from "react"

const userfech = (url) => {

    const [data, SetData] = useState({})
    
    useEffect(() => {
        fetch(url).then((response) => {
            response.json().then((result) => {
                SetData(result)
            })
        })
    }, [])
    return data
}
export default userfech