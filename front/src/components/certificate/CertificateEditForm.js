import React, {useState} from "react";
import { Form, Button, ModalTitle } from "react-bootstrap";
import * as Api from "../../api";



function CertificateEditForm ({certificateData, setCertificateData, isEditingList, setIsEditingList, certificateId}) {

    

    // _id(certificateId) 키값으로 배열에서 해당 certificate 객체찾기
    const getData = certificateData.find(certif => certif._id === certificateId)
    
    const [title, setTitle] = useState(getData.title);
    const [description, setDescription] = useState(getData.description);
    const [date, setDate] = useState(getData.Date);

    //편집창 닫는 함수
    function closeEdit () {
        const newIsEditingList = {...isEditingList}
        newIsEditingList[certificateId] = false
        setIsEditingList(newIsEditingList)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        //바뀐 값 put
        const res = await Api.put((`certificate/${certificateId}`), {
            title,
            description,
            Date
        });

        // 받은 데이터로 certificateData 수정하기
        const editData = res.data;

        const newCertificateData = [...certificateData]
        const findobj = newCertificateData.findIndex((obj) => obj._id == certificateId); //_id로 해당 객체 위치 찾기
        newCertificateData[findobj] = editData //해당 객체 데이터 바꿔주기
        setCertificateData(newCertificateData); //전체 데이터 바꿔주기
        
                        
        closeEdit();

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="titleName">
                <Form.Control 
                    type="text" 
                    placeholder="자격증 이름"
                    value={ModalTitle}
                    onChange={(e) => setTitle(e.target.value)
                    } 
                />
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
                onChange={(e) => setTitle(e.target.value)} 
                name="date"
                value={date}/>
            <br/>
            </Form.Group>
            
            <Button variant="primary" type="submit" >확인</Button>{' '}
            <Button variant="secondary" onClick={closeEdit}>취소</Button>
        </Form>
    )
}
}
export default CertificateEditForm