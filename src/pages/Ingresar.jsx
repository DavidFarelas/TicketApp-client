import { SaveOutlined } from "@ant-design/icons";
import { Form, Input, Button, InputNumber, Typography, Divider } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
import useHideMenu from "../hooks/useHideMenu";

const Ingresar = () => {
  const navigate = useNavigate();

  useHideMenu(false);

  const [usuario] = useState(getUsuarioStorage());

  const onFinish = ({ agente, escritorio }) => {
    localStorage.setItem("agente", agente);
    localStorage.setItem("escritorio", escritorio);

    navigate("/escritorio", { replace: true });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const { Title, Text } = Typography;

  useEffect(() => {
    if (usuario.agente && usuario.escritorio)
      navigate("/escritorio", { replace: true });
  }, [usuario, navigate]);

  return (
    <>
      <Title level={2}> Ingresar </Title>
      <Text> Ingrese su nombre y número de escritorio </Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nombre del agente"
          name="agente"
          rules={[
            {
              required: true,
              message: "Por favor ingrese su nombre",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Escritorio"
          name="escritorio"
          rules={[
            {
              required: true,
              message: "Ingrese el numero de escritorio",
            },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Ingresar;
