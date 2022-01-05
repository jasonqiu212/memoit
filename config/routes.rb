Rails.application.routes.draw do
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
