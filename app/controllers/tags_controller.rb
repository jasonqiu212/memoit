class TagsController < ApplicationController
  def index
    tag = Tag.all
    render json: tag
  end

  def create; end

  def update; end

  def destroy; end
end
