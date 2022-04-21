import type { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Доставка и Оплата | {process.env.title}</title>
      </Head>
      <h1>Доставка и оплата</h1>
      <div>
        <p className="fw-bold">
          Мы уважаем своих Клиентов.
          <br />
          Мы не продаем воздух.
          <br />
          Все товары, которые Вы видите на сайте приобретены нами прямо у
          производителей, проверены нами на брак и находятся на нашем складе в
          Санкт-Петербурге.
          <br />
          <span className="fw-bold">
            Информация по наличию товара, представленная на сайте, полностью
            актуальна.
          </span>
        </p>
        <h2 className="text-danger">Условия доставки</h2>
        <h3>Доставка по России и Казахстану</h3>
        <p>
          Заказ может быть отправлен на Ваш выбор:
          <br />
          1. Почтой России обычной посылкой. Данная посылка идет до Вашего
          почтового отделения около 15-30 дней (Дальний Восток до 40 дней).
          <br />
          2. Почтой России отправлением 1-го класса. Срок доставки данной
          посылки около 10-15 дней.
          <br />
          3. EMS почтой. Посылки отправленные через EMS почту идут до адресата
          около 2-7 дней.
        </p>
        <p className="fw-bold">Обратите внимание!</p>
        <p>
          Посылка с заказом будет храниться в Вашем почтовом отделении
          <span className="fw-bold">30 дней</span>.<br />
          По истечении этого срока она будет отправлена обратно.
        </p>
        <p>
          В сети интернет не так много магазинов, которые отправляют заказы
          своим клиентам без предоплаты. Мы один из них.
          <br />
          Пожалуйста, не оформляйте заказ наложенным платежом, если Вы на 100%
          не уверены в том, что сможете забрать свою посылку в почтовом
          отделении.
          <br />
          Если Вы не выкупите свой заказ на почте, и посылка вернется к нам, Вы
          более не сможете покупать товар в нашем интернет-магазине.
        </p>
        <h3>Доставка по Санкт-Петербургу и Ленинградской области</h3>
        <p>
          Доставка заказов по Санкт-Петербургу и ЛО осуществляется курьером или
          Почтой России (по Вашему желанию).
          <br />
          Доставка курьером в пределах Санкт-Петербурга -
          <span className="fw-bold text-danger">БЕСПЛАТНАЯ</span>.<br />
          Доставка курьером в: Пушкин, Павловск, Петергоф, Ломоносов, Гатчину,
          Коммунар, Кронштадт, Колпино -
          <span className="fw-bold text-danger">БЕСПЛАТНАЯ</span>.<br />
          Стоимость доставки курьером по Ленинградской области зависит от места
          доставки.
          <br />
          Доставка курьером возможна уже на следующий день после подтверждения
          заказа. Время и дата доставки согласовывается с Вами заранее. Перед
          покупкой бесплатная примерка.
        </p>
        <p className="text-danger">
          Если Вам ничего не подошло, то доставку Вы не оплачиваете.
        </p>
        <p className="fw-bold">
          Если Вы не уверены в том, какой размер Вам подойдет то, для примерки
          Вы можете заказать до 5-ти единиц товара. На стоимость доставки это
          влиять не будет.
        </p>
        <h2 className="text-danger">Оплата</h2>
        <h3>Наложенный платеж</h3>
        <p>
          Оплата производится в момент получения заказа в Вашем почтовом
          отделении. Не забудьте, что Почта России взимает комиссию за
          наложенный платеж около 2% - 9% в зависимости от суммы заказа. С
          тарифами на почтовые переводы можно ознакомиться на сайте Почты
          России.
        </p>
        <p>
          При выборе данного способа оплаты к стоимости Вашего заказа будет
          автоматически прибавлен сервисный сбор за доставку с наложенным
          платежом.
        </p>
        <p>
          - при отправлении обычной посылкой - 330 руб.
          <br />
          - при отправлении 1-ым классом - 440 руб.
          <br />
          - при отправлении EMS почтой - 900 руб.
          <br />
        </p>
        <p>
          Обращаем Ваше внимание, что наложенным платежом Вы можете заказать не
          более трех единиц товара. Исключение мы делаем только для наших
          постоянных клиентов.
        </p>
        <p>Заказанный Вами товар резервируется на 3 рабочих дня.</p>
        <p>
          После оформления заказа Вам необходимо будет для его подтверждения
          ответить на письмо, которое мы вышлем Вам на электронный адрес,
          указанный при оформлении заказа. Письмо будет Вам отправлено не
          позднее 10 часов с момента размещения заказа на сайте.
          <span className="fw-bold">
            Неподтвержденные заказы не выполняются.
          </span>
        </p>
        <p className="fw-bold">Немного о наложенном платеже.</p>
        <p className="text-danger">Какие есть плюсы у наложенного платежа?</p>
        <p>
          Вам не приходится вносить предоплату заранее. Вы экономите время,
          потому что все, что Вам необходимо сделать – это всего лишь один раз
          придти на почту за посылкой.
        </p>
        <p className="text-danger">
          Можно ли посмотреть, что лежит в посылке до ее оплаты?
        </p>
        <p>Нет, работники почты выдадут Вам посылку только после ее оплаты.</p>
        <h3 className="text-left">Предоплата 100%</h3>
        <p>
          При выборе данного способа оплаты:
          <br />- доставка заказа обычной посылкой будет
          <span className="fw-bold text-danger">БЕСПЛАТНАЯ</span>.<br />
          - доставка отправлением 1-го класса - 260 руб.
          <br />
          - доставка EMS почтой - 900 руб.
          <br />
        </p>
        <p>
          Выбрав предоплату, Вы экономите около 10% от стоимости заказа в
          сравнении с наложенным платежом.
          <br />
          Кроме того, на почте ничего дополнительно оплачивать не придется. Вам
          сразу выдадут посылку.
        </p>
        <p>
          Заказанный Вами товар резервируется на 3 рабочих дня, в течении
          данного времени Вам необходимо будет оплатить свой заказ.
        </p>
        <p>
          Оплата производиться на расчетный счет магазина. После оформления
          заказа Вам на электронную почту будет выслана квитанция для оплаты
          заказа.
          <br />
          Перечислить оплату на наш расчетный счет можно любым доступным для Вас
          способом.
          <br />
          Здесь, для примера, приведены несколько:
          <br />
          - если у Вас имеется пластиковая карта (зарплатная или кредитная),
          можно оплатить заказ, через интернет, воспользовавшись системой
          &quot;интернет-банкинга&quot; Вашего банка;
          <br />
          - в любом отделении &quot;Сбербанка&quot;. Банк в данном случае берет
          комиссию около 3% от суммы заказа;
          <br />- почтовым переводом, но обратите внимание, что в данном случае
          Почта России возьмет комиссию, такую же, как за наложенный платеж.
        </p>
        <h3>Если заказ доставляется курьером</h3>
        <p>В данном случае стоимость заказа оплачивается наличными курьеру.</p>
      </div>
    </>
  );
};

export default Page;