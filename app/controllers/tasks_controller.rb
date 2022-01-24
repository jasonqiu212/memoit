class TasksController < ApplicationController
  def index
    task = Task.where(user_id: session[:user_id])
    render json: task
  end

  def getTagTasks
    task = Task.where(tag_id: params['id'])
    render json: task
  end

  def getAllCompleted
    task = Task.where(user_id: session[:user_id]).where(completed: true)
    render json: task
  end

  def getTagTasksCompleted
    task = Task.where(tag_id: params['id']).where(completed: true)
    render json: task
  end

  def create
    task =
      Task.create!(
        title: params['task']['title'],
        description: params['task']['description'],
        completed: false,
        tag_id: params['task']['tag_id'],
        user_id: session[:user_id],
      )
    if task
      render json: { status: :created }
    else
      render json: { status: 500 }
    end
  end

  def update
    task = Task.find_by(id: params['task']['id'])
    task.update(
      title: params['task']['title'],
      description: params['task']['description'],
      tag_id: params['task']['tag_id'],
    )
    render json: { status: :updated, task: task }
  end

  def updateCompletedStatus
    task = Task.find_by(id: params['task']['id'])
    task.update(completed: params['task']['completed'])
    render json: { status: :created, task: task }
  end

  def destroy
    Task.destroy_by(id: params['id'])
  end
end
