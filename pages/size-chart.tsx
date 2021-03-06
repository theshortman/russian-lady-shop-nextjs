import type { NextPage } from "next";
import Head from "next/head";

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Таблица размеров | {process.env.title}</title>
      </Head>
      <h1>Таблица размеров</h1>
      <div>
        <p className="fw-bold">Уважаемые клиенты!</p>
        <p>Размеры, указанные в каталоге являются российскими.</p>
        <p>
          <span className="text-danger">
            Как измерить свои размеры для выбора одежды.
          </span>
          <br />
          Производите замеры в нижнем белье. Не напрягайтесь. Прижимайте
          измерительную ленту вплотную к телу.
        </p>
        <p>
          1. Обхват груди: измеряется горизонтально по наиболее выступающим
          точкам груди.
        </p>
        <p>
          2. Обхват бедер: измеряется горизонтально по наиболее выступающим
          точкам бедер и ягодиц. При измерении поставьте ноги вместе, измеряйте
          бедра в большей их части, примерно на 15-20 см ниже талии.
        </p>
        <p>
          <span className="fw-bold">
            Размерный код равен обхвату груди деленному на два.
          </span>
          <br />
          Пример: если обхват груди равен 112 см, это соответствует 56-му
          размеру.
        </p>
        <p>
          Все размеры указаны в сантиметрах.
          <br />
          Измерения типовых фигур женщин рост 164, 170, 176.
        </p>
        <div className="table-responsive text-nowrap">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Размер</th>
                <th scope="col">48</th>
                <th scope="col">50</th>
                <th scope="col">52</th>
                <th scope="col">54</th>
                <th scope="col">56</th>
                <th scope="col">58</th>
                <th scope="col">60</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Обхват груди</th>
                <td>96</td>
                <td>100</td>
                <td>104</td>
                <td>108</td>
                <td>112</td>
                <td>116</td>
                <td>120</td>
              </tr>
              <tr>
                <th scope="row">Обхват бедер</th>
                <td>106</td>
                <td>110</td>
                <td>114</td>
                <td>118</td>
                <td>122</td>
                <td>126</td>
                <td>130</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Page;
