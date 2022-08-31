import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import * as Api from "../../api";


function CertificateAddForm ({setIsAddingCertificate, certificateData, setCertificateData}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");

    //폼이 제출 됐을때,
    async function handleSubmit(e) {
    e.preventDefault();

    //입력한 값 post 보내기
    const res = await Api.post(`certificate/add`, {
      title,
      description,
      date,
    });

    //받은 데이터 certificateData에 추가하기
    const updateCertificate = res.data;
    const newCertificateData = [...certificateData, updateCertificate];
    setCertificateData(newCertificateData);

    //추가창 닫기
    setIsAddingCertificate(false);
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
                    <Form.Text className="text-success">
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
                <input type="date" 
                    onChange={(e) => setDate(e.target.value)}
                    name="date"
                    value={date}/>
                <br/>
                {!isDateValid && (
                    <Form.Text className="text-success">
                        필수 입력값입니다.
                    </Form.Text>)}
            </Form.Group>
            
            <Button variant="primary" type="submit" disabled={!isFormValid} >확인</Button>{' '}
            <Button variant="secondary" onClick={() => setIsAddingCertificate(false) }>취소</Button>
        </Form>
    )
}

export default CertificateAddForm