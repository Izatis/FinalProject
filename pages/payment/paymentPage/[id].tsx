import React, { FC, useEffect, useState } from "react";
import s from "./paymentPage.module.scss";

import { useRouter } from "next/router";
import Image from "next/image";
import { Form, Input, Checkbox, InputNumber } from "antd";
import { CreditCardOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { courseFee, reset } from "@/redux/reducers/payment.slice";
import { useGettingACourseQuery } from "@/redux/reducers/course/course";
import { useCourseFeeCartMutation } from "@/redux/reducers/payment";
import { useBasketAmountQuery } from "@/redux/reducers/cart";
import { IStripePay } from "@/redux/types/payment";

import MyButton from "@/components/UI/Buttons/MyButton/MyButton";
import ParticlesComponent from "@/components/Particles/Particles";

const Payment: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [basketAmount, setBasketAmount] = useState(0);
  const [token, setToken] = useState("");
  const { push, query }: { push: any; query: any } = useRouter();
  const dispatch = useAppDispatch();
  const courseId = query.id;

  useEffect(() => {
    const parsedToken = JSON.parse(localStorage.getItem("token") as string);
    setToken(parsedToken);
  }, []);

  // ---------------------------------------------------------------------------------------------------------------------------------
  // GET
  const { data: course = {} } = useGettingACourseQuery({
    token,
    courseId,
  });

  const { data: basketAmountBackend = 0 } = useBasketAmountQuery({ token });

  useEffect(() => {
    if (courseId === "1000") {
      setBasketAmount(basketAmountBackend);
    } else {
      setBasketAmount(course.price);
    }
  }, [course, basketAmountBackend]);

  // ---------------------------------------------------------------------------------------------------------------------------------
  // POST
  const [courseFeeCart, { data, isLoading: isLoadingCourseFeeCart }] =
    useCourseFeeCartMutation();
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);
  const onFinish = async (values: IStripePay) => {
    const token = JSON.parse(localStorage.getItem("token") as string);

    if (courseId === "1000") {
      push("/payment/paymentSuccessfully");
      await courseFeeCart({ token, values }).unwrap();
    } else {
      dispatch(courseFee({ token, courseId, values }));
    }
  };
  const { message, isLoading: isLoadingMessage } = useAppSelector(
    (state) => state.payments
  );

  useEffect(() => {
    setIsLoading(isLoadingMessage);
    if (!!message) {
      push("/payment/paymentSuccessfully");
    }
    dispatch(reset());
  }, [message, isLoadingMessage]);

  return (
    <section className={s.payment}>
      <ParticlesComponent />
      <div className={s.payment__form}>
        <h2>Оформления заказа</h2>
        <p>
          В соответствии с требованиями закона Udemy обязана взыскивать
          применимый налог с покупок, совершенных в рамках соответствующей
          налоговой юрисдикции.
        </p>
        <div className={s.payment__cards}>
          <h4>Метод оплаты </h4>

          <span>
            <Image src="/card-amex.svg" alt="AMEX" width={300} height={112} />
            <Image
              src="/card-discover.svg"
              alt="DISCOVER"
              width={300}
              height={112}
            />
            <Image
              src="/card-mastercard.svg"
              alt="MasterCard"
              width={300}
              height={112}
            />
            <Image src="/card-visa.svg" alt="VISA" width={300} height={112} />
          </span>
        </div>
        <Form
          layout="vertical"
          form={form}
          name="payment-form"
          onFinish={onFinish}
        >
          <Form.Item
            name="cardNumber"
            label="Номер карты"
            rules={[
              {
                required: true,
                message: "Please enter your card number",
              },
            ]}
          >
            <Input
              prefix={<CreditCardOutlined />}
              placeholder="1234 5678 9012 3456"
            />
          </Form.Item>

          <div className={s.container}>
            <Form.Item
              name="expMonth"
              label="Месяц"
              rules={[
                {
                  required: true,
                  message: "Please enter your card number",
                },
              ]}
            >
              <InputNumber min={1} max={12} />
            </Form.Item>

            <Form.Item
              name="expYear"
              label="Год"
              rules={[
                {
                  required: true,
                  message: "Please enter your card number",
                },
              ]}
            >
              <InputNumber min={1} max={6000} />
            </Form.Item>

            <Form.Item
              name="cvc"
              label="CVV"
              rules={[
                {
                  required: true,
                  message: "Please enter CVV",
                },
              ]}
            >
              <Input
                placeholder="CVV"
                onKeyPress={(event) => {
                  const charCode = event.which || event.keyCode;
                  if (charCode < 48 || charCode > 57) {
                    event.preventDefault();
                  }
                }}
                min={3}
                max={3}
              />
            </Form.Item>
          </div>

          <Form.Item>
            <Checkbox>
              Безопасно сохранить эту карту для моих будущих покупок
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <MyButton
              background="#03d665"
              hoverBackground="#7329c2"
              type="primary"
              loading={isLoading}
            >
              Pay Now
            </MyButton>
          </Form.Item>
        </Form>
      </div>

      <div>
        <ul className={s.payment__list}>
          <li className={s.payment__title}>Краткое описание</li>
          <li className={s.payment__total}>
            <p>Итого:</p> <span>{basketAmount} $</span>
          </li>
          <li className={s.payment__item}>
            <ul>
              <li> Завершая свою покупку, вы принимаете данные</li>
              <li>Условия предоставления услуг.</li>
              <li>
                <MyButton
                  background="#03d665"
                  hoverBackground="#7329c2"
                  type="primary"
                  // loading={isLoading}
                >
                  Завершить оформления
                </MyButton>
              </li>
              <li> Гарантия возврата денег — 30 дней</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Payment;
