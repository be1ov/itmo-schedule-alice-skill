import moment from 'moment';
import { Day } from '../types/schedule/schedule.type';
moment.locale('ru');

function declination(number: number, declinations: string[]) {
  var cases = [2, 0, 1, 1, 1, 2];
  return declinations[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

const lessonsDeclination = [
  'Первая',
  'Вторая',
  'Третья',
  'Четвёртая',
  'Пятая',
  'Шестая',
  'Седьмая',
  'Восьмая',
  'Девятая',
  'Десятая',
];

const linkingWords = ['Затем', 'После чего', 'Дальше', 'Потом'];

export function dayToText(day: Day): string {
  const date = moment(day.date, 'X').format('DD.MM.YYYY');
  const lessons = day.lessons;

  const par_skl = declination(lessons.length, ['пара', 'пары', 'пар']);

  let text = `${date} у вас ${lessons.length} ${par_skl}. `;

  for (let i = 0; i < lessons.length; i++) {
    const lesson = lessons[i];
    let sentence = `${lessonsDeclination[i]} пара по предмету ${lesson.title} начинается в ${lesson.time.start}, в аудитории ${lesson.auditory} и продлится до ${lesson.time.end}. `;
    if (i < lessons.length - 1) {
      sentence +=
        linkingWords[Math.floor(Math.random() * linkingWords.length)] + ' ';
    }
    text += sentence;
  }

  return text;
}
