class TasksController < ApplicationController
  def index
    task = Task.where(user_id: session[:user_id])
    render json: task
  end

  def tagIndex
    task = Task.where(tag_id: params['tag_id'])
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

  def update; end

  def updateCompletedStatus; end

  def destroy
    User.find(params['id']).destroy
  end
end
