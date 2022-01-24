class SessionsController < ApplicationController
  include CurrentUserConcern

  # Create new session after user logs in
  def create
    user =
      User
        .find_by(email: params['user']['email'])
        .try(:authenticate, params['user']['password'])
    if user
      session[:user_id] = user.id
      render json: { status: :created, logged_in: true, user: user }
    else
      render json: { status: 401 }
    end
  end

  # Check if user is logged in
  def logged_in
    if @current_user
      render json: { logged_in: true, user: @current_user }
    else
      render json: { logged_in: false }
    end
  end

  # Clears session and logs user out
  def logout
    reset_session
    render json: { status: 200, logged_out: true }
  end
end
