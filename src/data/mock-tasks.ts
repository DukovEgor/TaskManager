import { nanoid } from '@reduxjs/toolkit';
import { Task } from '../types/task';
import { formatDate } from '../utils/format-date';
import { getRandomDate } from '../utils/random-date';

export const MOCK_TASKS: Task[] = [
  {
    title: 'Привет! Это приложение таск-менеджер!',
    date: getRandomDate(),
    isArchive: false,
    id: nanoid(),
  },
  {
    title: 'Кликните "Добавить задачу", чтобы начать работать с формой! Так просто!',
    date: getRandomDate(),
    isArchive: false,
    id: nanoid(),
  },
  {
    title: 'Чтобы добавить задачу, небоходимо нажать клавишу Enter или кнопку сохранить.',
    date: getRandomDate(),
    isArchive: false,
    id: nanoid(),
  },
  {
    title: 'Чтобы закрыть форму создания задачи, кликните кнопку закрыть или воспользуйтесь клавишей Esc на клавиатуре.',
    date: getRandomDate(),
    isArchive: false,
    id: nanoid(),
  },
  {
    title: 'Получить работу',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Выпить кофе c коллегами',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Написать юнит-тесты',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Провести рефакторинг',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Начать изучение Nest.js',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
];

export const INITIAL_TASK = {
  title: '',
  isArchive: false,
  id: nanoid(),
  date: formatDate(new Date()),
};
