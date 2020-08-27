import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Maxim'},
        {id: 2, name: 'Vitalyi'},
        {id: 3, name: 'Alexandr'},
        {id: 4, name: 'Anton'},
        {id: 5, name: 'Andrey'},
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What is your name'},
        {id: 4, message: 'What about milk?'},
        {id: 5, message: 'What you say?'},
    ]

    let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElement = messages.map(m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div>{dialogsElement}</div>
                <div>{messageElement}</div>

            </div>
        </div>
    )
}

export default Dialogs;