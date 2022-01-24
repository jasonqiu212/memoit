class TagsController < ApplicationController
  # Get all tags
  def index
    tag = Tag.where(user_id: session[:user_id])
    render json: tag
  end

  # Create new tag
  def create
    tag = Tag.create!(title: params['title'], user_id: session[:user_id])
    if tag
      render json: { status: :created }
    else
      render json: { status: 500 }
    end
  end

  # Delete tag and associated tasks
  def destroy
    Tag.destroy_by(id: params['id'])
  end
end
