export interface ITask {
  id: number;
  title: string;
  priority: string;
  deadline: string;
  executor: string;
  description: string;
  completed: true | false
}
