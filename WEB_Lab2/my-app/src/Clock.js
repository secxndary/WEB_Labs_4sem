import './App.css';
import { Component } from 'react';
import { render } from 'react-dom';



// ============================================   TASK 1   ============================================

class Clock extends Component {
  render() {

    var symbol = this.props.zone.substring(0, 1);                 // + \ -
    var format = Number(this.props.format);                       // формат: 12\24

    if (symbol === '+') {
      var hours = Number(this.props.zone.substring(1, 2));        // первая цифра: часы смещения
      var minutes = Number(this.props.zone.substring(3, 5));      // второе число: минуты смещения
    }
    else if (symbol === '-') {                                    // если пояс отрицательный то всё то же самое ток с минусом
      var hours = -1 * Number(this.props.zone.substring(1, 2));
      var minutes = -1 * Number(this.props.zone.substring(3, 5));
    }

    if (this.props.zone.length > 5)                                 // если смещение больше 10 часов (т.е. много цифр) то парсим по другому
    {
      if (symbol === '+') {
        var hours = Number(this.props.zone.substring(1, 3));        // первая цифра: часы смещения
        var minutes = Number(this.props.zone.substring(4, 6));      // второе число: минуты смещения
      }
      else if (symbol === '-') {                                    // если пояс отрицательный то всё то же самое ток с минусом
        var hours = -1 * Number(this.props.zone.substring(1, 3));
        var minutes = -1 * Number(this.props.zone.substring(4, 6));
      }
    }




    if (format === 24) {
      return (
        <h2>Сейчас {new Date().getHours() - 3 + hours}:{new Date().getMinutes() + minutes}:{new Date().getSeconds()} (GMT {this.props.zone})</h2>
      );
    }


    if (format === 12) {
      if ((new Date().getHours() - 3 + hours) > 12)     // если щас больше 12 часов (PM)
      {
        return (
          <h2>Сейчас {new Date().getHours() - 3 + hours - 12}:{new Date().getMinutes() + minutes}:{new Date().getSeconds()} PM (GMT {this.props.zone})</h2>
        );
      }
      else if ((new Date().getHours() - 3 + hours) < 12)  // если щас меньше 12 часов (AM)
      {
        return (
          <h2>Сейчас {new Date().getHours() - 3 + hours}:{new Date().getMinutes() + minutes}:{new Date().getSeconds()} AM (GMT {this.props.zone})</h2>
        );
      }

    }

  }
}



function tick() {
  render(
    <Clock zone='+10:00' format='24' />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);





// ============================================   TASK 2   ============================================


class Selection extends Component {
  render() {
    return (
      <div>
        <select id='selection'>
          <option>Программист</option>
          <option>Тракторист</option>
          <option>Выпекатель булочек</option>
          <option>Милиционер</option>
          <option>Трейдер</option>
        </select>
      </div>
    );
  }
}


class Links extends Component {
  render() {
    var optionForm = document.getElementById('selection');
    var selectedItem = optionForm.options[optionForm.selectedIndex].text;
    if (selectedItem === 'Программист')
      return (
        <table>
          <tr>
            <a href='https://metanit.com'>Metanit.com</a>
          </tr>
          <tr>
            <a href='https://docs.microsoft.com/ru-ru/'>MSDN</a>
          </tr>
          <tr>
            <a href='https://ru.stackoverflow.com'>Stack Overflow</a>
          </tr>
          <tr>
            <a href='https://www.cyberforum.ru'>Cyber Forum</a>
          </tr>
          <tr>
            <a href='https://otvet.mail.ru'>Ответы Mail.ru</a>
          </tr>
        </table>
      );



    if (selectedItem === 'Тракторист')
      return (
        <table>
          <tr>
            <a href='https://vk.com/bratcvotraktoristov'>Братство трактористов</a>
          </tr>
          <tr>
            <a href='https://www.agroxxi.ru/forum/viewforum.php?f=12'>Форум трактористов</a>
          </tr>
          <tr>
            <a href='https://motorist.by'>Покупка запчастей</a>
          </tr>
          <tr>
            <a href='http://www.belarus-tractor.com/service/training-center/'>Учебный центр</a>
          </tr>
          <tr>
            <a href='https://pto.by/podgotovka-traktoristov'>Курсы для трактористов</a>
          </tr>
        </table>
      );



    if (selectedItem === 'Выпекатель булочек')
      return (
        <table>
          <tr>
            <a href='https://hleb-konditera.by'>Хлеб-кондитера</a>
          </tr>
          <tr>
            <a href='https://bac-forum.ru/recipes'>Рецептуры для пекарен</a>
          </tr>
          <tr>
            <a href='http://pekari-pro.by'>Пекари-Про</a>
          </tr>
          <tr>
            <a href='https://bakenart.by'>Магазин для кондитеров</a>
          </tr>
          <tr>
            <a href='http://www.chokolato.ru/?yclid=947039219643898523'>Чоколато.ру</a>
          </tr>
        </table>
      );


    if (selectedItem === 'Выпекатель булочек')
      return (
        <table>
          <tr>
            <a href='https://hleb-konditera.by'>Хлеб-кондитера</a>
          </tr>
          <tr>
            <a href='https://bac-forum.ru/recipes'>Рецептуры для пекарен</a>
          </tr>
          <tr>
            <a href='http://pekari-pro.by'>Пекари-Про</a>
          </tr>
          <tr>
            <a href='https://bakenart.by'>Магазин для кондитеров</a>
          </tr>
          <tr>
            <a href='http://www.chokolato.ru/?yclid=947039219643898523'>Чоколато.ру</a>
          </tr>
        </table>
      );

    if (selectedItem === 'Милиционер')
      return (
        <table>
          <tr>
            <a href='https://vk.com/mvdgovby'>Паблик в вк МВД</a>
          </tr>
          <tr>
            <a href='https://gaiminsk.by/guvd-mingorispolkoma'>ГУВД Мингорисполкома</a>
          </tr>
          <tr>
            <a href='https://pravo.by'>Почитать конституцию на досуге</a>
          </tr>
          <tr>
            <a href='https://rabota.by/vacancies/milicioner'>Найти вакансии</a>
          </tr>
          <tr>
            <a href='https://deal.by/Podarki-militsioneru.html'>Подарок милиционеру</a>
          </tr>
        </table>
      );



    if (selectedItem === 'Трейдер')
      return (
        <table>
          <tr>
            <a href='https://ru.tradersdiaries.com/?yclid=947118558207337018'>Дневник трейдера</a>
          </tr>
          <tr>
            <a href='https://finviz.com/map.ashx'>FinViz.com</a>
          </tr>
          <tr>
            <a href='https://www.tipranks.com/stocks/tsla/forecast'>Tipranks.com</a>
          </tr>
          <tr>
            <a href='https://bitcoin.org/ru/buy'>Закупиться криптой</a>
          </tr>
          <tr>
            <a href='https://myfin.by/currency/usd'>Курс доллара</a>
          </tr>
          <tr>
            <a href='https://www.youtube.com/watch?v=Ay6NhY7Gf-8'>Гайд как стать богатым за 3 минуты 49 секунд</a>
          </tr>
        </table>
      );
  }
}




function pick() {
  render(
    <Selection />,
    document.getElementById('root1')
  );
}
setInterval(pick, 0);


function sick() {
  render(
    <Links />,
    document.getElementById('root2')
  );
}
setInterval(sick, 0);



// ============================================   RENDERING   ============================================


function App() {
  return (
    <div>
      <Clock />
      <Selection />
      <Links />
    </div>
  );
}

export default App;