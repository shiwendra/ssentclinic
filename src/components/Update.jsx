import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import updateData from "./UpdateData";

const Update = () => {
  const [items, setItem] = useState(updateData);

  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="col-md-12 pt-5 pt-lg-0 order-2 order-1 my-2">
              <h1 className="align-center"><u>Updates</u></h1>
              <Row xs={3} md={3} className="g-4">
                {items.map((data, index) => {
                  return (
                    <Col>
                      <Card className="bg-info my-2">
                        <Card.Img
                          variant="top"
                          src={data.image}
                          height={300}
                          width={400}
                        />
                        <Card.Body>
                          <Card.Title>{data.name}</Card.Title>
                          <Card.Text>{data.description}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
