import styled from "styled-components"
import { Icon } from "../../../../../../Elements/Icons/Icon"
import { useState } from "react"
import add from '/src/assets/svg/train_filters/add.svg'
import { DropdownList } from "../../../../../../Elements/Lists/DropdownList"
import { useForm, SubmitHandler } from "react-hook-form"

const Container = styled.div`
    width: 100%;
    border: 1px solid #c4c4c4;
`
const Header = styled.div`
    background: #f9f9f9;
    min-height: 107px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 30px;
    color: #292929;
    display: flex;
    gap: 2rem;
    jsutify-content: center;
    align-items: center;
    padding-left: 2rem;
`

const Content = styled.div<{$active: boolean}>`
    display: ${props => props.$active ? " flex" : "none"};
    min-height: 300px;
    width: 100%;
`

type Inputs = {
    name: string
    surname: string
}
  
export const PassengerCard = () => {
    const [active, setActive] = useState(false);
    const [ticketType, setTicketType] = useState({
        title: "Взрослый",
        value: "Взрослый"
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return(
        <Container>
            <Header>
                <Icon 
                    $srcImg={add}
                    $backgroundColor="orange"
                    $width={32}
                    $height={32}
                    onClick={() => setActive(prev => !prev)}
                    ></Icon>
                    Пассажир
            </Header>
            <Content $active={active}>
                <DropdownList
                    handler={(item) => {
                        setTicketType(item);
                    }}
                    items={[{
                        title: "Взрослый",
                        value: "Взрослый"
                    }, {
                        title: "Детский",
                        value: "Детский"
                    }, {
                        title: "Детский база",
                        value: "Детский база"
                    }]}
                    currentValue={ticketType.value}
                ></DropdownList>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input defaultValue="test" {...register("name")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input {...register("surname", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.surname && <span>This field is required</span>}
                    <input type="submit" />
                </form>
            </Content>
        </Container>
    )
}