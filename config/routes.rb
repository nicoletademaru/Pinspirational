Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :index]
    resources :pins, only: [:create, :show, :index, :update, :destroy]
    resources :pinboards, only: [:create, :index, :destroy]
    resources :pinboards, only: [:show] do
      resources :pins, only: [:index]
    end
    
    resource :session, only: [:create, :destroy]
  end
  
  root to: 'static_pages#root'

end  
