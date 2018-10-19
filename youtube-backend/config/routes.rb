Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :favorites
      resources :comments
      resources :users
      resources :videos

      post '/user/login', to: 'users#login'
    end
  end
end
