export interface TaskEntity {
  id: string;
  title: string;
  description: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface FindByIdTaskEntity {
  id: string;
}

export interface CreateTaskDatasourceEntity {
  title: string;
  description: string;
}
