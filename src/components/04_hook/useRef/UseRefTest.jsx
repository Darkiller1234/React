import React from "react";

const UserRefTest = () => {




    const [name, setName] = useState("Hong Gil Dong");
    const [gender, setGender] = useState("man");
    

    const handleChangeName = (ev) => {
        setName(ev.target.value);
    }

    const handleChangeGender = (ev) => {
        setGender(ev.target.value);
    }

    const handleSubmit = (ev) => {
        alert(`이름 : ${name}, 성별 : ${gender}`);
        ev.preventDefault();
    }

    const handleReset = () => {
        setName("")
        setGender("man")
    }



    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type="text" value={name} onChange={handleChangeName}/>
            </label>
            <br />
            <label>
                성별 : 
                <select value={gender} onChange={handleChangeGender}>
                    <option value="man">남자</option>
                    <option value="woman">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
            <button type="button" onClick={handleReset}>초기화</button>
        </form>
    )
}

export default UserRefTest;