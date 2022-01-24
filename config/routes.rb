Rails.application.routes.draw do
  post '/sessions', to: 'sessions#create'
  get '/logged_in', to: 'sessions#logged_in'
  delete '/logout', to: 'sessions#logout'

  post '/registrations', to: 'registrations#create'
  delete '/registrations/:id', to: 'registrations#destroy'

  get '/tasks/all', to: 'tasks#index'
  get '/tasks/tag/:id', to: 'tasks#getTagTasks'
  get '/tasks/all/completed', to: 'tasks#getAllCompleted'
  get '/tasks/tag/completed/:id', to: 'tasks#getTagTasksCompleted'
  post '/tasks', to: 'tasks#create'
  put '/tasks', to: 'tasks#update'
  put '/tasks/completedStatus', to: 'tasks#updateCompletedStatus'
  delete '/tasks/:id', to: 'tasks#destroy'

  get '/tags', to: 'tags#index'
  post '/tags', to: 'tags#create'
  put '/tags', to: 'tags#update'
  delete '/tags/:id', to: 'tags#destroy'

  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
