import { nanoid } from '@reduxjs/toolkit';
import { getRandomDate } from '../utils/random-date';
import { Task } from '../types/task';

export const TEST_TASKS: Task[] = [
  {
    title: 'Example task',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Example task for test',
    date: getRandomDate(),
    isArchive: false,
    id: nanoid(),
  },
  {
    title: 'Nice code',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'tests',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Get fun',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
];
