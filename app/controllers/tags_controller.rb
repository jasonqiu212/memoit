class TagsController < ApplicationController
  def index
    tag = Tag.where(user_id: session[:user_id]).where.not(title: 'All')
    render json: tag
  end

  def create
    tag = Tag.create!(title: params['title'], user_id: session[:user_id])
    if tag
      render json: { status: :created }
    else
      render json: { status: 500 }
    end
  end

  def update; end

  def destroy
    Tag.destroy_by(id: params['id'])
  end
end
