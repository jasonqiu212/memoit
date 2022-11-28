Rails.application.routes.draw do
  # Routes to sessions controller for login sessions
  post '/sessions', to: 'sessions#create'
  get '/logged_in', to: 'sessions#logged_in'
  delete '/logout', to: 'sessions#logout'

  # Routes for registration of new users
  post '/registrations', to: 'registrations#create'

  # Routes for tasks
  get '/tasks/all', to: 'tasks#index'
  get '/tasks/tag/:id', to: 'tasks#getTagTasks'
  post '/tasks', to: 'tasks#create'
  put '/tasks', to: 'tasks#update'
  put '/tasks/completedStatus', to: 'tasks#updateCompletedStatus'
  delete '/tasks/:id', to: 'tasks#destroy'

  # Routes for tags
  get '/tags', to: 'tags#index'
  post '/tags', to: 'tags#create'
  delete '/tags/:id', to: 'tags#destroy'

  # Setting root route
  root 'homepage#index'

  # Catch all other routes that do not match the above and
  # redirect to root route
  get '/*path' => 'homepage#index'
end
