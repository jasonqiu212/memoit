class RegistrationsController < ApplicationController
  # Create new user
  def create
    user =
      User.create!(
        email: params['user']['email'],
        password: params['user']['password'],
        password_confirmation: params['user']['password_confirmation'],
      )
    if user
      allTag = Tag.create!(title: 'All', user_id: user.id)
      session[:user_id] = user.id
      render json: { status: :created, user: user }
    else
      render json: { status: 500 }
    end
  end
end
