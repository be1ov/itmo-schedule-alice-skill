import express from 'express';
import moment from 'moment';
import { IResponseBodyType } from './types/response-body.type';
import { IResponseType } from './types/response.type';
import { ScheduleType } from './types/schedule/schedule.type';
import { dayToText } from './utils/day-to-text';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

const schedule: ScheduleType = [
  {
    date: moment('25.10.2021', 'DD.MM.YYYY').unix(),
    lessons: [
      {
        title: 'Дискретная математика',
        auditory: 'Ломоносова 9, ауд. 2305',
        time: { start: '08:20', end: '09:50' },
      },
      {
        title: 'Линейная алгебра',
        auditory: 'Ломоносова 9, ауд. 1202',
        time: { start: '10:00', end: '11:30' },
      },
      {
        title: 'Линейная алгебра',
        auditory: 'Ломоносова 9, ауд. 1202',
        time: { start: '10:00', end: '11:30' },
      },
      {
        title: 'Линейная алгебра',
        auditory: 'Ломоносова 9, ауд. 1202',
        time: { start: '10:00', end: '11:30' },
      },
      {
        title: 'Линейная алгебра',
        auditory: 'Ломоносова 9, ауд. 1202',
        time: { start: '10:00', end: '11:30' },
      },
    ],
  },
];

app.post('/', (req, res) => {
  const responseBody: IResponseBodyType = {
    end_session: false,
    text: dayToText(schedule[0]),
  };

  const response: IResponseType = {
    session: req.body.session,
    response: responseBody,
    version: req.body.version,
  };
  res.send(response);
});

app.listen(3000);
