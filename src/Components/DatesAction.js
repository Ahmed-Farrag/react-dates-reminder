import React from "react";
import { Button, Col, Row } from "react-bootstrap";

const DatesAction = ({ deleteData, onViewData }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <Button className="btn-primary p-2" onClick={deleteData}>
          مسح الكل
        </Button>
        <Button className="btn-primary p-2" onClick={onViewData}>
          عرض البيانات
        </Button>
      </Col>
    </Row>
  );
};

export default DatesAction;
