import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";



function CertificateEditForm ({certificateData, setCertificateData, isEditingList, setIsEditingList, certificateId}) {

    

    // _id(educationId) 키값으로 배열에서 해당 education 객체찾기
    const getData = certificateData.find(ctf => ctf._id === certificateId)
    
    const [title, setTitle] = useState(getData.title);
    const [description, setDescription] = useState(getData.description);
    const [date, setDate] = useState(getData.date);

    //편집창 닫는 함수
    function closeEdit () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[certificateId] = false
        setIsEditingList(newIsEditingList)
    }
    
    //폼이 제출 됐을 때
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //바뀐 값 put하기
        const res = await Api.put((`certificate/${certificateId}`), {
            title,
            description,
            date
        });

        // 받은 데이터로 CertificateData 수정하기
        const editData = res.data;

        const newCertificateData = [...certificateData]
        const findObj = newCertificateData.findIndex((obj) => obj._id == certificateId); //_id로 해당 객체 위치 찾기
        newCertificateData[findObj] = editData //해당 객체 데이터 바꿔주기
        setCertificateData(newCertificateData); //전체 데이터 바꿔주기
        
                        
        closeEdit();

    }

    // 필수값 입력 확인
    const isTitleValid = title.length > 0;
    const isDateValid = date.length > 0;

    //필수값 조건 동시에 만족되는지 확인
    const isFormValid = isTitleValid && isDateValid;

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="titleName">
                <Form.Control 
                    type="text" 
                    placeholder="자격증 이름"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)
                    } 
                />
                {!isTitleValid && (
                    <Form.Text 
                    style={{color: 'tomato', fontWeight: 'bolder' }}>
                        필수 입력값입니다.
                    </Form.Text>)}
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
                <Form.Control
                    type="text" 
                    placeholder="상세내역"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </Form.Group>
            
            <Form.Group className="mb-3">
                <input 
                    type="date" 
                    onChange={(e) => setDate(e.target.value)}
                    name="date"
                    value={date}/>
                <br/>
                {!isDateValid && (
                    <Form.Text 
                    style={{color: 'tomato', fontWeight: 'bolder' }}>
                        필수 입력값입니다.
                    </Form.Text>)}
            </Form.Group>
            
            <Button variant="primary" type="submit" disabled={!isFormValid}>확인</Button>{' '}
            <Button variant="secondary" onClick={closeEdit}>취소</Button>
        </Form>
    )
}

export default CertificateEditForm
