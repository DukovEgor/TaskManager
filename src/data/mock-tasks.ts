import { nanoid } from 'nanoid';
import { Task } from '../types/task';
import { getRandomDate } from '../utils/random-date';

export const MOCK_TASKS: Task[] = [
  {
    title: 'Example task with default color.',
    color: 'black',
    date: getRandomDate(),
    isArchive: false,
    id: nanoid(),
  },
  {
    title: 'Example task with custom color.',
    color: 'yellow',
    date: getRandomDate(),
    isArchive: false,
    id: nanoid(),
  },
  {
    title: 'Beautyful code',
    color: 'pink',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Unit-tests',
    color: 'blue',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Get job',
    color: 'black',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Example task which marked as favorite.',
    color: 'blue',
    date: getRandomDate(),
    isArchive: false,
    id: nanoid(),
  },
  {
    title: 'Test task',
    color: 'green',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Beautyful code',
    color: 'pink',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
  {
    title: 'Unit-tests',
    color: 'blue',
    date: getRandomDate(),
    isArchive: true,
    id: nanoid(),
  },
];
