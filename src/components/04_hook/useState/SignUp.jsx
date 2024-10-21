import React from 'react';

//제출버튼을 클릭시 alert를 이용하여 이름과 성별을 보여주는 팝업을 나타나게 하자.
const SignUp = () => {
    let name = "", gender = "";

    const handleSubmit = (ev) => {
        alert(`이름 : ${name}, 성별 : ${gender}`);
        ev.preventDefault();
    }



    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름 : 
                <input type="text" value={name}/>
            </label>
            <br />
            <label>
                성별 :
                <select>
                    <option value="man">남자</option>
                    <option value="woman">여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    )
}