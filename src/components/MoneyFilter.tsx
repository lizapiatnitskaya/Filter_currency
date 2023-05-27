import React, {useState} from 'react';

type PropsType={
    money:MoneyType[]
}

type MoneyType={
    banknots: string
    value: number 
    number: string
}

export const MoneyFilter =(props:PropsType) =>{

    const [money, setMoney] = useState<MoneyType[]>([])

    const onClickFilterHandler =((currency:string)=>{
      
        if (currency!="All"){
        const NewMoney = props.money.filter((el:MoneyType)=>(el.banknots===currency))
        setMoney(NewMoney) 
        } else {
            setMoney(props.money) 
        }
    }) 

    return(
        <div>
            {money.map((el:MoneyType,index)=>{
             return(
                <li key={index}>
                     <span>{el.banknots}</span>
                     <span>{el.value}</span>
                     <span>{el.number}</span>
                </li>
             )
            })}
            <button onClick={()=>onClickFilterHandler('All')}>ALL</button>
            <button onClick={()=>onClickFilterHandler('Dollars')}>Dollars</button>
            <button onClick={()=>onClickFilterHandler('RUBLS')}>RUBLS</button>
        </div>
    )
}

