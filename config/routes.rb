Rails.application.routes.draw do
  post '/sessions', to: 'sessions#create'
  get 'logged_in', to: 'sessions#logged_in'
  delete 'logout', to: 'sessions#logout'

  post 'registrations', to: 'registrations#create'

  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
