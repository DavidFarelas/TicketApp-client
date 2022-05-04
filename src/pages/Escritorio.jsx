import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
import useHideMenu from "../hooks/useHideMenu";

const { Title, Text } = Typography;

const Escritorio = () => {
  const navigate = useNavigate();
  useHideMenu(false);
  const [usuario] = useState(getUsuarioStorage());
  const salir = () => {
    localStorage.clear();
    navigate("ingresar", { replace: true });
  };

  const siguienteTicket = () => {
    console.log("Siguiente ticket");
  };

  useEffect(() => {
    if (!usuario.agente || !usuario.escritorio)
      navigate("/ingresar", { replace: true });
  }, [usuario, navigate]);

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}> {usuario.agente} </Title>
          <Text> Usted está trabajando en el escritorio: </Text>
          <Text type="success"> {usuario.escritorio} </Text>
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
