import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle p-2 ">
          {person.length ? (
            person.map((item) => {
              return (
                <div key={item.id} className="d-flex border-bottom mx-3">
                  <img className="img-avatar" src="download.jpeg" alt="ad" />
                  <div className="px-3">
                    <p className="d-inline fs-3">{item.name} </p>
                    <p className="fs-8">{item.date} </p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="d-flex justify-content-center py-5">
              لا يوجد مواعيد اليوم
            </h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
