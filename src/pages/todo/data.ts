export type ToDoItemType = {
  id: number;
  content: string;
  complete: boolean;
};

export enum VisibilityEnum {
  All = 'all',
  Active = 'active',
  Completed = 'completed',
}
