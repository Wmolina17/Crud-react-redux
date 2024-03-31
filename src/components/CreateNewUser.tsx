import { Badge, Button, Card, TextInput, Title } from "@tremor/react"
import { useUserActions } from "../hooks/useUserActions"
import { useState } from "react"
import { toast } from 'sonner'

export function CreateNewUser (){

    const { addUser } = useUserActions()
    const [ result, setResult ] = useState<"ok" | "ko" | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const formData = new FormData(form) 

        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const github = formData.get("github") as string

        if ( !name || !email || !github ){
            return setResult("ko"), toast.error('Campos del formulario incompletos ')
        }

        addUser({ name, email, github })
        toast.success('Usuario agregado correctamente')
        setResult("ok")
        form.reset()
    }

    return(
        <Card style={{ marginTop: "16px" }}>
            <Title>Create New User</Title>
            <form onSubmit={handleSubmit}>
                <br />
                <TextInput placeholder=" nombre" name="name" ></TextInput>
                <br />
                <TextInput placeholder="  email" name="email" ></TextInput>
                <br />
                <TextInput placeholder="  usuario de GitHub" name="github" ></TextInput>
                <br />

                <Button type="submit" style={{ marginTop: "16px" }}>
                    Create User
                </Button>

                {/* <span>
                    {result === "ok" && <Badge style={{ marginLeft:"10px" ,padding:"5px 10px", borderRadius:"5px", color: "green", backgroundColor: "PaleGreen" }} color="green"> Guardado correctamente</Badge>}
                    {result === "ko" && <Badge style={{ marginLeft:"10px" ,padding:"5px 10px", borderRadius:"5px" ,color:"white", backgroundColor:"LightCoral" }} color="red"> Algo ha salido mal !</Badge>}
                </span> */}
            </form>
            
        </Card> 

    )
}