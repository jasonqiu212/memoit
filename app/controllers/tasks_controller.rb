class TasksController < ApplicationController
  def index
    # TODO: Filter for tasks under this user
    task = Task.all
    render json: task
  end

  def tagIndex
    # TODO: Filter for tasks under this tag
    task = Task.all
    render json: task
  end

  def create; end

  def update; end

  def destroy; end
end
