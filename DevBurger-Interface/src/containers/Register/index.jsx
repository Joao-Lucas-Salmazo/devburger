export function RegisterUser() {

    const schema = yup.object({
        email: yup.string().required("O nome é obrigatório"),
        email: yup.string().email("Digite um e-mail válido").required("O e-mail é obrigatório"),
        password: yup.string().min(6, "A senha deve ter no mínimo 6 caracteres ").required(),
        confirmPassword: yup.string().min(6, "As senhas devem serem iguais").required(),
    }).required("Digite uma senha");

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data)

    return (

        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburger" />
            </LeftContainer>

            <RigthContainer>
                <Title> Criar conta </Title>

                <Form onSubmit={handleSubmit(onSubmit)}>

                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>


                    <InputContainer>
                        <label>Confirmar senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <Button type="submit">CONFIRMAR CADASTRO</Button>

                </Form>

                <p>Já possui conta?<a>Clique aqui.</a></p>
            </RigthContainer>
        </Container>
    )

}