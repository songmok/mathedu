import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const TClass = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");

    const addDB = async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
                name: name,
                age: age,
                city: city,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    const inputName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };
    const inputAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    };
    const inputCity = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };
    return (
        <>
            <h1>Tclass</h1>
            <button onClick={addDB}>담기</button>
            <form>
                <input
                    type="text"
                    placeholder="이름"
                    onChange={inputName}
                ></input>
                <input
                    type="text"
                    placeholder="나이"
                    onChange={inputAge}
                ></input>
                <input
                    type="text"
                    placeholder="사는곳"
                    onChange={inputCity}
                ></input>
            </form>
        </>
    );
};

export default TClass;
