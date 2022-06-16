import { nanoid } from '@reduxjs/toolkit';
import { Task } from '../types/task';
import { formatDate } from '../utils/format-date';
import { getRandomDate } from '../utils/random-date';

export const MOCK_TASKS: Task[] = [
  {
    title: 'Example task with default color.',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Example task with custom color.',
    date: getRandomDate(),
    isArchive: false,
    id: nanoid(),
  },
  {
    title: 'Beautyful code',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Unit-tests',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Get job',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Example task which marked as favorite.',
    date: getRandomDate(),
    isArchive: false,
    id: nanoid(),
  },
  {
    title: 'Test task',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Beautyful code',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Unit-tests',
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
