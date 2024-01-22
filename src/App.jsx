import React, { useState } from 'react'
import Header from './components/Header'
import axios from 'axios'
import Home from './components/Home'
import toast from 'react-hot-toast'

const App = () => {
    const [name, setName] = useState("")
    const [user, setUser] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            toast.loading("Searching user", { id: "user" })
            const res = await axios.get(`https://api.github.com/users/${name}`)
            const data = res.data

            if (data) {
                toast.success("Successfull", { id: "user" })
                setUser(data)
                setName("")
            } else {
                toast.error("No User Found", { id: "user" })
            }
        } catch (error) {

            console.log(error);
        }
    }
    return (
        <div>
            <Header name={name} setName={setName} handleSubmit={handleSubmit} />
            {
                user ? <Home user={user} /> : null
            }

        </div>
    )
}

export default App