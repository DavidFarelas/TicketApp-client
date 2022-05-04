import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const Escritorio = () => {
  const salir = () => {
    console.log("salir");
  };

  const siguienteTicket = () => {
    console.log("Siguiente ticket");
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}> David </Title>
          <Text> Usted está trabajando en el escritorio: </Text>
          <Text type="success"> 5 </Text>
        </Col>
        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text> Usted está atendiendo el ticket: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            {" "}
            55{" "}
          </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} align="right">
          <Button onClick={siguienteTicket} shape="round" type="primary">
            <RightOutlined /> Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Escritorio;
